var actions = require('./actions');
var dispatcher = require('./dispatcher');
var constants = require('./constants');

var API = {
  fetchChirps: function () {
    get('/api/chirps').then(actions.gotChirps.bind(actions));
  },
  saveChirp: function (text) {
    text = text.trim();
    if(text === '') return;
    post('/api/chirps', {text: text}).then(actions.chirped.bind(actions));
  }
};

function get(url) {
  return fetch(url, {
    credentials: 'same-origin'
  }).then(function (res) {
    return res.json();
  });
}

function post(url, body) {
  return fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    body: JSON.stringify(body || {}),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  });
}

dispatcher.register(function (action) {
  switch (action.actionType){
    case constants.CHIRP:{
      API.saveChirp(action.data);
      break;
    }
  }
});

module.exports = API;