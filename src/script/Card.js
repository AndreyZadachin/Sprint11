class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }
  like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }
  remove(event) {
    event.target.closest('.place-card').remove();
  }
  create(cardName, cardLink) {
    const placeCard = document.createElement('div');
    const placeCardImage = document.createElement('div');
    const placeCardDeleteIcon = document.createElement('button');
    const placeCardDescription = document.createElement('div');
    const placeCardName = document.createElement('h3');
    const placeCardLikeIcone = document.createElement('button');
    placeCard.classList.add('place-card');

    placeCard.appendChild(placeCardImage);
    placeCardImage.classList.add('place-card__image');
    placeCardImage.setAttribute('style', 'background-image: url(' + cardLink + ')');
    placeCard.querySelector('.place-card__image').setAttribute('data-img', cardLink);
    placeCardImage.appendChild(placeCardDeleteIcon);
    placeCardDeleteIcon.classList.add('place-card__delete-icon');
    placeCard.appendChild(placeCardDescription);
    placeCardDescription.classList.add('place-card__description');
    placeCardDescription.appendChild(placeCardName);
    placeCardName.classList.add('place-card__name');
    placeCardName.textContent = cardName;
    placeCardDescription.appendChild(placeCardLikeIcone);
    placeCardLikeIcone.classList.add('place-card__like-icon');
    return placeCard;
  };
}