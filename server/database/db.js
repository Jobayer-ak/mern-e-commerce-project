import mongoose from "mongoose";


export const Connection = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.edrdlqd.mongodb.net/ecommerce`;
  
    try{
        await mongoose.connect(URL), {useNewUrlParser: true, useUnifiedTopology: true};
        console.log("Database connected successfully!")
       
    }catch(err) {
        console.log("Error while connecting with the database ", err.message)
    }
}

export default Connection;