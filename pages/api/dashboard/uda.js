//import authMiddleware from "../../../middleware/authMiddleware";



export default async function(req ,res){

    const auths = req.headers.authorisation


    return res.send('ok')
    
}


