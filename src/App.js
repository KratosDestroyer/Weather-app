import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import './App.css';
import "../src/css/WeatherBoards.css"

const App = () => {

  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('');

  const fetchWeaher = async (e) => {
    e.preventDefault();
    console.log('submititng')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID='your api key`

    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
    console.log(data);
  }



  return (
    <div >
      <div className="SearchBar">
        <form onSubmit={fetchWeaher}>
          <input className="SearchBar-input" placeholder="ctiy" value={city} onChange={e => setCity(e.target.value)} />
          <button type="submit">search</button>  
        </form>
      </div>
      {(typeof weatherData.main != 'undefined') ? (
        <div>
          <div className="WeatherBoards">
            <div className="WeatherLeft-board">
              <h1 className="WeatherCard-degrees">{weatherData.main.temp}</h1>
              <div className="WeatherCard-icon-container">
              </div>
              <h2 className="WeatherCard-city">
                {weatherData.name}, {weatherData.sys.country}
              </h2>
            </div>
            <div className="WeatherRight-board" >
              <div className="WeatherCard-detail" >
                <div>
                  <h4>High/Low</h4>
                </div>
                <div>
                  <p>
                    {weatherData.main.temp_max}/{weatherData.main.temp_min}
                  </p>
                </div>
              </div>
              <div className="WeatherCard-detail" >
                <div>
                  <h4>Humidity</h4>
                </div>
                <div>
                  <p>
                    {weatherData.main.humidity}%
                  </p>
                </div>
              </div>
              <div className="WeatherCard-detail" >
                <div>
                  <h4>wind Direction</h4>
                </div>
                <div>
                  <p>
                    {weatherData.wind.deg} <sup>o</sup> deg
                  </p>
                </div>
              </div>
              <div className="WeatherCard-detail" >
                <div>
                  <h4>pressure</h4>
                </div>
                <div>
                  <p>
                    {weatherData.main.pressure} hPa
                  </p>
                </div>
              </div>
              <div className="WeatherCard-detail" >
                <div>
                  <h4>sunset</h4>
                </div>
                <div>
                  <p>
                  {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
                  </p>
                </div>
              </div>
              <div className="WeatherCard-detail" >
                <div>
                  <h4>sunrise</h4>
                </div>
                <div>
                  <p>
                  {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
                  </p>
                </div>
              </div>
              <div className="WeatherCard-detail" >
                <div>
                  <h4>visibility</h4>
                </div>
                <div>
                  <p>
                    {weatherData.visibility/ 1000} Km
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      ) : ('')}      
    </div>
  );
}

export default App;
