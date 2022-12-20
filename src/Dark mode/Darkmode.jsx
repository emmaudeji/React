import React, {useState, useEffect} from 'react'

const Darkmode = () => {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false
  }
  const [theme, setTheme] = useState(getTheme())

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])
  

  return (
    <div className={`w-screen h-screen flex justify-center items-center gap-4
    px-6 sm:px-16 md:px-28 lg:px-48 ${theme ? "darkmode" : "lightmode"}`}>
      <h1 className="text-5xl font-bold">Dark Mode</h1>
      <button type='radio' className='bg-purple-800 border border-4 rounded'
      onClick={() => setTheme(value => !value)}><div className='rounded-full w-6 h-6 flex justify-center items-center text-6xl'>{""}</div></button>
    </div>
  )
}

export default Darkmode