import axios from "axios";

// const URL = "http://localhost:5000"

const URL = "https://flipkart-mern-ecommerce.herokuapp.com";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data)
  } catch (err) {
    console.log("Err while calling signup api ", err.message);
  }
};

export const authenticateLogin  = async (data) =>{
  try{
    return await axios.post(`${URL}/login`, data)
  }
  catch(err){
    console.log(`Error while calling login api `, err);
    return err.response;
  }
}

export const payUsingStripe = async (data) =>{
  try{
     let response =  await axios.post(`${URL}/payment`, data);
     return response.data;
  }
  catch(error){
    console.log("Error while calling payment api ", error);
  }
}