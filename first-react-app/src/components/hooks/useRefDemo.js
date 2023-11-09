import { useRef, useEffect } from 'react';

function UseRefDemo() {

    const inputRef = useRef("")

    useEffect(() => {

        inputRef.current.focus();
    })



    const submit = (e) => {

        e.preventDefault()
        console.log("Ref==", inputRef)   // it returns current object
        console.log(inputRef.current)   // it returns input type
        console.log(inputRef.current.value)  // it returns value which you type in text box
    }

    return (

        <div>
            <h2>Demo of UseRef hook</h2>
            <input type="text" ref={inputRef} />
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default UseRefDemo;