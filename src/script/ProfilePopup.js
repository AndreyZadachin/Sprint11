/* eslint-disable class-methods-use-this */
import Popup from './Popup.js';

export default class ProfilePopup extends Popup {
  constructor({ elem, button, inputName, inputJob, form, userInfo, api }) {
    super(elem);

    this.inputName = inputName;
    this.inputJob = inputJob;
    this.form = form;
    this.button = button;
    this.userInfo = userInfo;
    this.api = api;

    this.listenerButtonSubmit();
  }

  show() {
    
    const info = this.userInfo.getInfo();

    this.inputName.value = info.name;
    this.inputJob.value = info.job;
    this.open();
  }
  submit(event) {
    event.preventDefault();

    const { name, job } = {
      name: this.inputName.value,
      job: this.inputJob.value
    };

    this.api.patchAboutUser(this.inputName.value, this.inputJob.value)
      .then(user => {
          this.inputName.value = user.name;
          this.inputJob.value = user.about;
          this.userInfo.setUserInfo({ name: user.name, job: user.job });
          this.userInfo.updateUserInfo({ name: user.name, job: user.job });
          this.close();
      })
      .catch(err => {
        alert(err + ' Запрос не выполнен.');
      })
  }
  listenerButtonSubmit() {
    this.form.addEventListener('submit', this.submit.bind(this));
    this.button.addEventListener('click', this.show.bind(this));
  }
}