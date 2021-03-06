import nextCon from'next-connect';
import file from '../../../model/file'

import authMiddleware from "../../../middleware/authMiddleware";
import {connectDB} from '../../../utils/mongoDb';


const handl = nextCon().use(authMiddleware)
.get(async (req,res)=>{
    
    const userId= req.userId

    try{
        connectDB()

        const files = await file.find();
    
        if(!files) return res.status(404).send('There is no files ')
    
        return res.status(200).send(files)
    
    }catch(err){
        return res.status(400).send(err.message)
    }
})

export default handl;

