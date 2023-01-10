
import { useState, useRef, useEffect, useCallback } from "react"

export const UseTimerQuestion = () => {
  return(
    <div className="text-left font-normal">
      <div> Create a useTimer hook </div>
      <div>  returns the following </div>
      <div> {`const {isRunning, start, stop, seconds } = useTimer(TOTAL_TIME);`} </div>
      <div> - show 2 buttons on the screen start and stop </div>
      <div>  Start - to start the timer </div>
      <div>  Stop - to stop the timer </div>
      <div>  show the remaining seconds when timer is started </div>
      <div>  when the timer reaches to zero, it resets and shows 'No timer running' </div>
    </div>
  )
}

export const useTimer = (totalDuration) => {

  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(totalDuration);
  const timerRef = useRef(null);

  const start = useCallback(() => {
    timerRef.current = setInterval(() => {
      setSeconds(state => state -1 )
    }, 1000)
    setIsRunning(true)
  }, [setIsRunning, setSeconds])

  const stop = useCallback(() => {
    clearInterval(timerRef.current)
    setIsRunning(false);
    setSeconds(totalDuration);
  }, [setIsRunning, setSeconds])

  useEffect(() => {
    if(seconds < 0){
      stop();
    }
  }, [seconds])

  // unmount\
  useEffect(() => {
    return () => timerRef && clearInterval(timerRef.current);
  }, [])

  return {
    stop, start, isRunning, seconds
  }
}

