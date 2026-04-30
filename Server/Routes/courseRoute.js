import express from 'express';
import { addCourse, getCourse, getSingleCourse } from '../Controller/courseController.js';

import {uploadVideos} from '../Middleware/upload.js'

const router = express.Router()

router.get('/get-course', getCourse)
router.get('/get-single/:id', getSingleCourse)
router.post('/add-course', uploadVideos.single('video'), addCourse)

// router.put('/update-note/:id',uploadNotes.single('file'), updateNotes)
// router.delete('/delete-note/:id',deleteNote)

export default router
