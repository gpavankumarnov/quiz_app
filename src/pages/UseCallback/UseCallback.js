import React, {useCallback, useState} from 'react'
import Item from '../Item/Item'
 const UseCallback = () => {


    const [count, setCount] = useState(0)


const handleChange = () => {

}


  return (
    <div>
        <Item onChange/>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}
