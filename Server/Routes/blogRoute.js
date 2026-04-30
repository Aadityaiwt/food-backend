import express from 'express';
import { getBlog, addBlog, updateBlog, deleteBlog, getSingleBlog } from '../Controller/blogController.js';

import {uploadImages} from '../Middleware/upload.js'

const router = express.Router()

router.get('/get-blog', getBlog)
router.get('/get-singleblog/:id', getSingleBlog)
router.post('/add-blog', uploadImages.single('image'), addBlog)

router.put('/update-blog/:id',uploadImages.single('image'), updateBlog)
router.delete('/delete-blog/:id',deleteBlog)

export default router
