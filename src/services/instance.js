import axios from 'axios';

class AxiosCreate {
  static _instance = null;

  constructor() {
    const headers = {};

    this._instance = axios.create({
      baseURL: 'http://localhost:4000/api',
      headers,
    });
  }

  get instance() {
    return this._instance;
  }
}

const InstAx = new AxiosCreate();

InstAx.instance.setToken = function(token) {
  InstAx.instance.defaults.headers.Authorizations = `Bearer ${token}`;
};

InstAx.instance.removeToken = function() {
  InstAx.instance.defaults.headers.Authorizations = null;
};

export default InstAx.instance;