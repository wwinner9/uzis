import nextCon from 'next-connect';
import authMiddleware from '../../../middleware/authMiddleware';

import connectDB from '../../../utils/mongoDb'
import task from '../../../model/task'


const handleTaks = nextCon().use(authMiddleware)
.get(async (req,res)=>{
    
    await connectDB();

    const {
        method, body:{title,description,isDone},idUser
    } = req;
    try{

        if(!title || !description) return res.status(400).send('Is Missing Params');

        const newTask = await task.create({
            title,
            description,
            isDone,
            user:idUser
        })
        return res.status(201).json(newTask)
    }catch(err){
        return res.status(400).json({sms:err.message})        
    }

    switch(method){
        case 'GET':
            try{

                const tasks = await task.findById({_id:idUser})       
                
                return res.status(200).json({data:tasks})

            }catch(err){
                return res.status(400).json({sms:err.message})        
            }
        case 'POST':
            try{

                if(!title || !description) return res.status(400).send('Is Missing Params');

                const newTask = await task.create({
                    title,
                    description,
                    isDone,
                    user:idUser
                })
                return res.status(201).json(newTask)
            }catch(err){
                return res.status(400).json({sms:err.message})        
            }
        default:
            return res.status(400).json({sms:"method not allowed"})
    }
})

export default handleTaks;