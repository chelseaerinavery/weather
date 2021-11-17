//import logo from './logo.svg';
import globe from './globe.png';
import './App.css';
import {getWeatherRequest,getWeatherRequestZip} from '../src/requests/main.js';
import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
 const [weather, setWeather] = useState(null);
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
  console.log(keyword, 'keyword')
  var res = await getWeatherRequestZip(keyword)
  setWeather(res)
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
      
      {weather && <Card weather={weather}/>}

      </header>
    </div>
  );
}

export default App;

