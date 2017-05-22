// doing ajax in redux can be a bit nutty at first
import axios from 'axios';

const API_KEY = '67b7a4ae370b7c0971589c51222ead15';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  // restrict to us cuz murica.
  const url = `${ROOT_URL}&q=${city},us`;
  // not dealing directly with the promise that axios returns here
  // i feel like thats wat the redux-promise is for
  // durrhuhhhrr
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}