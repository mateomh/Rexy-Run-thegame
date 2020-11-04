/* eslint-disable arrow-body-style */
export default class ApiComms {
  constructor() {
    this.config = {
      gameid: 'tGhIY9XB4kv8gnoRDbJw',
      apiURL: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    };
  }

  async getScores() {
    const url = `${this.config.apiURL}${this.config.gameid}/scores/`;

    const fetchOptions = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      method: 'GET',
    };

    const data = await fetch(url, fetchOptions);
    const { result: scores } = await data.json();

    return scores;
  }

  async addScore(username, score) {
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

    const data = await fetch(url, fetchOptions);
    const resp = await data.json(); // converts the response into json

    return resp;
  }
}