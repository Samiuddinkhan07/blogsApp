import {useState} from 'react'
import authService from '../appwrite/auth/auth';
import {Link,useNavigate} from 'react-router-dom';
import { login } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import {Button,FormContainer} from '../styles';
import {useForm} from 'react-hook-form';
import Input from './Input';


const Signup = () => {
    const [err,setErr] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register,handleSubmit} = useForm();

    const create = async (data) =>{
        setErr("")
        try {
            const signUp = await authService.createAccount(data);
            if(signUp) {
                const userData = authService.isUserLogged();
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setErr(err)
        }
    }
  return (
    <div>
      <FormContainer>
      <form onSubmit={handleSubmit(login)}>
        <div>
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
          >
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
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </FormContainer>
    </div>
  )
}

export default Signup
