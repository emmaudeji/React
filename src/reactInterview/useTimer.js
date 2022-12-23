// Create a useTimer hook
// returens the following
// const {isRunning, start, stop, seconds } = useTimer(TOTAL_TIME);
// - show 2 buttons on the screen start and stop
// Start - to start the timer
// Stop - to stop the timer
// show the remaining seconds when timer is started
// when the timer reaches to zero, it resets and shows 'No timer running'

import { useState, useRef, useEffect, useCallback } from "react";

export const useTimer = (totalDuration) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(totalDuration);
  const timerRef = useRef(null);

  const start = useCallback(() => {
    /**
     *start timer
     *decrement timer every 1s
     *update the isRuning
     */
    timerRef.current = setInterval(() => {
      setSeconds((state) => state - 1);
      setIsRunning(true);
    }, 1000);
  }, [setIsRunning, setSeconds]);

  const stop = useCallback(() => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setSeconds(totalDuration);
  }, [setIsRunning, setSeconds]);

  useEffect(() => {
    if (seconds < 1) {
      stop();
    }
  }, [seconds, stop]);

  useEffect(() => {
    return () => timerRef && clearInterval(timerRef.current);
  }, []);

  return {
    isRunning,
    start,
    stop,
    seconds,
  };
};
