import { useState, useEffect } from "react";

const PasswordStrength = () => {
  const [password, setPassword] = useState("")
  const [strength, setStrength] = useState(0)
  const [progressBarStyle, setProgressBarStyle] = useState({
    width: '0%', 
    backgroundColor: 'transparent',
  })

 /**
  * calcuate the total strength
  * totalStrength = strengthByChar + strengthByLength
  * 
  * calculate strengthByChar
  * 
  * setStrength(totalStrenth)
  * 
  * setProgressBarStyle.width based on strength
  * use math function to convert strength to %
  * strength x 10
  * setProgressStyle.width(strength x 10 + %)
  * 
  */
  
//  checks character type
  const checkCharType = () => {
    const hasNumber = /\d/;
    
    const hasLowerCase = /a-z/;
    
    const hasUpperCase = /A-Z/;
    
    const hasSpecialCharacter = /[!@#%&$^*()_+\-=\[\]{};":"\\|,.<>\/?]/;

    return {hasNumber, hasLowerCase, hasUpperCase, hasSpecialCharacter}
  }

  const {hasLowerCase, hasNumber, hasUpperCase, hasSpecialCharacter} = checkCharType()
 

  useEffect(() => {
    const updatedProgressBar = {backgroundColor: 'red'}

    let totalStrength = 0;
    
    // password length can be 1,2,3,4,5, Max 6
    // passwordchar strenght has 4 conditions and for each condition add 1.
    // totalPasswordStrength = 4 +6 = Max 10

    // first condition: set to 0 if length is less than 3.
    if (password.length > 3) {
      let strengthByLength = Math.min(6, Math.floor(password.length/3));

      let strengthByCharType = 0;
        
        if (hasNumber.test(password)) {
          strengthByCharType += 1;
        }
        if (hasUpperCase.test(password)) {
          strengthByCharType += 1;
        }
        if (hasLowerCase.test(password)) {
          strengthByCharType += 1;
        }
        if (hasSpecialCharacter.test(password)) {
          strengthByCharType += 1;
        }

        totalStrength = strengthByLength + strengthByCharType;

      } else {
        totalStrength = 0;
      }
    
    updatedProgressBar.width = `${totalStrength * 10}%`;
    
    // strong
    if(totalStrength > 8) {
      updatedProgressBar.backgroundColor = 'purple';
    } 
    // moderate
    else if (totalStrength > 6) {
      updatedProgressBar.backgroundColor = 'green';
    } 

    setStrength(totalStrength);
    setProgressBarStyle(updatedProgressBar)

    console.log('progresBar', progressBarStyle)
  
  }, [password])


  const handleChange = (e) => {
    e.persist();
    const {
      target: {
        value = ""
      }
    } = e
    setPassword(value)
  }

  return (
    <div className="w-full py-4 text-center">
      <h1 className="text-3xl font-semibold">Password Strength Checker</h1>
      <ul className="text-left decoration-slice">
        <p>Test password strength by varying the input format</p>
        <li>
          - UpperCase, - LowerCase, -Special characters, -Number value
        </li>
      </ul>


      <input type="text" name="" id="" 
      placeholder="Enter password"
      className="h-12 rounded-full w-full focus:outline-none bg-zinc-700 focus:bg-zinc-800 hover:bg-zinc-800 duration-300 px-4 flex items-center overflow-hidden mt-8 text-sm"
      value={password}
      onChange={handleChange}
      />


      <div className="progress-container mb-4 h-4 w-full overflow-hidden mt-4 rounded-full border border-zinc-500">
          <div className="progress-bar h-full" style={{ ...progressBarStyle }}/>
      </div>
      <p>The strength of your password (out of 10) is  {strength}  </p>
    </div>
  )
}

export default PasswordStrength