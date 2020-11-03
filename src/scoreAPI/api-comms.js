/* eslint-disable arrow-body-style */
export default class ApiComms {
  constructor() {
    this.config = {
      gameid: 'tGhIY9XB4kv8gnoRDbJw',
      apiURL: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    };
  }

  getScores() {
    const url = `${this.config.apiURL}${this.config.gameid}/scores/`;

    const fetchOptions = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      method: 'GET',
    };

    const scores = fetch(url, fetchOptions)
      .then(data => { return data.json(); }) // converts the response into json
      .then(results => { console.log(results); })
      .catch(error => { console.log(error); });

    return scores;
  }

  addScore(username, score) {
    const url = `${this.config.apiURL}${this.config.gameid}/scores/`;
    const scoreData = {
      user: username,
      score,
    };
    const fetchOptions = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify(scoreData),
    };

    const resp = fetch(url, fetchOptions)
      .then(data => { return data.json(); }) // converts the response into json
      .then(response => { console.log(response); })
      .catch(error => { console.log(error); }); // if there is an error it logs it to the console

    return resp;
  }
}