import axios from "axios";

const URL = "http://localhost:5000";

import * as actionTypes from "../constants/productConstants.js";

export const getProducts = ()=> async(dispatch) =>{
    try{
        const {data} = await axios.get(`${URL}/products`);
    
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data});
    }
    catch(err){
        console.log({type: actionTypes.GET_PRODUCTS_FAIL, payload: err.message});
    }
}


