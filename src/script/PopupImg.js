class PopupImg extends Popup {
  constructor({elem}) {
    super(elem);
  }
  imgFull(event) {
    this.event = event;

    const popUpImg = document.querySelector('.popup-img');
    const url = this.event.target.getAttribute('data-img');
    const popUpImgBig = document.querySelector('.popup-img__bigSize');

    popUpImg.classList.add('popup_is-opened');
    popUpImgBig.setAttribute('src', url);
  }
}