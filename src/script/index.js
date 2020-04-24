(function () {
  const placesList = document.querySelector('.places-list');
  const submitContent = document.querySelector('.popup__button');
  const submitProfile = document.querySelector('.popup-profile__button');
  const formProfile = document.forms.profile;
  const formContent = document.forms.new;

  const token = '909b28bb-3627-43b8-8192-6ead5ebc62fa';
  const baseUrl = 'https://praktikum.tk/cohort9';


  const api = new Api({
    baseUrl: baseUrl,
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  });


  const card = new Card();

  //Валидация
  const validator = new FormValidator(formProfile, submitProfile);
  new FormValidator(formContent, submitContent);

  // Картинка на весь экран
  const popupImgBig = new PopupImg({
    elem: document.querySelector('.popup-img'),
  });

  //Отрисовка карточек при загрузке
  const cardList = new CardList(placesList, card, popupImgBig, api);
  cardList.render();

  //Информация о пользователе
  api.getAboutUser()
    .then(info => {
      document.querySelector('.user-info__name').textContent = info.name;
      document.querySelector('.user-info__job').textContent = info.about;
      document.querySelector('.user-info__photo').setAttribute('style', `background-image:url(${info.avatar})`);
    })
    .catch(err => {
      alert(err + ' Запрос не выполнен.');
    });

  const userInfo = new UserInfo({
    elemName: document.querySelector('.user-info__name'),
    elemJob: document.querySelector('.user-info__job'),
    name: document.querySelector('.user-info__name'),
    job: document.querySelector('.user-info__job'),
  });

  //Попап информации о пользователи
  const profilePopup = new ProfilePopup({
    elem: document.querySelector('.popup-profile'),
    button: document.querySelector('.user-info__button-edit'),
    inputName: document.querySelector('.popup__input_type_user'),
    inputJob: document.querySelector('.popup__input_type_job'),
    form: document.querySelector('.popup__form-profile'),
    userInfo,
    api,
  });

  // Открытие добавления новой карточки
  const popupContent = new PopupContent({
    elem: document.querySelector('.popup'),
    buttonOpen: document.querySelector('.user-info__button'),
    buttonSave: document.querySelector('.popup__button'),
    name: document.querySelector('.popup__input_type_name'),
    link: document.querySelector('.popup__input_type_link-url'),
    card,
    cardList,
  });
})();