import mongoose from 'mongoose'
import express from 'express'
import { DB_Name } from '../constants.js';

const app = express()

const connectDB  = async ()=> {
    try{
       const connectionDB = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
       console.log(`\n MongoDb Connected! DB HOST: ${connectionDB.connection.host}`)
    } catch(error){
        console.error("Error:",error)
        process.exist(1)
    }

}

export default connectDB;