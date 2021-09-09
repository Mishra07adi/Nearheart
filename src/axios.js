import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://nearheart-backend.herokuapp.com/'
});

export default instance;