import React, { useState } from 'react';

function Card(props) {

const { weather } = props;

  return (
    <div className='Weather-card'>
      <h1 className="City-name">{weather.name}</h1>
      <p>Current Temperature: <span className='Color-bold'>{weather.main.temp}°</span> (L:{weather.main.temp_min}/H:{weather.main.temp_max})</p>
        <h3>It will be a {weather.weather[0].description} kind of day 👩‍🚀</h3>
        <h2><img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/></h2>
    </div>
  );
}

export default Card;


