import { useState } from "react"
import { NOOP } from "../Data/Data"

export const Dot = () => (
  <div className="h-2 w-2 rounded-full bg-purple-700 "/>
)
export const DotArray = () => (
  <div className="flex justify-between w-16 gap-3"><Dot/><Dot/><Dot/><Dot/></div>
)

export const Circle = ({w, h}) => (
  <div className={`w-${w} h-${h} rounded-full bg-transparent border border-purple-600 absolute`}/>
)

const AutoCompletInput = () => {
  const [upiId, setupiId] = useState('')
  const [prediction, setPrediction] = useState('')
  const [predictionList, setPredictionList] = useState([])
  
  const handleChange = (e) => {
    e.persist();
    const {
      target: {
        value = ''
      }
    } = e;
    setupiId(value);
    

  // check incorrect input format
  if (!value.includes('@')) {
    setPrediction(value || "");
    setPredictionList([]);
    return;
  }

  // check for possible match
    const [currentUserVPA, currentUserBankname] = value.split('@');

    if(!currentUserVPA) return;

    const userBanknameReg =new RegExp(`${currentUserBankname}`);

  //  start ssearch if currentUserBankname is not empty
    if ((currentUserBankname !== undefined) && (currentUserBankname.length) !== 0) { var matchedBankname = NOOP.filter(bankname => {
        return userBanknameReg.test(bankname);
    })
    } else {
      return '';
    }

    // if no matchedbank name e.g aa@akakakakakakak...> matchedBankname = []
    let currentPredictedBankname = matchedBankname[0]
    if (currentUserBankname && !matchedBankname.length) {
      currentPredictedBankname = '';
    }
    setPrediction(`${currentUserVPA}@${currentPredictedBankname}`);
    setPredictionList(matchedBankname);

  }

  // handle rightArrowKey press
  const handleRightArrowKeyDown = e => {
    const {which = -1, keyCode = -1, code = ''} = e;
    const isRightArrowClick =
    which === 39 || keyCode === 39 || code.toLowerCase() === "arrowright"

    if(isRightArrowClick) {
      setupiId(prediction)
      setPredictionList([]);
    }
  }

  const handleBanknameClick = (bankname) => {
    const [currentUserVPA] = upiId.split('@');
    const updatedUpiId = `${currentUserVPA}@${bankname}`
    
    setupiId(updatedUpiId);
    setPrediction(updatedUpiId);
    setPredictionList([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(upiId)
  }

  predictionList.length && console.log(predictionList)

  return (
    <div className="w-full py-4 text-center">
      <h1 className="text-3xl font-semibold">Auto complete input bar</h1>
      <div className="flex w-full h-full justify-center items-center mb-6">
        <div className=" w-56 h-56 rounded-full bg-purple-300 my-6 relative flex justify-center items-center">
          <div className="flex gap-2 flex-col absolute right-2 top-6"><DotArray/><DotArray/><DotArray/><DotArray/></div>
          <div className="absolute left-0 top-6">
            <Circle w={16} h={16} />
          </div>
          <div className="absolute left-14 top-44">
            <Circle w={16} h={16} />
          </div>
          <div className="bg-transparent text-zinc-900 font-semibold text-3xl border-2 border-zinc-900 p-2 rounded-xl">ePay</div> 
      </div>
      
      </div>

      
          <form onSubmit={handleSubmit}
          className = 'relative'>
            <div className="flex flex-row relative" >
              <input 
              type="text" 
              value={prediction} 
              className=' border-b-2 text-zinc-500 border-zinc-400 w-full h-12 bg-transparent hover:bg-zinc-800 rounded-lg duration focus:outline-none px-4 overflow-hidden flex items-center'
            />
              <input 
              type="text" 
              value={upiId} 
              pattern='.+@.+'
              title="format is text@text"
              placeholder="Enter text" 
              autoCapitalize="off"
              autoComplete='off'
              spellCheck="off"
              onChange={handleChange}
              onKeyDown={handleRightArrowKeyDown}
              className='border-b-2 border-zinc-400 w-full h-12 bg-transparent hover:bg-transparent rounded-lg duration focus:outline-1 px-4 overflow-hidden flex items-center z-50 absolute left-0 top-0'
            />
          </div>
          
          <button type="submit" className=" mt-6 mb-8 rounded-lg bg-purple-800 w-full py-4 text-center" onClick={''}>Pay Now</button>

          {predictionList.length ? (
          <ul className="text-center w-full bg-zinc-900 duration-500 max-h-64 overflow-y-auto z-30 absolute top-14 left-0">
            
              {predictionList.map(item => (
                <li className="py-4 border-b-2 border-zinc-700 cursor-pointer hover:bg-zinc-500 duration-300"
                onClick={() => handleBanknameClick(item)}
                >
                  {item}
                </li>
              ))}
           
          </ul>) : null }
          </form>
      

    </div>
  )
}

export default AutoCompletInput