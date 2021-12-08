import {connectDB} from '../../../../utils/mongoDb';
import task from '../../../../model/task'

import nextConn from 'next-connect';
import authMiddleware from '../../../../middleware/authMiddleware';

const handleEdit= nextConn().use(authMiddleware)
.put(async (req , res )=>{
    const {body,query :{id}, userId} = req; 

    connectDB();

    const taskExist = await task.findOne({
        _id : id,
         user : userId
    })

    if(!taskExist) return res.status(401).send('Unauthorised to Update')

    const updateTask = await task.findByIdAndUpdate(id ,body,{
        new:true,
    })

    return res.status(201).json({data:updateTask})
})

export default handleEdit;