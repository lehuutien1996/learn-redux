import CONFIG from '../config.development';
import axios from 'axios';

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

exports.post = (url, payload, config) => {
  return axios.post(`${CONFIG.API_URL}${url}`, payload, config)
    .then(res => res.data)
    .catch(error => Promise.reject(error.data));
};

exports.put = (url, payload, config) => {
  return axios.put(`${CONFIG.API_URL}${url}`, payload, config)
    .then(res => res.data)
    .catch(error => Promise.reject(error.data));
};

/**
 * Delete Action
 * @param {String} url
 * @param {Object} payload
 * @param {Object} config
 * @return {Promise<any>} Promise
 */
exports.delete = (url, payload, config) => {
  return axios.delete(`${CONFIG.API_URL}${url}`, config)
    .then(res => res.data)
    .catch(error => Promise.reject(error.data));
};

export default exports;
