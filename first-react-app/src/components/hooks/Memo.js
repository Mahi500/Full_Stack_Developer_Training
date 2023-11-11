import {useCallback, useState, memo} from 'react';


const Memo=()=>{

    const [count,setCount]=useState(0)
    const [todos,setTodos]=useState(["todo 1", "todo 2"])

    const increment=()=>{

        setCount(count+1)
    }


    return(

        <div>
            <Todos todos={todos}/>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
        </div>
    )
}

const Todos=memo((props)=>{

    console.log("child render")
    return(

        <div>
         <h3>My Todos</h3>
         {
            props.todos.map((todo, index)=>{


                return <p key={index}>{todo}</p>
            })
         }
        </div>
    )
})


export default Memo;