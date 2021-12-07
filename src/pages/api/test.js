import { connectDB } from "../../utils/mongoDb";

export default async function(req,res){

    connectDB();

    return res.send('connect')

} 