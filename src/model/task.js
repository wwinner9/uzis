import {Schema,model,models} from 'mongoose';

const taskSchema = Schema({
    title:{
        type:String,
        required: true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    isDone:{
        type:Boolean,
        required:true,
        default:false
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{timestamps:true});

module.exports = models.Task || model('Task',taskSchema);