import bcrypt from 'bcrypt';
import User from '../../../model/user'

export default async (req,res)=>{

    // email and password 

    const {email, password} = req.body;

    const user = await User.findOne({email}).select('+password');

    if(!user) 
        return res.status(400).send('User not found')
    
    const 

}