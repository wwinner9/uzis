import connectDB from '../../../../utils/mongoDb';
import task from '../../../../model/task'

import nextConn from 'next-connect';
import authMiddleware from '../../../../middleware/authMiddleware';



const handleOp = nextConn().use(authMiddleware)
.delete(async (req , res)=>{

    console.log('ola')
    await connectDB();
    const {id} = req.query

    return res.send(id)

    await task.findByIdAndDelete({id})

    return res.send(id)
})
.put(async (req , res )=>{
    const {body,query} = req; 

    const updateTask = await task.findByIdAndUpdate(query.id ,body,{
        new:true,
    })

    return res.status(201).json({data:updateTask})
})

export default handleOp;