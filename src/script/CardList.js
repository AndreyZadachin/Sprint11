export default class CardList {
  constructor(container, card, popupImgBig, api) {
    this.api = api;
    this.container = container;
    this.card = card;
    this.popupImgBig = popupImgBig;

    this.listenerLikeDelBigSizeImg();
  }
  addCard(card) {
    this.container.appendChild(card);
  }
  render() {
    const addCard = this.addCard.bind(this);
    this.api.getInitialCards()
      .then(cards => {
        cards.forEach((item) => {
          addCard(this.card.create(item.name, item.link));
        })
      })
      .catch(err => {
        alert(err + ' Запрос не выполнен.');
      });
  }

  likeDelBigSizeImg(event) {
    if (event.target.classList.contains('place-card__like-icon')) {
      this.card.like(event)
    } else if (event.target.classList.contains('place-card__delete-icon')) {
      this.card.remove(event)
    } else if (event.target.classList.contains('place-card__image')) {
      this.popupImgBig.imgFull(event)
    }
  }

  listenerLikeDelBigSizeImg() {
    this.container.addEventListener('click', this.likeDelBigSizeImg.bind(this));
  }
}