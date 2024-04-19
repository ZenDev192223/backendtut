import mongoose from "mongoose";
import { DB_name } from "./constants";
// import express from "express";

// const app = express();

// ;(async()=>{
//     try {

//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
//         app.on("error",(error)=>{
//             console.log("error",error)
//             throw(error)
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App listening on ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR:",error)
//         throw(error)
//     }
// })()