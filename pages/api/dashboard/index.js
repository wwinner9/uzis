import nextCon from'next-connect';

import authMiddleware from "../../../middleware/authMiddleware";


const handl = nextCon().use(authMiddleware)
.get((req,res)=>{
    return res.end('ok')
})

export default handl;

