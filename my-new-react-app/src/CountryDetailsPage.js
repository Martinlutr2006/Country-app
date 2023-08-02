import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetailsPage = ({ countries }) => {
  const { countryName } = useParams();
  const country = countries.find((country) => country.name === countryName);

  if (!country) {
    return <div>Country not found!</div>;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      {/* Add any other country details you want to display */}
    </div>
  );
};

export default CountryDetailsPage;
