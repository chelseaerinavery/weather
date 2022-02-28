import React, { useState } from 'react';

function ForecastCard(props) {

const {weather, city} = props;

console.log(weather);
return (
    
    <div className='Forecast-card'>
      
      <span>{new Date(weather.dt_txt).toLocaleString()}</span>
      <img alt={weather.weather[0].description} src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>
      <span>{weather.weather[0].description}</span>
      <span>Projected Temperature: <span className='Color-bold'>{weather.main.temp}° </span></span>
      <span>
      Wind Speed: {weather.wind.speed} mph
      </span>

     
        
    </div>
  );
}

export default ForecastCard;


