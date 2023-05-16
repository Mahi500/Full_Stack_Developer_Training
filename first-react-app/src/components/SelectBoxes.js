import {useState} from 'react';

const countries=[

    {id:1,countryName:"India"},
    {id:2,countryName:"USA"}

]

const states=[

    {id:1,countryCode:1,stateName:"Telangana"},
    {id:2,countryCode:1,stateName:"Andhra Pradesh"},
    {id:3,countryCode:1,stateName:"Tamilnadu"},
    {id:4,countryCode:2,stateName:"California"},
    {id:5,countryCode:2,stateName:"Texas"},
    {id:6,countryCode:2,stateName:"Florida"}

]


const cities=[

    {id:1,stateCode:1,cityName:"Hyderabad"},
    {id:2,stateCode:1,cityName:"Warangal"},
    {id:3,stateCode:1,cityName:"Karimnagar"},
    {id:4,stateCode:2,cityName:"Vijayawada"},
    {id:5,stateCode:2,cityName:"Vizag"},
    {id:6,stateCode:2,cityName:"Guntur"},
    {id:7,stateCode:3,cityName:"Chennai"},
    {id:8,stateCode:3,cityName:"Madurai"},
    {id:9,stateCode:3,cityName:"Coimbatore"},
    {id:10,stateCode:4,cityName:"San Francisco"},
    {id:11,stateCode:4,cityName:"San Diego"},
    {id:12,stateCode:4,cityName:"San Jose"},
    {id:13,stateCode:5,cityName:"Dallas"},
    {id:14,stateCode:5,cityName:"Houston"},
    {id:15,stateCode:5,cityName:"San Antonio"},
    {id:16,stateCode:6,cityName:"Miami"},
    {id:17,stateCode:6,cityName:"Orlando"},
    {id:18,stateCode:6,cityName:"Tampa"}
    
    

]










function SelectBoxes(){

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const filteredStates=[];
    const filteredCities=[];

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState("");
        setSelectedCity("");
      };
    
      const handleStateChange = (e,key) => {
        setSelectedState(e.target.value);
        filteredStates = states.filter((state) => state.countryCode===key);
        setSelectedCity("");
      };
    
      const handleCityChange = (e,key) => {
        setSelectedCity(e.target.value);
        filteredCities = cities.filter((city) => city.stateCode===key);

      };



    return(

             <div style={{textAlign:"center"}}>
                <div>
                <label for="country">Country:</label>
                <select id="country" value={selectedCountry} onChange={(e)=>handleCountryChange(e)}>
                <option>Choose Country</option>
                {
                    countries.map((country)=>{
                    return(
                    <option key={country.id}>{country.countryName}</option>
                    )
                    }
                    )
                }
                </select>
                </div>
                <br/>
                <div>
                <label for="state">State:</label>
                <select id="state" value={selectedState} onChange={(e,key)=>handleStateChange(e,key)}>
                <option>Choose State</option>
                
                    {
                        filteredStates.map((state)=>{

                            return (

                                <option key={state.id}>{state.stateName}</option>
                            )


                        })
                    }
                </select>
                </div>
                <br/>
                <div>
                <label for="city">City</label>
                <select id="city" value={selectedCity} onChange={(e,key)=>handleCityChange(e,key)}>
                <option>Choose City</option>
                {
                    filteredCities.map((city)=>{
                        
                        return(

                            <option key={city.id}>{city.cityName}</option>
                        )
                    })
                }
                </select>
                </div>
             </div>

    )


}


export default SelectBoxes;

