
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true, 'Name is required'],
        trim:true,
        maxlength:[30, 'Name can not be more than 30 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const Task = mongoose.model('Task', taskSchema);
export default Task;