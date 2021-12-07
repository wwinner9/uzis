import mongoose from "mongoose";
//import {Schema} from 'mongodb'
import User from '../model/user'

const fileSchema = mongoose.Schema({ 
    url:{
        required : true,
        type : String, 
    },
    size:{
        type : String,
        required:false,
    },
    type:{
        type:String, 
        default:'Image',
    },
    user:{
        type: mongoose.Schema.Types.ObjectId ,//  Schema.type.objectId ,
        ref: 'User',
    }
}, {timestamps : true})

module.exports = mongoose.models.File || mongoose.model('File', fileSchema);
