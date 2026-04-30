import express from 'express'
import { deleteMessage, getMessage, sendMessage } from '../Controller/contactController.js'

const router = express.Router()

router.post('/send-message', sendMessage)
router.get('/get-message', getMessage)
router.delete('/delete-message/:id', deleteMessage)

export default router