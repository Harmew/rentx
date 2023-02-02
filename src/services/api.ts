import axios from "axios";

// Base URL for the API
const api = axios.create({
  baseURL: "http://192.168.1.13:3333",
});

export { api };
