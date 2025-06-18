import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares (allow frontend to connect with backend)
app.use(express.json())
app.use(cors())

//api endpoint
app.get('/',(req,res)=>{
    res.send('API Working Properly')
})

app.listen(port, ()=> console.log("Server  started", port))