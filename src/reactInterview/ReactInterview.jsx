import {useTimer} from './useTimer';
import { LocalStorageApi } from './LocalStorageAPI';
import { useEffect } from 'react';
import PasswordStrength from './passwordStrength';
import AutoCompletInput from "./AutoCompletInput";


const ReactInterview = () => {
  const {
  isRunning, start, stop, seconds
} = useTimer(5) 

  
  return (
    <div className='grid gap-4 grid-cols-1  lg:grid-cols-2 px-6 sm:px-16 md:px-28 lg:px-48 mx-auto py-10'>
      <div className='flex border border-zinc-700 rounded p-4 justify-center font-semibold text-center'>
        <div >
          <h1 className='text-3xl'>useTimer custom hook</h1>
          <div className='text-2xl pt-6'>{!isRunning ? 'No timer running' : seconds}</div>
          <div className='flex gap-2 pt-8 justify-center'>
            <button onClick={start} disabled={isRunning}>Start</button>
            <button onClick={stop} disabled={!isRunning}>Stop</button>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>


       <div className='w-full border border-zinc-700 rouded p-4 '>
        <h1>Local Storage API</h1>
        </div>


      </div>
      <div className='border border-zinc-700 rouded p-4'>
        <PasswordStrength/>
      </div>


     <div className='border border-zinc-700 rouded p-4'>
        <AutoCompletInput/>
      </div>

    </div>
  )
}

export default ReactInterview