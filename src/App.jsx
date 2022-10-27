//import logo from './logo.svg';
import globe from './globe.png';
import './App.css';
import {getForecastRequestZip} from '../src/requests/main.js';
import { useState } from 'react';
import ForecastCard from './components/ForecastCard';

function App() {
 const [forecast, setForecast] = useState(null);
 const [keyword, setKeyword] = useState('');

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
      <div id="Search">
      <input 
        placeholder={"search zip code"}
        onChange={(e) => setKeyword(e.target.value)}
      /> 
      <button onClick={searchZip}>Search</button>
      </div>

      <img src={globe} className="App-logo" alt="logo" />
      
      {!forecast && <span><p id="Greeting">Enter a zip code to receive a forecast detailing weather every 3 hours for the next 24 hours.</p></span>}

      <h1 className="City-name">{forecast?.city.name}</h1>
      </header>
      <div className="Forecast-card-container">
      {forecast && forecast.list.map((f,i) => {
        if (i<9) {
          return <ForecastCard weather={f} city={forecast.city}/>
        }
        return null;
      })}
      </div>
      
    </div>
  );
}

export default App;



