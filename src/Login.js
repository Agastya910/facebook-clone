import { Button } from '@mui/material'
import React from 'react'
import {auth, provider} from "./firebase"
import "./Login.css"
function Login() {
    const signIn =() =>{

};
    
  return (
    <div className='login'>
        <div className='login__logo'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/036-facebook.png/180px-036-facebook.png"
            alt=""></img>
        </div>
        <div>
            <Button type="submit" onClick={signIn}>

            </Button>
        </div>
    </div>
  )
}

export default Login