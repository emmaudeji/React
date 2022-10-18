import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Products from "./router/Products";
import {Login, LoginForm, SignUpForm } from "./router/Login";
import Profile from "./router/Profile";
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import './projectApp.css';
import { AuthProvider } from './common/auth';
import NoMatch from './router/NoMatch';
import RequireAuth from './common/RequireAuth';

const ProjectApp = () => {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='product' element={<Products />} />
        <Route path='register' element={<Login />} >
          <Route index element={<SignUpForm />}/>
          <Route path='login' element={<LoginForm />} />
          <Route path='signUp' element={<SignUpForm />} />
        </Route>
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth> } />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />
    </AuthProvider >
  )
}

export default ProjectApp;