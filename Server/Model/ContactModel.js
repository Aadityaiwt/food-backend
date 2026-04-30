import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

export default mongoose.model('Contact', contactSchema)