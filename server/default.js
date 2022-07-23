import {products} from "./constants/data.js";
import Product from "./model/product-schema.js"


const defaultData = async() =>{
    try{
        await Product.insertMany(products)

        console.log("Daata imported successfully");
    }catch(err){
        console.log("Error while inserting default data ", err.message);
    }
}

export default defaultData;