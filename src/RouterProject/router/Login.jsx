import { useAuth } from "../common/auth";
import { useState, useEffect } from "react";
import { useNavigate,  Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';

const baseUrl = "http://127.0.0.1:5000";

export function Login() {

  const fetchApi = async () => {
    const data = await axios.get(`${baseUrl}/users`)
    console.log("DATA: ", data.data)
  }

  useEffect(() => {
    fetchApi()

  }, [])
  
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('signUp')}><h1>SignUp</h1></button>
      <button onClick={() => navigate('login')}><h1>Login</h1></button>
      <Outlet/>
    </div>
    
  )
}


export const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state?.path || '/home'

  const handleSubmit =  async e => {
    e.preventDefault();

    const data = await axios.post(`${baseUrl}/login`, {
      password: input.password,
      email: input.email
    })
    console.log('DATA', data.data)
    const { isLogin, feedback } = data.data

    if (isLogin) {
      auth.login(feedback.username)  
      navigate('/profile', {replace: true})
      alert(`welcome ${feedback.username}`)
    } else { 
      alert(feedback) 
    }
    

    // alert(`Welcome ${input.username}`)
    setInput({
      email: "",
      password: "",
    });
  }

  const [input, setInput] = useState({
        email: "",
        password: ""
      })
  
  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;

    setInput((prevInput )=> (
      {
        ...prevInput,
        [name]: value,
      }
    ))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">email</label>
        <input type="text" name="email" value={input.email} onChange={handleChange} required/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" value={input.password} onChange={handleChange} required/>
        <br />
        <button><h1>Login</h1></button>
      </form>
      
    </div>
  )
}

// signup form

export const SignUpForm = () => {
  
  const navigate = useNavigate()
  // const location = useLocation()

  // const redirectPath = location.state?.path || '/home'

  const handleSubmit = async e => {
    e.preventDefault();
    if(input.password === input.rePassword) {

        const data = await axios.post(`${baseUrl}/signup`, {
        username: input.username, 
        email: input.email, 
        password: input.password
        })
        const success = data.data.success;
        console.log("DATA: ", data.data.success)

        success ? navigate('/register/login', {replace: true}) : alert('Try again')
    } else {
      
      alert('password does not match')
      setInput({
        username: input.username,
        email: input.email,
        password: "",
        rePassword: ""
      });
    }
  }

  

  const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        rePassword: ""
      })
  
  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;

    setInput((prevInput )=> (
      {
        ...prevInput,
        [name]: value,
      }
    ))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={input.username} onChange={handleChange} required/>
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={input.email} onChange={handleChange} required/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" value={input.password} onChange={handleChange} required/>
        <br />
        <label htmlFor="password">rePassword</label>
        <input type="text" name="rePassword" value={input.rePassword} onChange={handleChange} required/>
        <br />
        <button><h1>SignUp</h1></button>
      </form>

    </div>
  )
}