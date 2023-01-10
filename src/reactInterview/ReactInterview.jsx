
import { LocalStorageApi } from './LocalStorageAPI';
import { useState } from 'react';
import PasswordStrength from './passwordStrength';
import AutoCompletInput from "./AutoCompletInput";
import { UseTimerQuestion, useTimer } from './useTimers';
import { Details, usePrevious } from './usePrevious';
import ClearAllTimeout from './ClearAllTimeout';
import PersistStorage from './PersistStorage'


const ReactInterview = () => {
// usetimer
  const {
  isRunning, start, stop, seconds
    } = useTimer(5)
//  usePrevious
  const [count, setCount] = useState(0)
  const before = usePrevious(count);

  return (
    <div className='grid gap-4 grid-cols-1  lg:grid-cols-2 px-6 sm:px-16 md:px-28 lg:px-48 mx-auto pt-10 '>
      <div className='flex border border-zinc-700 rounded p-4 justify-center font-semibold text-center'>
        {/* useTimer hook */}
        <div >
          <h1 className='text-3xl'>useTimer custom hook</h1>
            <UseTimerQuestion/>
          <div className='text-2xl pt-6'>{!isRunning ? 'No timer running' : seconds}</div>
          <div className='flex gap-2 pt-8 justify-center'>
            <button onClick={start} disabled={isRunning}>Start</button>
            <button onClick={stop} disabled={!isRunning}>Stop</button>
          </div>
        </div>
      </div>
      
      <div className='flex border border-zinc-700 rounded p-4 justify-center font-semibold text-center'>
        <div>
          <h1 className='text-3xl'>custom hooks - usePrevious</h1>
        <Details/>
        <h3 className='py-6 text-xl font-semibold text-center'>Current: {count}   |   Previous: {before}</h3> 
        <div className="flex justify-center font-semibold"><button onClick={() => setCount(count 
          + 1)}>Increament</button>
        </div>
      </div>
      </div>

      <div>
        <div className='border border-zinc-700 rouded p-4'>
          <PasswordStrength/>
        </div>
        <div className='flex border border-zinc-700 rounded p-4 justify-center font-semibold text-center mt-4'>
          {/* <ClearAllTimeout/> */}
        </div>
      </div>
      
        


     <div className='border border-zinc-700 rouded p-4'>
        <AutoCompletInput/>
      </div>

      <div className='border border-zinc-700 rouded p-4'>
        <PersistStorage/>
      </div>

    </div>
  )
}

export default ReactInterview