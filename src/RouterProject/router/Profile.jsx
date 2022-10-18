import { useAuth } from "../common/auth"
import { useNavigate } from "react-router-dom"

const Profile  = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate('/home')
  }

  return (
    <div>
      <h1>You are now logged in {auth.user}</h1> <br />
      <button onClick={handleLogout}><h3>Logout</h3></button>
    </div>
  )
}

export default Profile 