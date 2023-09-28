import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.ARTICULOS_URL
})