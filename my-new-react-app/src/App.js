import React, { useState, useEffect } from 'react';
import jsonData from './data.json';
import './App.css';

function App() {
  const [countries, setCountries] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(''); // State for selected region

  useEffect(() => {
    // Filter countries data based on the search term and selected region
    const filteredCountries = jsonData.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion === '' || country.region.toLowerCase() === selectedRegion.toLowerCase())
    );
    setCountries(filteredCountries);
  }, [searchTerm, selectedRegion]); // Trigger effect on both search term and selected region changes

  const handleCountryClick = (country) => {
    setSelectedCountry(selectedCountry === country ? null : country);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="navbar">
        <button onClick={handleToggleDarkMode} className='button'>
          {darkMode ? '🌙' : '☀️'}
        </button>
        <h1>Where in the World?</h1>
       
      </div>
        {/* Region filter dropdown/select input */}
        <select value={selectedRegion} onChange={handleRegionChange} className='region'>
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      <input
        className="input"
        type="text"
        placeholder="Search Country"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      

      <div className="pricing-table">
        {countries.map((country) => (
          <div
            className={`country-card ${selectedCountry === country ? 'selected' : ''}`}
            key={country.name}
            onClick={() => handleCountryClick(country)}
          >
            <img
              src={country.flags.svg}
              alt={country.name}
              className="country-flag"
            />
            <h2>{country.name}</h2>
            {selectedCountry === country && (
              <div className="country-details">
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
                {/* Add any other country details you want to display */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
