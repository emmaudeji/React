import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './auth';

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [user, setUser] = useState('');
  const auth = useAuth()

  const redirectPath = location.state?.path || '/home'


  const handleClick = () => {
    auth.login(user)
    navigate(redirectPath, {replace: true})
  }


  return (
    <div>
      <label htmlFor="username"><h3>Enter username</h3></label><br />
      <input type="text" name="username" placeholder='userName' id="" onChange={e => setUser(e.target.value)}/>
      <button onClick={handleClick}><h3>Login</h3></button>
    </div>
  )
}

export default Login