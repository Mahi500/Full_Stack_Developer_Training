import {useReducer} from 'react';


const reducer=(state,action)=>{

    switch(action.type)
    {
        case 'INCREMENT':
              return ({count:state.count+1})
              break;
        case 'DECREMENT':
              return ({count:state.count-1})
              break;

        default:
            return state.count;

    }

}

const initialState={count:0}

function UseReducerHookDemo(){

    const [state,dispatch]=useReducer(reducer,initialState)

    const Increment=()=>{

        dispatch({type:'INCREMENT'})
    }

    const Decrement=()=>{

        dispatch({type:'DECREMENT'})
    }
    return(
        
        <div>
        <h2>{state.count}</h2>
        <button onClick={()=>Increment()}>INCREMENT</button>
        <button onClick={()=>Decrement()}>DECREMENT</button>
        </div>
        
        )


}

export default UseReducerHookDemo;