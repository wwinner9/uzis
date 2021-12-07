import formidable from "formidable";



// *** formidable for pasrsing form-data, especially file uploads.

// middleware to get the form-data
export default function(req,res,next){
    const frmd = formidable({multiples:false}) 
    
    frmd.parse(req,(err,field,files)=>{
        if(err){
            next(err);            
            return;
        } 
        //setting the req.file with the param file of this callback
        req.file=files 
        next(); // call next step || api route
        
    })
}

//formidable documentation : https://www.npmjs.com/package/formidable
