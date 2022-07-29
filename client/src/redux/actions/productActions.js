import axios from "axios";
import * as actionTypes from "../constants/productConstants.js";
const URL = "http://localhost:5000";


// action
export const getProducts = ()=> async(dispatch) =>{
    try{
        const {data} = await axios.get(`${URL}/products`);
    
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data});
    }
    catch(err){
        console.log({type: actionTypes.GET_PRODUCTS_FAIL, payload: err.message});
    }
}


export const getProductDetails = (id) => async(dispatch)=>{
    try{
        dispatch({type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST});

        const {data} = await axios.get(`${URL}/product/${id}`);

        dispatch({type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data})
    }
    catch(error){
        console.log({type: actionTypes.GET_PRODUCTS_DETAILS_FAIL, payload: error.message})
    }
}