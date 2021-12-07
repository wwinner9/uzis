import nextCon from 'next-connect';
import authMiddleware from '../../../middleware/authMiddleware';

import connectDB from '../../../utils/mongoDb'
import task from '../../../model/task'


const handleTaks = nextCon().use(authMiddleware)
.post(async (req,res)=>{
 
    await connectDB();

    const {
        body:{
            title,
            description,
            isDone
        }, userId
    } = req;
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
        const tasks = await task.find({id})  
        
        return res.status(200).json({data:tasks})

    }catch(err){
        return res.status(400).json({sms:err.message})        
    }
})
.put(async (req , res )=>{
    const {body, userId : id} = req; 
    
    const updateTask = await task.findByIdAndUpdate(id,body,{
        new:true,
    })

    return res.status(201).json({data:updateTask})
})

export default handleTaks;