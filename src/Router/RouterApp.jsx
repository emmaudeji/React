// import About from './About';
import React from 'react';
import Home from './Home';
import Order from './Order';
import NoMatch from './NoMatch';
import Products from './Products';
import NewProduct from './NewProduct';
import BuyProduct from './BuyProduct';
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Users from './Users';
import UserDetail from './UserDetail';
import UsersAdnin from './UsersAdnin';
import Profile from './Profile ';
import { AuthProvider } from './auth';
import Login from './Login';
import RequireAuth from './RequireAuth';

const LazyAbout = React.lazy(() => import('./About'));

const RouterApp = () => {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        {/* basic root route */}
        <Route path='home' element={<Home />} />
        {/* lazy loading in react */}
        <Route path='about' 
          element={
            <React.Suspense fallback='Loading...'> 
              <LazyAbout /> 
            </React.Suspense>
          } 
        />
        <Route path='order' element={<Order />} />
        <Route path='profile' element={
          <RequireAuth>
            <Profile />
          </RequireAuth> } />
        <Route path='login' element={<Login />} />
        {/* No page found, if path does not exist */}
        <Route path='*' element={<NoMatch />} />
        {/* nested route */}
        <Route path='products' element={<Products />}>
          {/* index route opens (specific child path) when products (parent) path is lunched */}
          <Route index element={<NewProduct />}/>
          <Route path='new-product' element={<NewProduct />}/>
          <Route path='buy-product' element={<BuyProduct />}/>
        </Route>
        {/* dynamic routes */}
        <Route path='users' element={<Users />}>
          {/* <Route path=':userId' element={<Users />}/> */}
          <Route path=':userId' element={<UserDetail />}/>
          <Route path='admin' element={<UsersAdnin />}/>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default RouterApp