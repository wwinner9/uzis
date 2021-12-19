import bcrypt from 'bcrypt';
import User from '../../../model/user'
import { connectDB } from '../../../utils/mongoDb';

import tokenGen from '../../../utils/tokenGen';

export default async (req,res)=>{

    // email and password 
    const {email, password} = req.body;

    try{

        connectDB();

        const user = await User.findOne({email}).select('+password');

        if(!user) 
            return res.status(400).send('User not found')
        
        const isPasswordEqual = await bcrypt.compare(password,user.password)
    
        if(!isPasswordEqual) return res.status(400).send('Invalid Password')
        
        user.password= undefined;
    
        const token = tokenGen({id: user.id})
    
        return res.status(200).json({isLogged:true , data: {user,token}})

    }catch(err){
        return res.status(400).send(err.message)
    }

    

}