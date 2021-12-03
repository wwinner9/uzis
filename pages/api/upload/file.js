import nextConn from 'next-connect';
import authMiddleware from '../../../middleware/authMiddleware';

import User from '../../../model/user'
import Files from '../../../model/file'
import fdb from '../../../model/file'


const updload= nextConn().use(authMiddleware)
.post( async (req , res) => {

    const {name, size ,url , type} = req.body;
    const idUser= req.userId;

    //const idExist = await User.findOne({id:idUser})

    //if(!idExist) return res.status(400).send({ err : 'Unable to proceed'}) 
    const iten = {
        name,
        url,
        size,
        type,
        idUser,
    }

    switch(type){
        case 'image':

            break;
        case 'video':
            
            break;
    }

    try{
        const newFile = await Files.create(iten)

        return res.status(200).send({sms:'Adde',data:newFile})
    }catch(err){
        return res.status(400).json({sms:'Error in execution',err})
    }

    
} )

export default updload;