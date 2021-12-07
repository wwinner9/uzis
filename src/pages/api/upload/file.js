import nextConn from "next-connect";
import cloudinary from 'cloudinary';

import {connectDB} from '../../../utils/mongoDb'

import fs from 'fs'

import authMiddleware from "../../../middleware/authMiddleware";
import multConfig from "../../../middleware/multConfig";
import File from '../../../model/file'


const apiCloudinary = cloudinary.v2; 
const envP = process.env

apiCloudinary.config({
    cloud_name: envP.CLOUD_NAME ,
    api_key: envP.API_KEY,
    api_secret: envP.API_SECRET,        
})


const handleUpload = nextConn()
.use(authMiddleware)
.use(multConfig)
.post(async (req,res)=>{

  const file = req.file.img

  try{
    const stream = apiCloudinary.uploader
    .upload_stream(async (error, result)=>{
        if(error) return res.status(400).send('Failed to proced with the Upload')
        
        connectDB(); // Connect to MongoDB 
        
        const newFile = await File.create({
          url: result.secure_url,
          size: 12,
          type:'img',
          idUser:req.idUser

        })

        return res.status(200).send(newFile)
        //return res.status(201).json({imgUrl: result.secure_url});
    } )
    fs.createReadStream(file.filepath).pipe(stream)



  }
  catch(error){
    return res.status(400).send(err);
  }
   
})

export const config = {
    api: {
      bodyParser: false
    }
  }

export default handleUpload;