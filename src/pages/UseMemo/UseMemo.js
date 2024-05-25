import React, { useMemo, useState } from "react";

const UseMemo = () => {
  
   const [counterOne, setCounterOne] = useState(0)
   const [counterTwo, setCounterTwo] = useState(0)

   const incrementOne = () => {
    setCounterOne(counterOne + 1)
   }

   const isEven = useMemo(() => {
    let i=0;
    while(i<2000000000)i++
    return counterOne % 2 === 0
   }, [counterOne])

   const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
   }

 

    return (
<>
<div>
<button onClick={incrementOne}>count one - {counterOne}</button>
<span>{isEven ? 'Even' : 'Odd'}</span>

</div>
<div>
<button onClick={incrementTwo}>count Two - {counterTwo}</button>


</div>

</>
    
  );
};

export default UseMemo;
