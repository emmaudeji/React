import PropertyCard from "./PropertyCard"
import SearchMenu from './SearchMenu'
import {houses} from '../Data/Data'
import { useState, useRef } from 'react'

const SearchBarApp = () => {
  const inputRef = useRef();
   const [searchQuery, setSearchQuery] = useState('')
  //  const [isEmpty, setIsEmpty] = useState(true);

  const changeHandler = (event) => {
    event.preventDefault()
    setSearchQuery(event.target.value)
  } 
   
  let newData = houses.filter(item => {
    return Object.keys(item).some(key => (
      item[key].toString().toLowerCase().includes(searchQuery.toString().toLocaleLowerCase())
    ))
  })

  const handleClick = () => {
    // setIsEmpty(true)
    if (inputRef.current) inputRef.current.value = "";
    setSearchQuery('')
  }


  return (
    <div className="w-full px-6 sm:px-16 md:px-24 lg:px-44 py-10 ">
     
        <div className="pb-10 flex justify-center w-full">
            <SearchMenu
              inputRef={inputRef}
              input={searchQuery}
              changeHandler={changeHandler}
              // focus={() => setIsEmpty(false)}
              setIsEmpty={handleClick}
            />
          </div>

        

          {(newData.length === 0) ? 
          <div className="h-screen flex justify-center items-center w-full text-3xl"> Search not found </div>
          : 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full justify-center gap-4">
              {newData.map(({id, view3, price, country, property_type}) => (
              <div key={id} className="flex justify-center sm:px-0">
                <PropertyCard
                  house={view3}
                  price={price}
                  location={country}
                  propertyType = {property_type}
                  focus={''}
                  
                />
              </div>
              ))}
              
          </div>
          }
          
    
     
          
    
          

    </div>
  )
}

export default SearchBarApp