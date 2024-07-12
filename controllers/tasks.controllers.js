import Task from "../models/tasks.model.js"


const getAllTasks = async(req,res)=>{
   const tasks = await Task.find({})
    res.status(200).json({tasks})
}

const createTask = async(req,res)=>{
    console.log(req.body)
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = async(req,res)=>{
    res.send('Get a single task')
}

const updateTask = async(req,res)=>{
    res.send('Update a task')
}

const deleteTask = async(req,res)=>{
    res.send('Delete a task')
}

export {getAllTasks, createTask, getTask, updateTask, deleteTask}