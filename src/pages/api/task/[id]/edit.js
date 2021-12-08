import {connectDB} from '../../../../utils/mongoDb';
import task from '../../../../model/task'

import nextConn from 'next-connect';
import authMiddleware from '../../../../middleware/authMiddleware';

const handleEdit= nextConn().use(authMiddleware)
.put(async (req , res )=>{
    const {body,query} = req; 

    connectDB();

    const updateTask = await task.findByIdAndUpdate(query.id ,body,{
        new:true,
    })

    return res.status(201).json({data:updateTask})
})

export default handleEdit;