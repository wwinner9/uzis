import nextConn from "next-connect";
import authMiddleware from "../../../../middleware/authMiddleware";

import task from '../../../../model/task';
import { connectDB } from "../../../../utils/mongoDb";


const handleUpdate = nextConn().use(authMiddleware)
.delete(async (req , res)=>{

    const {query:{id}, userId} = req;

    connectDB();

    const taskExist = await task.findOne({_id:id , user:userId})

    if(!taskExist) return res.status(401).send('Not allowed to delete')

    await task.findByIdAndDelete(id)

    return res.send('Deleted')

    try{



    }catch(err){
        return res.status(400).send('Failed to Delete :)')
    }


})

export default handleUpdate;