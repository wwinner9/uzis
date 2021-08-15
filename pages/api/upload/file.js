import nextConn from "next-connect";
import authMiddleware from "../../../middleware/authMiddleware";
import multConfig from "../../../middleware/multConfig";
import uploader from "../../../utils/cloudinary/updloader";


const handleUpload = nextConn()
.use(authMiddleware)
.use(multConfig)
.post(async (req,res)=>{

    const fl = req.file.img

    //return res.send(`${fl.filepath}.${fl}`)
    return res.send(fl)

    try{

        const result = uploader(fl)     

        return res.status(201).json({data:fl.file, result })

   }catch(err){
       throw err;
   }

    
})

export const config = {
    api: {
      bodyParser: false
    }
  }

export default handleUpload;