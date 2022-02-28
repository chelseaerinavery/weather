//import logo from './logo.svg';
import globe from './globe.png';
import './App.css';
import {getWeatherRequest,getWeatherRequestZip,getForecastRequestZip} from '../src/requests/main.js';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import ForecastCard from './components/ForecastCard';

function App() {
 const [weather, setWeather] = useState(null);
 const [forecast, setForecast] = useState(null);
 const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const getWeather = async () => {
    const res = await getWeatherRequestZip(80302) 
    setWeather(res)
    }
    if (!weather) {
      getWeather()
    }

  });

const searchZip = async () => {
  var res = await getForecastRequestZip(keyword)
  if (res.cod >= '400') {
    alert("Please type a valid zip code.")
  } else {
    setForecast(res)
  }
}

  return (
    <div className="App">
      <header className="App-header"> 
      <div>
      <input 
       // value={keyword}
        placeholder={"search zip code"}
        onChange={(e) => setKeyword(e.target.value)}
      /> 
      <button onClick={searchZip}>Search</button>
      </div>

      <img src={globe} className="App-logo" alt="logo" />
      
      {weather && !forecast && <Card weather={weather}/>}

      <h1 className="City-name">{forecast?.city.name}</h1>
      <div className="Forecast-card-container">
      {forecast && forecast.list.map((f,i) => {
        if (i<9) {
          return <ForecastCard weather={f} city={forecast.city}/>
        }
        return null;
      })}
      </div>
      </header>
    </div>
  );
}

export default App;



