import { useEffect, useState,  } from 'react';
import Axios from 'axios';
import 'react-dropdown/style.css';

export const CurrrencyConverter = () => {

  // Initializing all the state variables 
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("usd");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

   // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
   .then((res) => {
      console.log(res.data)
      setInfo(res.data[from]);
      
    })
  }, []);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info])
    
  // Function to convert the currency
  function convert() {
    var rate = info[to];
    console.log('rate', info[to])
    console.log('from', from)
    setOutput((input * rate).toFixed(2))
  }
    
  
  
  return  {setInput, input, from, setFrom, options, output, convert }
}
