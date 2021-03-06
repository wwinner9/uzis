import nextCon from 'next-connect';
import authMiddleware from '../../../middleware/authMiddleware';

import {connectDB} from '../../../utils/mongoDb'
import task from '../../../model/task'


const handleTaks = nextCon().use(authMiddleware)
.post(async (req,res)=>{

    const {
        body:{
            title,
            description,
            isDone
        }, 
        userId
    } = req;
 
    connectDB();

    const taskExist = await task.findOne({user:userId ,title})

    if(taskExist) return res.status(400).send('Taks title already exist')

    try{

        if(!title || !description) return res.status(400).send('Is Missing Params');

        const newTask = await task.create({
            title,
            description,
            isDone,
            user:userId
        })

        return res.status(201).json(newTask)
    }catch(err){
        return res.status(400).json({sms:err.message})        
    }
})
.get(async (req , res)=>{
    
    const {userId:id}= req; 

    try{
        await connectDB();
        const tasks = await task.find({user:id})  
        
        return res.status(200).json({data:tasks})

    }catch(err){
        return res.status(400).json({sms:err.message})        
    }
})


export default handleTaks;