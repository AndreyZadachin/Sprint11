class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.token = options.headers.authorization;
  }

  getAboutUser() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this.token
      }
    })
      .then(res => this.responce(res))
      .catch(err => {
        throw err;
      });
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      headers: {
        authorization: this.token
      }
    })

      .then(res => this.responce(res))
      .catch(err => {
        throw err;
      });
  }

  patchAboutUser(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(res => this.responce(res))
      .catch(err => {
        throw err;
      });
  }

  responce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }
}