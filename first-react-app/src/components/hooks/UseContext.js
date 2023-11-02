import {useContext,createContext} from 'react';

const NameContext= createContext(); // creating global variable accessed by other components

const name="hyderabad";

function MenuItem(){

    const value=useContext(NameContext)

    return(
        <div>Menu Items {value} <Home/></div>
        
    )
}

function Home(){

    const value=useContext(NameContext)

    return(
        <div>Home Component {value} <AboutUs/> </div>
    )
}

function AboutUs(){

    const value=useContext(NameContext)

    return(
        <div>About us component {value} <ContactUs/> </div>
    )
}

function ContactUs(){

    const val=useContext(NameContext)

    return(

        <div>Contact Us component Address: {val}</div>
    )
}

function Context(){

    return(

        <div>
            <NameContext.Provider value={name}>
            <MenuItem/>
            </NameContext.Provider>
        </div>
    )
}


export default Context;