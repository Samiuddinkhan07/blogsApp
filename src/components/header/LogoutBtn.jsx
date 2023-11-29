import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth/auth";
import {logout} from '../../store/authSlice';
import { ButtonAction } from "./headerItems";


const LogoutBtn = () =>{
    const dispatch = useDispatch()
    const LogoutHander = () =>{
        authService.userLogout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <>
           <ButtonAction type={"logout"}>
            Log Out
           </ButtonAction>
        </>
    )
}

export default LogoutBtn;