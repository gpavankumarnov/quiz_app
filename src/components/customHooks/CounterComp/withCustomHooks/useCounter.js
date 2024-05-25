import React, {useState, useEffect} from 'react'

const useCounter = (initialVal) => {


  const [value, setValue] = useState(initialVal);

  //we pass initial value -> where custom hook will take input val and expose increment and decrement function and value.
   
  const increment = () => {
    setValue(value + 1)
  }

  const decrement = () => {
    setValue(value - 1)
  }

  const reset = () => {
    setValue(0)
  }

 return [value, increment, decrement, reset]
}

export default useCounter