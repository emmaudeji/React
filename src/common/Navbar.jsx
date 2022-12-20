import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Head from "./Head"
import {navLinks} from "../Data/Data"



const Header = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false)
  const [active, setActive] = useState("Home")

  return (
    <>
      <Head />
        <nav className='bg-[var(--color-bg-transparent)] h-12 flex w-full px-6  sm:px-16  lg:px-36 xl:px-48  justify-between items-center navbar z-20 '>

          <NavLink to={'/'} className="text-xl font-bold hover:text-purple-900 duration-300" >Gogrene</NavLink>
          
          <ul className= { click ? "absolute top-24 left-0 bg-purple-900 w-[100vw] flex justify-center text-center md:hidden py-6 leading-8" : "md:flex hidden justify-end"} onClick={() => setClick(false)}>

            <div className="md:flex text-[14px] ">
              {
                navLinks.map(({id, link, title}) => (
                  <li key={id}
                      onClick={() => setActive(title)}>
                    <NavLink className={`hover:font-bold duration-500 ${active === title ? 'font-bold ': null} 
                    ${id === navLinks.length - 1 ? "md:pr-0" : "md:pr-4 lg:pr-4"}`}
                    to={link}>{title}</NavLink>
                  </li>
                ))
              }
            </div>
            
          </ul>

          <div className="flex items-center ">
            <div className='start'>
              <div className='flex rounded mr-2 md:mr-0 px-4 h-10 text-zinc-200 bg-purple-900 hover:bg-purple-600 items-center duration-300 cursor-pointer'
              onClick={() => navigate('/')}
              >Contact       
              </div>
            </div>
            <div className=' md:hidden cursor-pointer text-zinc-200 ' onClick={() => setClick(!click)}>
                {click ? <i className='fa fa-times z-20 hover:text-xl duration-300'> </i> : <i className='fa fa-bars hover:text-xl duration-300'></i>}
            </div>
          </div>
        </nav>
    </>
  )
}

export default Header
