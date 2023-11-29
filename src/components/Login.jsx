import {useState} from 'react';
import {Link,useNaigate} from 'react-router-dom';
import {login as authLogin} from '../store/authSlice';
import Logo from './Logo';
import Input from './Input';
import authService from '../appwrite/auth/auth';
import { useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form'
import { useState } from 'react';


const Login = () => {
    const navigate = useNaigate();
    const dispatch = useDispatch();
    const {resgister,handleSubmit} = useForm();
    const [err,setErr] = useState();

    const login = async (data) =>{
        setErr("");
        try {
           const session = await authService.userLogin(data);
           if(session){
                const userData = await authService.isUserLogged()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
           }
        } catch (error) {

            console.log("App write Login err",error)
        }
    }
  return (
    <>
    
    
    
    </>
  )
}

export default Login
