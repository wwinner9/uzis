import cd from 'cloudinary';

const apiCloudinary = cd.v2;
const envP = process.env

// Params to config the cloudinary api 
const paramsCloudinary = {
    cloud_name: envP.CLOUD_NAME ,
    api_key: envP.API_KEY,
    api_secret: envP.API_SECRET,
}

if(!paramsCloudinary.api_key || !paramsCloudinary.cloud_name || !paramsCloudinary ){
    console.log('Please enter the params');
}
    

export default function config(){
    apiCloudinary.config({paramsCloudinary})
}