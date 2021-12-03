import nextConn from "next-connect";
import authMiddleware from "../../../middleware/authMiddleware";
import multConfig from "../../../middleware/multConfig";


const handleUpload = nextConn()
.use(authMiddleware)
.use(multConfig)
.post(async (req,res)=>{

    const fl = req.file

    return res.send({data:fl})

})

export const config = {
    api: {
      bodyParser: false
    }
  }

export default handleUpload;