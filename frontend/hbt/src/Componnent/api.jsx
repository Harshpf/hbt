import axios from "axios";

const API_URL = "http://localhost:4000/api";

export const signupUser = ( name, email, password) =>
  axios.post(`${API_URL}/signup`, { name, email, password });

export const loginUser = (email, password) =>
  axios.post(`${API_URL}/login`, { email, password },{ withCredentials: true});
