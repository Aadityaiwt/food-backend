import express from 'express';
import { addCourse, deletecourse, getCourse, getSingleCourse, updateCourse } from '../Controller/courseController.js';

import {uploadVideos} from '../Middleware/upload.js'

const router = express.Router()

router.post('/add-course', uploadVideos.single('video'), addCourse)
router.get('/get-course', getCourse)
router.get('/get-one/:id', getSingleCourse)

router.put('/update-course/:id', uploadVideos.single('video'), updateCourse)
router.delete('/delete-course/:id',deletecourse)

export default router
