/* eslint-disable no-console */
const axios = require('axios');

let text = '';
let target = 'la';
let source = 'id';

const encodedParams = new URLSearchParams();

export const updateParams = ({
  words,
  langStatus,
}) => {
  encodedParams.delete('text');
  encodedParams.delete('target');
  encodedParams.delete('source');

  text = words;

  if (langStatus === true) {
    target = 'id';
    source = 'la';
  } else {
    target = 'la';
    source = 'id';
  }

  encodedParams.append('text', text);
  encodedParams.append('target', target);
  encodedParams.append('source', source);
};

const options = {
  method: 'POST',
  url: 'https://kamus-bahasa-latin.herokuapp.com/api/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
  data: encodedParams,
};

export const translate = () => axios
  .request(options)
  .then((response) => response.data)
  .catch((error) => error);

const optionsFlora = {
  method: 'GET',
  url: 'https://kamus-bahasa-latin.herokuapp.com/api/flora',
};

export const listFlora = () => axios
  .request(optionsFlora)
  .then((response) => response.data)
  .catch((error) => error);

const optionsFauna = {
  method: 'GET',
  url: 'https://kamus-bahasa-latin.herokuapp.com/api/fauna',
};

export const listFauna = () => axios
  .request(optionsFauna)
  .then((response) => response.data)
  .catch((error) => error);
