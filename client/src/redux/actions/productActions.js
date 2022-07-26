import axios from "axios";
import * as actionTypes from "../constants/productConstants.js";
const URL = "http://localhost:5000";



export const getProducts = ()=> async(dispatch) =>{
    try{
        const {data} = await axios.get(`${URL}/products`);
    
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data});
    }
    catch(err){
        console.log({type: actionTypes.GET_PRODUCTS_FAIL, payload: err.message});
    }
}


