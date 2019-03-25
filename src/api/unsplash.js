import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2a2240d3f10ad3b951ba710dd7e3a108549b97688b24de511408ff188bc9375c'
  }
});