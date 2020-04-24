class PopupContent extends Popup {
  constructor({elem, buttonOpen, buttonSave, name, link, card, cardList}) {
    super(elem);

    this.buttonOpen = buttonOpen;
    this.buttonSave = buttonSave;
    this.name = name;
    this.link = link;
    this.cardList = cardList;
    this.card = card;

    this.listenerButtonOpen();
    this.listenerButtonSave();
  }
  addNewCard(event) {
    event.preventDefault();

    this.cardList.addCard(this.card.create(this.name.value, this.link.value));
    this.close();
  }
  listenerButtonSave() {
    this.buttonSave.addEventListener('click', this.addNewCard.bind(this));
  }
  listenerButtonOpen() {
    this.buttonOpen.addEventListener('click', this.open.bind(this));
  }
}