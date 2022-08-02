
import { response } from "express";
import Product from "../model/product-schema.js";

export const getProducts = async (req, res) =>{
    try{
        const products = await Product.find({});

        res.status(200).json(products)
        console.log(products)
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

export const getProductByid = async (req, res) =>{
    try{
        const id = req.params.id;
        const products = await Product.findOne({"id": id});

        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

// array.find() method
// 1. It returns the value of the first element that passes test. 
// 2. It executes a function for each array element. 
// 3. It returns undefined if no elements are found.
// 4. It does not execute the function for empty element.
// 5. It does not change the original array
