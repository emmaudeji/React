import {useState, useEffect} from 'react'

const PersistStorage = () => {
    const [input, setInput] = useState({
    name: "",
    age: ""
  })

  const {name, age} = input;

  const handleChange = (e) => {
    e.persist();
    const {name, value} = e.target;
    setInput(prev => (
      {
        ...prev,
        [name]: value
      }
    ))
  }

    useEffect(() => {
      let inputData = JSON.parse(localStorage.getItem('user'))
      if(name === '' && age === '') {
        setInput(prev => ({...prev, ...inputData}))
      }
    }, [])

    useEffect(() => {
      localStorage.setItem('user', JSON.stringify(input));
    }, [name, age])

  return (
    <div>
      <h1 className='text-3xl font-semibold text-center'>How to Persist data on page refresh</h1>
      
      <p className='text-lg pt-8'>Submit your details to see changes</p>
      <div className='w-full flex justify-center'>

        <form onSubmit={''}
        className="grid grid-cols-2  gap-2 pt-4">
          <div className=''>
            <p>Name</p>
            <input className='w-[90%]  bg-transparent p-2 border border-zinc-800 focus:bg-transparent' 
            type="text" 
            name='name'
            value={name}
            onChange={handleChange}
            required
            />
          </div>
           <div className=''>
            <p>Age</p>
            <input className='w-[90%] bg-transparent p-2 border border-zinc-800 focus:bg-transparent' 
            type="number" 
            name='age'
            value={age}
            onChange={handleChange}
            required
            />
          </div>
        </form>
      </div>
      
      <div className={` mt-5 p-4 text-xl ` }>
          <div className='border border-zinc-700 rounded p-4'>
          Hello {input.name}, Happy new year. You will be {input.age + ' + 1'} this year.
          </div> 

          <div className='pt-4'>
          <p>Refresh page and notice the data does not refresh.</p>
          <button className='pt-2'
          onClick={() => document.refresh()}>Click to relaod page</button>
        </div>
        </div>
    </div>
  )
}

export default PersistStorage