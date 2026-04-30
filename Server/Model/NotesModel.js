import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title:String,
    des:String,
    file:String,
    public_id:String
})

export default mongoose.model('Notes', notesSchema)