import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title:String,
    des:String,
    video:String,
    public_id:String
})

export default mongoose.model('Course', courseSchema)