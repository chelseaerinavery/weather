import React, { useState } from 'react';

function Card(props) {

const { weather } = props;

  return (

    <span><p id="greeting">Enter a zip code to receive a forecast detailing weather every 3 hours for the next 24 hours.</p></span>

    // <div className='Weather-card'>
    //   <h1 className="City-name">{weather.name}</h1>
    //   <p>Current Temperature: <span className='Color-bold'>{weather.main.temp}°</span> (L:{weather.main.temp_min}/H:{weather.main.temp_max})</p>
    //     <h4>It will be a {weather.weather[0].description} kind of day 👩‍🚀</h4>
    //     <h2><img alt={weather.weather[0].description} src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/></h2>
    // </div>
  );
}

export default Card;


