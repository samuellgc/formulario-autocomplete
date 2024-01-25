import axios from 'axios';

export function useApi() {
  const apiUri = process.env.API_KEY;

  const api = axios.create({
    baseURL: apiUri,
  });

  return { api };
}
