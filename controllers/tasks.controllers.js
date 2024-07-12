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
    console.log(req.params)
    const {id : taskID} = req.params
    if(Number(taskID.length) !== 24){
        return res.status(400).json({msg:`Invalid id : ${taskID}`})
    }
    //Find the item in tasks collection matching the id in params
    const task = await Task.findOne({_id:taskID})
    if(!task){
        return res.status(404).json({msg:`No task with id : ${taskID}`})
    }
    res.status(200).json({task})
}

const deleteTask = async(req,res)=>{
    const {id : taskID} = req.params;
    if(Number(taskID.length) !== 24){
        return res.status(400).json({msg:`Invalid id : ${taskID}`})
    }
    const task = await Task.findOneAndDelete({_id:taskID});
    if(!task){
        return res.status(404).json({msg:`No task with id : ${taskID}`})
    }
    res.status(200).json({task})
}


const updateTask = async(req,res)=>{
    const {id : taskID} = req.params;
    if(Number(taskID.length) !== 24){
        return res.status(400).json({msg:`Invalid id : ${taskID}`})
    }
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,
        runValidators:true
    });
    if(!task){
        return res.status(404).json({msg:`No task with id : ${taskID}`})
    }
    res.status(200).json({task})
   
}


export {getAllTasks, createTask, getTask, updateTask, deleteTask}