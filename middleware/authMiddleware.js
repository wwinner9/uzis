import jwt from 'jsonwebtoken'

export default function (req , res , next){

    const appKey = require('../config/authConfig.json')

    //Validating the token 
    const auths = req.headers.authorisation

    //Validate the existance
    if(!auths) return res.status(401).send({error:'missing token'})

    //Validate the Composition
    const parts = auths.split(' ')
    //Token or authorization must contains 2 parts [ bearer + token ]
    if(!parts.lentgh ===2) return res.status(401).send({error:'wrong Token'})

    const {bearer , token} = parts;

    // Validate the part bearer //  /^Bearer$/ = regExp i set as caseSensitive .test(the el to test) 
    if(!/^Bearer$/i.test(bearer)) return res.status(401).send({error:'Token bad builded'})

    jwt.verify(token, appKey , (err, decoded)=>{
        if(err) return res.status(401).send({error:'Invalid Toke'})

        //sending back the info
        req.userId = decoded.id;
        return next();
    } )


}