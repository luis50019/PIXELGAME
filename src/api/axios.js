import axios from 'axios';
import { BASE_URL, BASE_URL_PHONES, BASE_URL_POST } from './utils.js';

export const axiosMovies = axios.create({
  baseURL:BASE_URL
})

export const axiosTV = axios.create({
  baseURL:BASE_URL
})

export const axiosPost = axios.create({
  baseURL: BASE_URL_POST
})

export const axiosStore= axios.create({
  baseURL:BASE_URL_PHONES
})