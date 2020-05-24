import axios from 'axios';
axios.defaults.baseURL = 'https://restcountries.eu/rest/v2';

export const ALL_COUNTRIES = '/all';
export const NAME_SEARCH = '/name';
