/* eslint-disable class-methods-use-this */
export default class FormValidator {
  constructor(form, button) {
    this.form = form;
    this.button = button;

    this.listener();
  }

  checkInputValidity(event) {
    this.event = event;

    const errMessage = { validLenght: 'Должно быть от 2 до 30 символов', validInput: 'Это обязательное поле', validLink: 'Здесь должна быть ссылка' };

    let message = "";

    if (this.event.target.validity.valueMissing) {
      message = errMessage.validInput;
    } else if (this.event.target.validity.typeMismatch) {
      message = errMessage.validLink;
    } else if (this.event.target.validity.tooShort) {
      message = errMessage.validLenght;
    } 
    this.event.target.nextElementSibling.textContent = message;
}

  setSubmitButtonState() {
    if (!this.form.checkValidity()) {
      this.button.disabled = true;
    } else {
      this.button.disabled = false;
    }
  }

  listener() {
    this.form.addEventListener('input', this.checkInputValidity.bind(this));
    this.form.addEventListener('input', this.setSubmitButtonState.bind(this));
  }

  clearErrors() {
    const errorText = Array.from(document.querySelectorAll('.error'));
    errorText.forEach((element) => {
      element.textContent = '';  
    });
  }
}





