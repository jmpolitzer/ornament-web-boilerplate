const axios = require('axios');

module.exports = {
  get(path) {
    return axios.get(path);
  },

  create(path, body) {
    return axios.post(`api/todos`, body);
  },

  update(path, body) {

  },

  delete(path) {

  }
}
