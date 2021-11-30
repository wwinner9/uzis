import jwt from 'jsonwebtoken';

const hash = require('../../../config/authConfig.json')

console.log(hash)


export default function tokenGen(param = {}){

    const token = jwt.sign(param, hash.secret, {
        expiresIn:10000,
    } ) 

    return token;
} 