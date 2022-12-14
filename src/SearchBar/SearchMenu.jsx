
import {FaSearch} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

          
          
const SearchMenu = ({input, changeHandler, focus, setIsEmpty, inputRef}) => {
   return (
    <div className="flex items-center justify-between rounded-full bg-zinc-300 relative self-center md:self-start w-[80%] overflow-hidden"
    >
          <div className='flex justify-center text-xl text-zinc-400 px-2 hover:text-zinc-600 duration-300'>
            <FaSearch/>
          </div>
          <div className='flex-1'>
            <input
              // ref={inputRef}
              className="w-full px-1 bg-transparent text-black h-12 focus:bg-zinc-200 focus:border-none"
              placeholder="Enter city or country"
              type='text'
              value={input}
              name='location'
              onChange={changeHandler}
              onFocus={focus}
              ref={inputRef}
              />
          </div>
          <div className='text-2xl px-2 font-semibold text-zinc-400 hover:text-zinc-900 duration-300'
          onClick={setIsEmpty}>
            <AiOutlineClose/>
          </div>
        </div>
  )
}

export default SearchMenu