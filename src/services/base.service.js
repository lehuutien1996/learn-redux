import CONFIG from '../config.development';
import axios, { AxiosRequestConfig } from 'axios';

let exports = {};

/**
 * Get all the resource with request configuration
 * @param {String} url request end point
 * @param {AxiosRequestConfig} config the configuration object
 */
exports.get = (url, config) => {
  return axios.get(`${CONFIG.API_URL}${url}`, config)
    .then(res => res.data)
    .catch(error => Promise.reject(error.data));
};

export default exports;
