import mockAdapater from 'axios-mock-adapter';
import axios from './axios';

const instance = new mockAdapater(axios, {delayResponse: 1});

export default instance;