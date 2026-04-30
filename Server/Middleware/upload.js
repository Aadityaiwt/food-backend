import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../Config/clodinary.js";

// Notes Storage
const notesStorage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:"notes",
        resource_type: "raw",
        allowed_formats:['pdf']
    }
})

// Video Storage
const videosStorage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:"videos",
        resource_type: "video",
        allowed_formates:['mp4']
    }
})

// Image Storage
const imagesStorage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:"blog",
        allowed_formates:['.jpg', '.png', 'jpeg']
    }
})

export const uploadNotes = multer({storage:notesStorage})
export const uploadVideos = multer({storage:videosStorage})
export const uploadImages = multer({storage:imagesStorage})

