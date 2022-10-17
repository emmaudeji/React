import {NavLink} from "react-router-dom";
import NavData from "./NavData";
import { useAuth } from "./auth";

function NavBar() {
  const auth = useAuth();

  // const navLinkStyle = ( {isActive} ) => {
  //   return {
  //     fontWeight: isActive ? 'bold' : 'normal'
  //   }
  // }

  return (
    <nav>
      {NavData.map(item => {
        return (
          <div>
            <NavLink key={item.id} to={item.path}> {item.element} </NavLink>
          </div>
        )
      })}
      {
        <NavLink to='/profile'>{auth.user? auth.user : 'Profile' }</NavLink>
      }
      {
        !auth.user && <NavLink to='/login'>Login</NavLink>
      }
    </nav>
  )
}

export default NavBar