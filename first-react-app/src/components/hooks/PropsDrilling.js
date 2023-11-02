function MenuItem(){

    return(
        <div>Menu Items <Home address="Hyderabad"/></div>
        
    )
}

function Home(props){

    return(
        <div>Home Component <AboutUs address={props.address}/> </div>
    )
}

function AboutUs(props){

    return(
        <div>About us component <ContactUs address={props.address}/> </div>
    )
}

function ContactUs(props){

    return(

        <div>Contact Us component Address: {props.address}</div>
    )
}


export default MenuItem;