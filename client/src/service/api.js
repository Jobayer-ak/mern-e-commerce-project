import axios from "axios";

const URL = "http://localhost:5000"

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data)
  } catch (err) {
    console.log("Err while calling signup api ", err.message);
  }
};
