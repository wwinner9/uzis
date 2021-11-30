import jwt from 'jsonwebtoken';

const hash = require('../config/authConfig.json')

export default function tokenGen(params = {}){

    const token =  jwt.sign(params, hash.secret, {
        expiresIn:10000,
    } ) 

    return token;
} 