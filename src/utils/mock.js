import mockAdapater from 'axios-mock-adapter';
import axios from './axios';

const instance = new mockAdapater(axios, {delayResponse: 0});

export default instance;