import express from 'express'
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from '../controllers/tasks.controllers.js'
const router = express.Router()

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask)


export default router