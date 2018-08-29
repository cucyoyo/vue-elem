import Vue from 'vue';
import axios from 'axios';

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.baseURL = '/api';

Vue.prototype.axios = axios;

export default axios;
