import 'regenerator-runtime/runtime';
import ApiComms from '../../src/scoreAPI/api-comms';

const apiLink = new ApiComms();

test('1. Test the correct URL for the API', () => {
  const fromLink = apiLink.config.apiURL;
  const apiurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  expect(fromLink).toEqual(apiurl);
});

test('2. Getting the scores with no errors', () => {
  expect(apiLink.getScores() instanceof Promise).toBeTruthy();
});

test('3. Adding scores with no errors', () => {
  expect(apiLink.addScore('test', 0) instanceof Promise).toBeTruthy();
});