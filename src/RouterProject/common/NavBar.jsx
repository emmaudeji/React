import {useNavigate, NavLink} from "react-router-dom";
import NavData from "./NavData";
import { useAuth } from "./auth";

function NavBar() {
  const auth = useAuth();
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/home')
  }

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
        // <NavLink to='/profile'>{auth.user? auth.user : 'Profile' }</NavLink>
      }
      {
        !auth.user ? <NavLink to='/register'>SignUp</NavLink> : <NavLink to='/profile'>{auth.user}</NavLink>
      }
      {
        auth.user ? <button onClick={handleLogout}>Logout</button> : null
      }
    </nav>
  )
}

export default NavBar