import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'

const Home = () => {
  const [quil, setQuil] = useState('')
  const [list, setList] = useState([])
  // api fetch
  const getData = () => {
    axios.get('https://63a05c5024d74f9fe835e8e3.mockapi.io/test/v1/users')
     .then(res => (
      setList(res.data)
      ))
      // console.log(res)
     .catch(err => console.log(err))
  }

  let data = `<h1 style="text-4xl font-bold"> This is inner html</h1>`


  return (
    <div className='flex justify-center w-full px-6 sm:px-16 md:px-28 lg:px-48 '>
      
      {/* innerHtmle */}
     <div className='pt-10'>
      <h2 className='text-2xl pb-4'>Rendering innerHtml</h2>
      <div className='bg-zinc-900 rounded-10 min-h-48 w-full'>
        <div dangerouslySetInnerHTML={{__html: quil}}>
      </div>
    </div> 

    {/* react document editor */}
    <h2 className='text-2xl py-4'>Testing React document editor. Enter text to see</h2>
    <ReactQuill theme="snow"
    onChange={value => setQuil(value)}/>

    {/* testing mockapi */}
    
      <h2 className='text-2xl pt-6'>Testing mockapi</h2>
      <div className='flex flex-wrap gap-2 w-full py-4'>
      {
      list.map((item) => (
        <div key={item.id}>
          <p className='text-sm'>{item.name}</p>
          <div className='w-48 h-48 overflow-hidden'>
                      <img 
                      className='w-full h-full object-cover'
                      src={item.avatar} alt="avater" />
          </div>
        </div>

      ))
    }
    </div>
    
    <button className='my-4 text-center' onClick={getData}>Get mockapi data</button>
     </div>
    
    </div>
  )
}

export default Home