import React, {useState} from 'react'

const ProgressBar = () => {
    const [input, setInput] = useState()

    const handleInput = (e) =>{
          setInput(e.target.value)
    }

  return (
    <>
    <h2>Progress Bar</h2>
    <input type="text" placeholder='progress' onChange={handleInput} value={input} />
    <div className='parent'>
        <div className='child' style={{width : `${input || 10}%`}}>{input}</div>
    </div>
    </>
  )
}

export default ProgressBar