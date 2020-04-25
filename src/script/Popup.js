import FormValidator from './FormValidator.js';

export default class Popup {
  constructor(elem) {
    this.elem = elem;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.submitProfile = document.querySelector('.popup-profile__button');
    this.submitContent = document.querySelector('.popup__button');
    this.form = document.forms.new;

    this.listener();
  }

  open() {
    this.elem.classList.add('popup_is-opened');
    this.submitContent.disabled = true;
  }

  close() {
    this.elem.classList.remove('popup_is-opened');
    this.submitContent.disabled = false;
    this.form.reset();
    FormValidator.prototype.clearErrors();
  }

  listener() {
    this.elem.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
  }
}