import fs from 'fs'
import cloudinary from 'cloudinary';

//import config from '../cloudinary/cloudinary.config'


export default function uploader(file){

    const apiCloudinary = cloudinary.v2; 
    const envP = process.env


    apiCloudinary.config({
        cloud_name: envP.CLOUD_NAME ,
        api_key: envP.API_KEY,
        api_secret: envP.API_SECRET,
        
    })

    //Import the config of cloudinary
    //config

    //trying to upload img over streaming

    console.log(file)

    try{
        apiCloudinary.uploader.upload(file, 
        function(error, result) {console.log(result, error)});
    }catch(err){
        throw err
    }

    // const stream = apiCloudinary.uploader
    // .upload_stream(function(error,result){
    //     console.log(result)
    // })
    // const file_reader = fs.createReadStream(file).pipe(stream)
    // console.log(stream)
}
