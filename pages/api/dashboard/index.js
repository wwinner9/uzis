import nextCon from'next-connect';

import authMiddleware from "../../../middleware/authMiddleware";


const handl = nextCon().use(authMiddleware)
.get((req,res)=>{
    return res.json({data: req.userId ,sms:'ok'})
})

export default handl;

