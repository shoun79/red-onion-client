import axios from "axios";

const baseURL = 'http://localhost:5000/'

const headers = {
    'content-type': 'application/json'
}

const token = localStorage.getItem('token')
if (token) {
    headers.Authorization = `Bearer ${token}`
}

export const axiosInstance = axios.create({
    baseURL,
    headers
})