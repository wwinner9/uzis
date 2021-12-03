import nextCon from'next-connect';
import fl from '../../../model/file'

import authMiddleware from "../../../middleware/authMiddleware";


const handl = nextCon().use(authMiddleware)
.get(async (req,res)=>{
    
    const userId= req.userId

    const files = await fl.find({})

    if(!files) return res.status(404).send('There is no files ')

    return res.status().send(files)

})

export default handl;

