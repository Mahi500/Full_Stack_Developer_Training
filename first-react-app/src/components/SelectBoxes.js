import React, { useState } from 'react';

const countries = [
  {
    name: 'USA',
    states: [
      { name: 'California', cities: ['Los Angeles', 'San Francisco'] },
      { name: 'New York', cities: ['New York City', 'Buffalo'] },
      { name: 'Texas', cities: ['Houston', 'Dallas'] },
    ],
  },
  {
    name: 'Canada',
    states: [
      { name: 'Ontario', cities: ['Toronto', 'Ottawa'] },
      { name: 'Quebec', cities: ['Montreal', 'Quebec City'] },
    ],
  },
];

function SelectBoxes() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState('');
    setSelectedCity('');
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const getStates = () => {
    const country = countries.find((c) => c.name === selectedCountry);
    return country ? country.states.map((s) => s.name) : [];
  };

  const getCities = () => {
    const country = countries.find((c) => c.name === selectedCountry);
    const state = country?.states.find((s) => s.name === selectedState);
    return state ? state.cities : [];
  };

  return (
    <div>
        <div style={{textAlign:"center"}}>
        <div style={{padding:"20px"}}>
      <label htmlFor="country">Country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
      </div>
      <div style={{padding:"20px"}}>
      <label htmlFor="state">State:</label>
      <select id="state" value={selectedState} onChange={handleStateChange}>
        <option value="">Select a state</option>
        {getStates().map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      </div>
      <div style={{padding:"20px"}}>
      <label htmlFor="city">City:</label>
      <select id="city" value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {getCities().map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      </div>
    </div>
      
    </div>
  );
}

export default SelectBoxes;
