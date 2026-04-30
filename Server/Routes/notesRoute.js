import express from 'express';
import { getNotes, addNotes, updateNotes, deleteNote, getSingleNotes } from '../Controller/notesController.js';

import {uploadNotes} from '../Middleware/upload.js'

const router = express.Router()

router.get('/get-notes', getNotes)
router.get('/get-single/:id', getSingleNotes)
router.post('/add-notes', uploadNotes.single('file'), addNotes)

router.put('/update-note/:id',uploadNotes.single('file'), updateNotes)
router.delete('/delete-note/:id',deleteNote)

export default router
