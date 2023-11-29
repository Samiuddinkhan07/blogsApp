import { useSelector } from "react-redux";
import { Button } from "../../styles";


const NavStatus = () =>{
    const authStatus = useSelector((state) => state.auth.status);
    const navItems = [
        {
            name:"Home",
            slug:"/",
            active:authStatus,
        },
        {
            name:"Login",
            slug:"/login",
            active:!authStatus,
        },
        {
            name:"Sign Up",
            slug:"/signup",
            active:!authStatus,
        },
        {
            name:"All Posts",
            slug:"/allposts",
            active:authStatus,
        },
        {
            name:"Add Post",
            slug:"/addpost",
            active:authStatus,
        },
    ];

    return [navItems,authStatus];
}

export const ButtonAction = ({children,button,type}) =>{
    return <Button type={type} button={button}>{children}</Button>
}

export default NavStatus;


