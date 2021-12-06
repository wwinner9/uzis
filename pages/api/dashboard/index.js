import nextCon from'next-connect';
import fl from '../../../model/file'

import authMiddleware from "../../../middleware/authMiddleware";
import connectDB from '../../../utils/mongoDb';


const handl = nextCon().use(authMiddleware)
.get(async (req,res)=>{
    
    const userId= req.userId

    //await connectDB()

    const files = await fl.find()

    if(!files) return res.status(404).send('There is no files ')

    return res.status().send(files)

})

export default handl;

