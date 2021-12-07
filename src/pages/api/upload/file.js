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
.use(authMiddleware) //use the middleware for authentication
.use(multConfig) // Formidable config
.post(async (req,res)=>{

  const file = req.file.img

  /**
   * See Cloudinary documentation 
   * streamming = help us with the integrity of the files(video or music) 
   * through the piratation
   *
   **/

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
    fs.createReadStream(file.filepath).pipe(stream) //this stream is only for reading



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