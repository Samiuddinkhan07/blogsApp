import Logo from "../Logo";
import { useNavigate , Link } from "react-router-dom";
import NavStatus from "./headerItems";
import LogoutBtn from "./LogoutBtn";
import { useSelector } from "react-redux";
import { ButtonAction } from "./headerItems";


const Header = () => {
  const [navItem,authStatus] = NavStatus();
  const navigate = useNavigate();
  return (
    <>
        <div className="logo-section"> 
       <h1>BLOGS.</h1>
        </div>
        <ul className="nav-links">
          {navItem.map((el) =>{
            return el.active ? (
              <li key={el.name}>
                <ButtonAction onClick={() => navigate(el.slug)} button={el.name}>
                  {el.name}
                </ButtonAction>
              </li>
            ) : null
          })}
          {authStatus && (
            <li>
              <LogoutBtn/>
            </li>
          )}
        </ul>
    </>
  )
}

export default Header
