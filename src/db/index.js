import mongoose from "mongoose";

import { DB_name } from "../constants";


const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`);
        console.log(`Mongo DB connected !! DB host ${connectionInstance.connection.host}`);
        console.log(connectionInstance)
    } catch (error) {

        console.log("Error",error);
        process.exit(1)
        
    }

}