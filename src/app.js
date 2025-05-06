import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({
    limit: "16kb",
}))
 //url issue karta hai sometime  browser add kar dayta hai URL ko for that we need an encoder
 app.use(express.urlencoded({extended: true, limit: '16kb'}))

 app.use(express.static.('public'))
 app.use(cookieParser())

export { app }