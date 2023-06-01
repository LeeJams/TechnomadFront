import Axios from "axios";
const instance = Axios.create();

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const baseUrl = "http://localhost:3000/api";
const defaultHeaders = {
  "Content-Type": "application/json;charset=UTF-8",
  Accept: "*/*",
};

const httpInstance = {
  get(uri, params = {}, headers = {}, additionalConfig = {}) {
    const url = `${baseUrl}${uri}`;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      ...additionalConfig,
      params,
    };

    const promise = instance.get(url, config);
    return promise.then(({ data }) => data);
  },
  put(uri, params = {}, headers = {}, additionalConfig = {}) {
    const url = `${baseUrl}${uri}`;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      ...additionalConfig,
    };
    const promise = instance.put(url, params, config);
    return promise.then(({ data }) => data);
  },
  post(uri, params = {}, headers = {}, additionalConfig = {}) {
    const url = `${baseUrl}${uri}`;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      ...additionalConfig,
    };
    const promise = instance.post(url, params, config);
    return promise.then(({ data }) => data);
  },
  delete(uri, params = {}, headers = {}, additionalConfig = {}) {
    const url = `${baseUrl}${uri}`;
    const config = {
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      ...additionalConfig,
      params,
    };
    const promise = instance.delete(url, config);
    return promise.then(({ data }) => data);
  },
};

export const axios = instance;
export const http = httpInstance;
export default http;
