import React, { useState, useEffect } from 'react';
import axios from 'axios'



const Countries = ({ showFilteredCountries, handleClick }) => {
  return (
    showFilteredCountries.map(country =>
      <div key={country.name}>
        {country.name}
        <button onClick={() => handleClick(country)}>show</button>
      </div>
    )
  )
}

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h2>languages</h2>
      <ul>
        {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
      </ul>
      <img src={country.flag} height='100px' />
    </div>
  )
}


const App = (props) => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState([])


  const getCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
    }
    useEffect(getCountries, [])

  const getWeather = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=United States of America`)
      .then(response => {
        console.log('promise fulfilled')
        console.log('response data', response.data)
        setWeather(response.data.success)
        console.log(`Current temperature in ${response.data.location.name} is ${response.data.current.temperature}℃ and wind speed is ${response.data.current.wind_speed} and wind direction is ${response.data.current.wind_dir}`);
      })
  }
  useEffect(getWeather, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const showDetails = (country) => setSearch(country.name)


  const showFilteredCountries = search.length > 0
    ? countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
    : countries

  return (
    <div>
      <div>find countries
      <input value={search} onChange={handleSearchChange}></input>
      </div>
      <div>
        {
          showFilteredCountries.length > 10
            ? 'Too many matches, specify another filter'
            : showFilteredCountries.length === 1
              ? <CountryDetails country={showFilteredCountries[0]} />
              : <Countries showFilteredCountries={showFilteredCountries} handleClick={showDetails} />
        }
      </div>
    </div>
  );
}

export default App;
