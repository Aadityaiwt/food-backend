import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

dotenv.config()

const app = express()

app.use(cors())

const port = process.env.port || 4000

app.get('/', (req, res)=>{
    res.send("Server is running");
    
})
mongoose.connect(process.env.mongodb_url)
.then(()=>console.log("MongoDb Connected"))
.catch((err)=>console.log(err))

app.listen(3000, ()=> {
    console.log(`Server is running on http://localhost:${port}`)
})

