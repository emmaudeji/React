import { useEffect, useRef, useState, } from 'react';

import SearchMenu from '../SearchBar/SearchMenu'
import {houses} from '../Data/Data'
import PropertyCard from '../SearchBar/PropertyCard'
import Dropdown from 'react-dropdown';
import { CurrrencyConverter } from './CurrrencyConverter';
import 'react-dropdown/style.css';


const Form = () => {
  const {setInput, from, setFrom, options, input, output, convert,  } = CurrrencyConverter();

  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    const createDAta = lists => (
      setData(lists.slice(0,4))
    )
    createDAta(houses)
  }, [])

  const handleClick = () => {
    if (inputRef.current) inputRef.current.value = "";
    setSearchQuery('')
  }

  // search function
  let newData = data.filter(item => {
    return Object.keys(item).some(key => (
      item[key].toString().toLowerCase().includes(searchQuery.toString().toLocaleLowerCase())
    ))
  })

  // form input const
  const [inputs, setInputs] = useState({
    country: "",
    property_type: "",
    price: "",
    view3: ""
  });

  const [editObject, setEditObject] = useState(null);

  const clearInputs = () => {
    setInputs({
        country: "",
        property_type: "",
        price: "",
        view3: ""
      })
    setEditObject(null)
  }

  // handle input change
  const handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // handle image upload
  const handleImageUpload = async (e) => {
    e.persist();
    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    const { name } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: base64,
    }));
    
  };


  // create a new object
  const handleSubmit =  (event) => {
    event.preventDefault();
    
    // check price format and convert to dollars
    convert();

    // check if edit object and replace the object with the new input
      if(editObject) {
        data.splice(editObject.id, 1, inputs)
      } else {
        setData(list => [...list, {
        country: inputs.country,
        property_type: inputs.property_type,
        price: output,
        view3: inputs.view3
      }])
      }
    clearInputs();  
  }

  // edit an object from the list
    const handleEdit = object => {
      setEditObject(object)
      setInputs({
          country: object.country,
          property_type: object.property_type,
          price: object.price,
          view3: object.view3
        })
      }

  // delete object from the list
    const handleDelete = object => (
      setData(data.filter(item => item !== object))
    )

  return (

    <div className="w-full px-6 sm:px-16 md:px-28 lg:px-48 py-10 ">
      <div className="pb-10 ">
          <form onSubmit={handleSubmit}>
            <div className="grid pt-6 grid-cols-1 sm:grid-cols-2 md:gid-cols-3 lg:grid-cols-4 gap-4">

            <div>
                      <label>Country</label>
                      <input
                        className="formInput"
                        type="text"
                        name="country"
                        onChange={handleInputChange}
                        placeholder="Abuja, Nigeria"
                        value={inputs.country}
                        required
                      />
            </div>
            <div >  
                <div>{input} {output} {from}</div>
                          <label>Price</label>
                          <div>
                              <Dropdown options = {options}
                              onChange = {(e) => setFrom(e.value)}
                               value={from} placeholder="From"/>
                          </div>
                          <input
                            className="formInput"
                            type="number"
                            name="price"
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="eg: $100.67 or N5004"
                            required
                          >
                            
                            </input>
                       
            </div>
            <div>
                      <label>Property Type</label>

                      <input
                        className="formInput"
                        type="text"
                        name="property_type"
                        onChange={handleInputChange}
                        placeholder="Enter property type"
                        value={inputs.property_type}
                      />
            </div>
          
            <div className="relative">
                        <label className='block'>Image</label>
                        <input
                          className="formInput flex items-center"
                          type="file"
                          name="view3"
                          onChange={handleImageUpload}
                          placeholder=""
                          accept=".jpeg, .png, .jpg"
                        />
                        <div
                          className="h-20 w-28 overflow-hidden p-1 bg-zinc-800  
                        absolute top-0 right-0 rounded border-purple-700"
                        >
                          <img
                            src={
                              inputs.view3 ? inputs.view3 : "Insert Image"
                            }
                            alt="imageUrl"
                            className="w-full h-full object-cover"
                          />
                        </div>
               </div>
            </div>

            <div className="flex justify-center w-full gap-4 text-center text-xl pt-6 pb-14">
                        <button type="submit" className="px-8 py-4 bg-purple-900 hover:bg-purple-600 rounded">
                          Submit
                        </button>
                  
                    <button className="px-8 py-4 bg-purple-900 hover:bg-purple-600 rounded" 
                      onClick={clearInputs}>
                      Cancel
                    </button>
                  </div>
          </form>

          {/* searchbar */}
          <div className="flex justify-center w-full">
            <SearchMenu
              inputRef={inputRef}
              input={searchQuery}
              changeHandler={(event) => setSearchQuery(event.target.value)}
              setIsEmpty={handleClick}
            />
          </div>
      </div>

      {/* display data */}
      <div>
        {(newData.length === 0) ? 
          <div className="h-screen flex justify-center items-center w-full text-3xl"> Search not found </div>
          : 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full justify-center gap-4">
              {newData.map((item) => (
              <div key={item.id} className="flex justify-center sm:px-0">
                <PropertyCard
                  house={item.view3}
                  price={item.price}
                  location={item.country}
                  propertyType = {item.property_type}
                  edit={
                <div className='hover:bg-purple-700 rounded duration-300 px-1'
                  onClick={() => handleEdit(item)}
                >E</div>
              }
              delete={
                <div className='hover:bg-purple-700 rounded duration-300 px-1'
                onClick={() => handleDelete(item)}>X</div>
              }
                  
                />
              </div>
              ))}
              
          </div>
          }
      </div>
    </div>    
  )
}

export default Form
