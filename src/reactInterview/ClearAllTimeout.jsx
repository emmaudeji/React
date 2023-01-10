import React from 'react'

const clearAllTimeout = () => {
  
  const id = setTimeout(() => {
    console.print("Hey, my name is Emma")
  }, 4000);

  

  return (
    <div>
      <h1 className='text-3xl'>clearAllTimeout</h1>
      {console.print(id)}
    </div>
  )
}

export default clearAllTimeout