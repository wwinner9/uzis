import multer from 'multer';


module.exports={
    storage: multer.memoryStorage()
}

    // const strg = multer.memoryStorage(); //tell multer that firts we gonna save the file 
    // const multerUploads = multer({ strg }); // single referes that we gonna upload a single fine  

    // //const conf = multer.memoryStorage()
    // console.log(multerUploads)
    // export  {multerUploads};
