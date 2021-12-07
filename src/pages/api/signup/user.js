import {connectDB} from "../../../utils/mongoDb"
import User from "../../../model/user"

import bcrypt from "bcrypt"
import tokenGen from '../../../utils/tokenGen';

export default async(req,res)=>{

    //Get the Method 
    const {method} = req;

    switch(method){

        case "GET":

            connectDB();
            
            const users = await User.find({})// Find is any mongoDB function when empty brings all data
            return res.status(200).json({succes:true, data: users})

            break;

        case 'POST':
            //get the field values
            const {name, email , password} = req.body;

            if(!name || !email || !password)
                return res.status(422).send('Please complete all fields')

            try{

                //Connect with the MongoDB
                connectDB() 

                //Verify if the email exist and return the user
                const VerEmail= await User.findOne({email})
                if(VerEmail){
                    return res.status(400).json({err:'Email just existe , please try other'})
                }

                //Encrypt the password before saving 10 is ref the capacity of our hash code
                const passHashed= await bcrypt.hash(password,10)

                //Create a new user 
                const newUser = await User.create({
                    name,
                    email,
                    password: passHashed,
                })

                newUser.password= undefined;

                res.status(201).json({ success: true, data: {
                    newUser ,
                    token: tokenGen({id:newUser.id})
                }})
                
            } catch(e){
                return res.status(401).send('Failed to Save Data')
            }
        
            break;

            default:
                return res.status(405).send('Not Allowed Method')
    }
}          