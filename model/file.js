import mongoose from "mongoose";
import User from '../model/user'

const fileSchema = mongoose.Schema({
    name:{
        required : true,
        type : String,
    },
    url:{
        required : true,
        type : String,
        unique : true,
    },
    size:{
        type : String,
    },
    idUser : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {timestamps : true})

module.exports = mongoose.models.File || mongoose.model('File', fileSchema);
