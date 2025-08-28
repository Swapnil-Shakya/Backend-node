import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path: "./env"
});

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.log("Error connecting to database", err)
        throw err;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("MONGO db connection failed !!", err)});   








// import express from "express";
// const app = express();

// function connectDB() {}

// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (err) => {
//             console.log("Error connecting to database", err)
//             throw err;
//             })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server started on port ${process.env.PORT}`)
//         });

//     } catch (error) {
//         console.log("Error connecting to database", error);
//         throw error;
//     }
// })()