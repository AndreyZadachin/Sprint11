class UserInfo {
  constructor({elemName, elemJob, name, job}) {
    this.elemName = elemName;
    this.elemJob = elemJob;
    this.userName = name;
    this.userJob = job;
  }

  setUserInfo({ name, job }) {
    this.userName = name;
    this.userJob = job;
  }

  updateUserInfo() {
    this.elemName.textContent = this.userName;
    this.elemJob.textContent = this.userJob;
  }

  getInfo() {
    return { name: this.userName, job: this.userJob };
  }
}