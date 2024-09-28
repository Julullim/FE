import axios from 'axios'

const base_URL = import.meta.env.VITE_BASE_URL

const instance = axios.create({
    baseURL: `${base_URL}`
})

export default instance;
