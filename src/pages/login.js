import Cookies from "js-cookie";
import { useRouter } from "next/dist/client/router";
import {useState } from "react";

import styles from '../styles/pages/login.module.css'

import Roadfile from '../components/roadfile'


export default function login(){

    const router = useRouter();
    
    const [credencials, setCredencials]= useState({
        email:'',
        password:'',
    })

    const [error , setError]=useState({})

    function validate(){
        let error= {}
        if(!credencials.email) setError(error.email='please insert an email')
        if(!credencials.password) setError(error.password='please Insert Password')

        return error
    }

    const handleChanges = (e) => setCredencials({...credencials, [e.target.name]: e.target.value})

    const handleSubmit = async (e) =>{
        e.preventDefault();

        let errors = validate();
        if(Object.keys(errors).length) return setError(errors)

        
        const resp = await auth(); 

        if(resp === undefined) return ;

        const {token} = await resp.data; // Get the token from data
        Cookies.set('token', `Bearer ${token}`); // Cookies to share it though all the app

        router.push(`/`)  // go to home      
    }


    const auth = async () => {
        try{
            const res = await fetch('http://localhost:3000/api/login/auth',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(credencials) //Convert string in to json 
            })    
            const resJson = await res.json();
            return {data : resJson.data}    
        }catch(err){
            console.log(err.message)
        }
    }

    return(
        <div className={styles.login}>

            <Roadfile/>

            <form action="" method="post" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    alt='Type your E-mail'
                    value={credencials.email}
                    onChange={handleChanges} 
                />
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    alt='PassWord'
                    value={credencials.password}
                    onChange={handleChanges}
                />
                <input type="submit" value="Connect" id='btnSubmit'/>
            </form>           
        </div>
    );
}

