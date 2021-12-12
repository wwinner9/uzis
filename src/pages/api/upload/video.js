import nextConn from 'next-connect';

import cloudinary from 'cloudinary';
import authMiddleware from '../../../middleware/authMiddleware';
import multConfig from '../../../middleware/multConfig'; 


const envP = process.env;
const apiCloudinary = cloudinary.v2;

apiCloudinary.config({
    cloud_name: envP.CLOUD_NAME ,
    api_key: envP.API_KEY,
    api_secret: envP.API_SECRET,        
})

const handleUploadVideo= nextConn()
.use(authMiddleware)
.use(multConfig)
.post(async (req, res)=>{

    const video = req.file.vid;

    cloudinary.v2.uploader.upload(video.filePath, 
    { resource_type: "video", 
      public_id: "myfolder/video/",
      chunk_size: 6000000,
      eager: [
        { width: 300, height: 300, crop: "pad", audio_codec: "none" }, 
        { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" } ],                                   
      eager_async: true,
      eager_notification_url: "https://mysite.example.com/notify_endpoint" },
    function(error, result) {console.log(result, error)});

    return res.send(video.filePath)

})


export const config ={
    api:{
        bodyParser:true,
        limit: 120,
    }
}

export default handleUploadVideo;



