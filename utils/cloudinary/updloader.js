import fs from 'fs'
import cloudinary from 'cloudinary';

export default function uploader(file){

    const apiCloudinary = cloudinary.v2; 
    const envP = process.env

    apiCloudinary.config({
        cloud_name: envP.CLOUD_NAME ,
        api_key: envP.API_KEY,
        api_secret: envP.API_SECRET,        
    })

    try{
        const stream = apiCloudinary.uploader
        .upload_stream((error, result)=>{
            if(error) return res.status(400).send('Failed to proced with the Upload')
            return res.status(201).json({imgUrl: result.secure_url});
        } )
        fs.createReadStream(file.filepath).pipe(stream)
    }
    catch(error){
        return res.status(400).send(err);
    }


    // switch(opt){

    //     case 'image':
            
    //     case 'video':
    //         try{

    //             return res.send('video')

    //         }
    //         catch(error){

    //         }
    //     default:
    //         return res.status(404).send('operation doesnt exist')
            
    // }            
}


