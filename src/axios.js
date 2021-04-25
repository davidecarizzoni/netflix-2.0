// This is a good library to make request
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;