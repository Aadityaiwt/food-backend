import Notes from '../Model/NotesModel.js'
import cloudinary from '../Config/clodinary.js'

export const addNotes = async(req, res)=>{
    try {
        const note = await Notes.create({
        title:req.body.title,
        des:req.body.des,
        file:req.file.path,
        public_id:req.file.filename,
        
    })
    res.json(note)
    } catch (error) {
        res.json(error)
    }
}

export const getSingleNotes = async(req, res)=>{
    try {
        const notes = await Notes.findById(req.params.id)
        res.status(200).json({
            success:true,
            data:notes
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "error fetching notes",
            error:error.message
        })
    }
}

export const getNotes=async(req, res)=>{
    try {
        const notes = await Notes.find()
        res.status(200).json({
            success:true,
            data:notes
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "error fetching notes",
            error:error.message
        })
    }
}

export const updateNotes = async(req, res)=>{
    try {
        const note = await Notes.findById(req.params.id)
        if(req.file) {
        await cloudinary.uploader.destroy(note.public_id,{resource_type:"raw"})
        note.file = req.file.path
        note.public_id = req.file.filename
    }
        note.title = req.body.title || note.title
        note.des = req.body.des || note.des
        await note.save()
        res.json(note)
    } catch (error) {
        res.json({message:"error in updating data", error})
    }

}

export const deleteNote = async(req, res)=>{
    try {
        const note = await Notes.findById(req.params.id)
        await cloudinary.uploader.destroy(note.public_id,{resource_type:"raw"})
        await Notes.findByIdAndDelete(req.params.id)
        res.json({message:"Note Deleted"})
    } catch (error) {
        res.json("error deleting note")
    }
}