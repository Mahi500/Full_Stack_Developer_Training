import {useCallback, useState} from 'react';

const funccount= new Set();

const UseCallback=()=>{

   const [count,setCount]=useState(0)
   const [deccount,setDeccount]=useState(0)
   const [number,setNumber]=useState(0)

   const incrementCounter=useCallback(()=>{

       setCount(count+1)
   }, [count])

   const decrementCounter=useCallback(()=>{

       setDeccount(deccount-1)
   }, [deccount])

   const incrementNumber=useCallback(()=>{

       setNumber(number+1)
   }, [number])


   funccount.add(incrementCounter)
   funccount.add(decrementCounter)
   funccount.add(incrementNumber)

   

   return(
    <div>
        Count: {count}
        <button onClick={incrementCounter}>
         Increase counter
        </button>
        <button onClick={decrementCounter}>
         Decrease counter
        </button>
        <button onClick={incrementNumber}>
         Increase number
        </button>
        {funccount.size}
    </div>
   )
}

export default UseCallback;