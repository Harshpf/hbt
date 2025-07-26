// import API from './axioxInstance';

// export const addNewHabit = (habitCard) => API.post('/addNewHabit', habitCard);

// export const getAllHabits = () => API.get('/getAllHabits');
import API from "./api"; // ✅ import the instance with cookies enabled

export const signupUser = (name, email, password) =>
  API.post("/signup", { name, email, password });

export const loginUser = (email, password) =>
  API.post("/login", { email, password }); // cookies sent automatically

export const addNewHabit = (habitCard) =>
  API.post("/addNewHabit", habitCard);

export const getAllHabits = () =>
  API.get("/getAllHabits");
