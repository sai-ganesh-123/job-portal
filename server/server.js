import './config/instrument.js'
import connectDB from './config/db.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'


 const app = express()

 //Connect to database
 await connectDB()

 //middlewares

 app.use(cors())
 app.use(express.json())

 app.get('/',(req,res)=>res.send("API working"))

 //port

 const PORT = process.env.PORT || 5000

 app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
 })