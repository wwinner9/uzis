import mongoose from 'mongoose'

const userSchema= mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        type:String,
        required:true,
        lowercase:true,        
    },
    password:{
        type : String,
        required: true,
        select:false,
    }
    
}, {timestamps:true})

//Export the model if 
module.exports = mongoose.models.User || mongoose.model('User', userSchema)

