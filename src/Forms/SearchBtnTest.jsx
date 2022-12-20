import { useEffect, useRef, useState, } from 'react';


const SearchBtnTest = () => {
   // form input const
  const [input, setInput] = useState({
    name: "",
    duration: "",
    rate: "",
  });

  // clear form inputs
  const clearInput = () => {
    setInput({
    name: "",
    duration: "",
    rate: "",
  })
  }

  // handle input change
  const handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault()
    const list = formatDuration()
    console.log(list);
    clearInput();
  }

  // check format of duration
  const formatDuration = () => {
    const durationList = input.duration.split('')

    // check if it contains the needed foramt
    const durationFormat = (['mins' ,'h' , '.' ].includes(input.duration) )
    // check extract the format content
    if (durationFormat) {
      const durationIncludes = (['mins' ,'h' , '.' ].filter(item => (item.includes(input.duration) )))
      console.log(durationIncludes)
    } 
    

 

    
    // console.log('durationList', durationList) 
    // if (input.duration === "") {
    //   return ""
    // } else {
    //   return ""
    // }
    return durationList
  }
  return (
     <div className="w-full px-6 sm:px-16 md:px-28 lg:px-48 py-10 h-[83vh]">
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Movie name</label>
                <input
                  className="formInput"
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Xmen 3"
                  value={input.name}
                  required
                />
            </div>
            <div>
              <label htmlFor="rating">Rating</label>
                <input
                  className="formInput"
                  type="number"
                  name="rating"
                  onChange={handleInputChange}
                  placeholder="3"
                  value={input.rating}
                  required
                />
            </div>
            <div>
              <label htmlFor="duration">Duration</label>
                <input
                  className="formInput"
                  type="text"
                  name="duration"
                  onChange={handleInputChange}
                  placeholder="23.5h or 568mins"
                  value={input.duration}
                  required
                />
            </div>
            <button className='button mt-6' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchBtnTest