import {useState} from 'react';
import {Link,useNaigate} from 'react-router-dom';
import {login as authLogin} from '../store/authSlice';
import Logo from './Logo';
import Input from './Input';
import authService from '../appwrite/auth/auth';
import { useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form'
import { Button, FormContainer } from '../styles';


const Login = () => {
    const navigate = useNaigate();
    const dispatch = useDispatch();
    const {register,handleSubmit} = useForm();
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
           setErr(error)
            console.log("App write Login err",error)
        }
    }
  return (
    <>
    <FormContainer>
      <form onSubmit={handleSubmit(login)}>
        <div>
          <Input
          type="text"
          label="Name :"
          placeholder="Enter Your name"
          {...register("name",{
            required:true,
          })}
          >
          <Input
          type="email"
          label="Email :"
          placeholder="email"
          {...register("email",{
            required:true,
            validate:{
              matchPattern:(value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
              || "Email should be Valid email address"
            }
          })}
          ></Input>
          </Input>
          <Input
          type="password"
          label="Password :"
          placeholder="Password"
          {...register("password",{
            required:true,
          })}
          >
          </Input>
          <Button type="submit">Create Account</Button>
        </div>
      </form>
    </FormContainer>
    </>
  )
}

export default Login
