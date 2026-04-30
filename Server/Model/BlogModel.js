import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:String,
    content:String,
    image:String,
    public_id:String
})

export default mongoose.model('Blog', blogSchema)