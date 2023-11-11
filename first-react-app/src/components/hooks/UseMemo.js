import {useState, useMemo} from 'react';

export default function Usememo(){

    const [number,setNumber]=useState(0)

    const squaredNum= useMemo(()=>squareNum(number),[number]);

    const [counter, setCounter]=useState(0)

    const onChangeHandler=(e)=>{

        setNumber(e.target.value)
    }

    const counterHandler=()=>{

        console.log("count increased")
        setCounter(counter+1)

    }


    return(

        <div>
        <input type="number" value={number} onChange={onChangeHandler}/>
        <h4>{squaredNum}</h4>
        <button onClick={counterHandler}>Counter ++</button>
        <h4>Counter:{counter}</h4>
        </div>
    )

    function squareNum(number){

        console.log("Squaring will be done")
        return Math.pow(number,2);


    }
}

