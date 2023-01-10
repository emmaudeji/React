import { useEffect } from 'react';
import {  useState, useContext, createContext, useRef} from 'react';


const SearchBtnTest = () => {
  
  return (
    <MovieList>
      <div className="w-full px-6 sm:px-16 md:px-28 lg:px-48 py-10 h-[83vh]">
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
        <div>
          <FormInput/>
        </div>
        {/* list display */}
        <div>
          {/* search menue */}
          <div>
            <h1 className='font-semibold text-lg pb-4'>Search for movies</h1>
            <SearchMenu/>
          </div>
          {/* display lists */}
          <div>
            <MovieListDisplay/>
          </div>
        </div>
      </div>
    </div>
    </MovieList>
     
  )
}

export default SearchBtnTest;


// searchmenu bar
export const SearchMenu = () => {
  const { setSearch} = useMovies();

  
  
  return(
    <div className='w-full pb-6  flex justify-center'>
      <div className='w-full overflow-hidden rounded-full'>
      <input
      className='w-full sm:w-[80%] h-14 bg-zinc-900 hover:zinc-700 focus:bg-zinc-700 focus:outline-none duration px-4 flex items-center'
      name="" id="" onChange={(e) => setSearch(e.target.value)}/>
    </div>
    
    </div>
     )
} 

// filter movie list on search
export const MovieListDisplay = () => {
  const {search, } = useMovies();
  const {movies, } = useMovies();
  const [newMovies, setNewMovies] = useState(movies)
 
  console.log('M--',  newMovies)
  console.log('N--', movies )

  useEffect(() => {
    setTimeout(() => {
      setNewMovies(movies.filter(movie => movie.name.toString().toLowerCase().includes(search.toString().toLowerCase())))
    }, 1000);

  }, [search, movies])

  
  return(
    <div className='w-full flex flex-col gap-4'>
     { 
      newMovies.length && newMovies.map(({name, rate, duration}, index) => (
         <div className='flex ' key={index}>
        <div className='w-20 mr-3 bg-purple-900 flex justify-center items-center'>icon</div>
        <div>
          <div>Name: {name}</div>
          <div>Rating: {rate}</div>
          <div>Duration: {duration}</div>
        </div>
      </div>
      )) 
     }

    </div>
  )
}

// context hook
const MovieContext = createContext();
export const MovieList = ({children}) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([
    {
      name: "Xmen",
      rate: 4,
      duration: '2hrs'
    },
    {
      name: "Commando",
      rate: 6,
      duration: '3hrs'
    },
  ])

  return (
    <MovieContext.Provider 
    value= {
      {movies, setMovies, search, setSearch}
    }>
      {children}
    </MovieContext.Provider>
  )
} 

export const useMovies = () => { return (useContext(MovieContext))}


// form
export const FormInput = () => {
  const {setMovies, movies} = useMovies()
  const [listItem, setListItem] = useState({
    name: "",
    duration: "",
    rate: "",
  })
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
  const HandleSubmit = (event) => {
    event.preventDefault()
    const formatedDuration = formatDuration()
     setListItem(item => ({...item, 
      name: input.name,
      duration: formatedDuration,
      rate: input.rate
    }))

    setMovies(item => [...item, listItem]);
    console.log('1--', input);
      console.warn('2--', listItem);
      console.warn('3--', movies);
  
    clearInput();
  }

  // check format of duration
  const formatDuration = () => {
  
    const hasMins = /\dmins/;
    const hasHour = /\dhrs/;
    const hasDot = /\d.\d/;

      if (hasMins.test(input.duration)) {
        const [digits, ] = input.duration.split('m')
        return (Number(digits) / 60).toFixed(2) + 'hrs'
        // console.log('converted-', convertedToHrs);
      }
      else if (hasHour.test(input.duration)) {
        return (input.duration);
      }
      else if (hasDot.test(input.duration)) {
        return (input.duration + 'hrs');
      }
      else {
        console.log('Format should be 55hrs or 55.5hrs or 55mins');
      }
      // console.log('in--', input)
  }

 return (
    <form onSubmit={HandleSubmit}>
            <div>
              <label htmlFor="name">Movie name</label>
                <input
                  className="formInput"
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Xmen 3"
                  value={input.name}
                  // required
                />
            </div>
            <div>
              <label htmlFor="rating">Rating</label>
                <input
                  className="formInput"
                  
                  name="rate"
                  type='number'
                  onChange={handleInputChange}
                  placeholder="3"
                  value={input.rate}
                  // required
                />
            </div>
            <div>
              <label htmlFor="duration">Duration</label>
                <input
                  className="formInput"
                  // pattern='\d\.\d'
                  name="duration"
                  onChange={handleInputChange}
                  placeholder="23.5h or 568mins"
                  value={input.duration}
                  required
                />
            </div>
            <button className=' mt-6' type=''>
              Submit
            </button>
          </form>
  )
}