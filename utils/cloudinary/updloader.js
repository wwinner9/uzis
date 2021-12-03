import fs from 'fs'
import cloudinary from 'cloudinary';

import config from '../cloudinary/cloudinary.config'


export default function uploader(file){

    const apiCloudinary = cloudinary.v2; 

    //Import the config of cloudinary
    config()

    //trying to upload img over streaming

    const stream = apiCloudinary.uploader.upload_stream(function(error,result){console.log(result)})
    const file_reader = fs.createReadStream(img).pipe(stream)

}
