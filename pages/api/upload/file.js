import nextConn from 'next-connect';
import authMiddleware from '../../../middleware/authMiddleware';
import multerUploads from '../../../config/multerConfig'

import Files from '../../../model/file';
import uploader from '../../../utils/cloudinary/updloader';


const updload= nextConn().use(multerUploads)
.post(async (req , res) => {

    return res.send('ok') 
    
} )

export default updload;