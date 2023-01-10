import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Details = () => {
  return (
    <div className="text-left font-normal">
      Simple custom hook that displays previous value and current value
    </div>
  )
}

export const usePrevious = (value) => {
  // const [input, setInput] = useState(value);
  const previousRef = useRef(value);
  
  useEffect(() => {
   previousRef.current = value;
  }, [value])

  return previousRef.current;
}
