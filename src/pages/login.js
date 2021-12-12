import { Param } from "cloudinary-core";
import { useState } from "react";


export default function login(){

    const [credencial,setCredencial]= useState({
        email:'',
        password:''
    });

    function handeSubmit(e){
        e.preventDefault();

        console.log(email)
        
    }
    
    
    return(
        <>
            <h2>Login</h2>

            <form action='Post' onSubmit={handeSubmit}>
                <input 
                    type='email' 
                    onChange={ e=> setCredencial(...email , e.target.value )}>
                </input>
                <input type='password' onChange={e=> setCredencial(...password ,e.target.value)}></input>
                <button type='submit'>Connect</button>
            </form>    
        
        </>
    );
}

function getServerSide(req){

    Param:{

    }
}

