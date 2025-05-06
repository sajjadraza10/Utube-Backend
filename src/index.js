import dotenv from 'dotenv'
import connectDB from './db/index.js'
import express from 'express'

const app = express()

dotenv.config({
    path: './env'
})

connectDB()
//need to handle error block
.then(()=>{
    app.listen(process.env.PORT || 4000), () => {
        console.log(`Server is running on port: ${process.env.PORT}`)
    }
})
.catch((err)=>{
    console.log('Mongo DB connection failed!!', err)
})