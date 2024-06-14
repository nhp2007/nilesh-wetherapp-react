import React, { useState } from "react";
import axios from "axios";
import './weatherapp.css';

function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    console.log(weather)
    console.log(city)

    const fetchWeather = async (e) => {
        e.preventDefault();
        const apiKey = '8f364ab591mshab05161ae8a036cp1f1743jsn07f9198edc1c';
        const apiHost = 'yahoo-weather5.p.rapidapi.com';
        const apiUrl = `https://${apiHost}/weather?location=${city}&format=json&u=c;`

        try {
            const response = await axios.get(apiUrl, {
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': apiHost,
                },
            });
            setWeather(response.data);
            setError('');
        } catch (error) {
            setError('Error fetching weather data. Please try again.');
            setWeather(null);
        }

        console.log("inside function")
    };
    return (
        <div id="parentall">
            <div id="inputfield">
                <form id="form" onSubmit={fetchWeather}>
                    <input
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button type="submit">Get Weather</button><br />
                </form>
                {error && <p className="error">{error}</p>}
            </div>
            {weather && weather.current_observation && (
                <div id="parent">
                    <div id="leftside">
                        <div id="forecasts">
                            <h2>Forecasts</h2>
                        </div>
                        <div id="foreinfo">
                            <div >
                                <div id="fore2" style={{ height: "100%", disply: "flex", width: "100%", }}>

                                    {weather.forecasts.map((forecast, index) => (
                                        <div id="forei">
                                            <li style={{}} key={index}>
                                                <i>{forecast.day} </i> <i> High {forecast.high}°F</i><i> Low {forecast.low}°F</i><i>{forecast.text}</i>
                                            </li>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>


                    <div id="rightside">
                        <div id="righttop">
                            <div id="p12">
                                <div id="right1">
                                    <h2>{weather.location.city}</h2>
                                    <h4>{weather.location.country}</h4>
                                    <h5>{weather.location.timezone_id}</h5>
                                </div>
                                <div id="right2">
                                    <h4>Sunrise: {weather.current_observation.astronomy.sunrise}</h4>
                                    <h4>Sunset: {weather.current_observation.astronomy.sunset}</h4>
                                </div>
                            </div>
                            <div id="right3">
                                <div id="r3b"></div>
                                <h1>Yahoo weather</h1>

                            </div>
                        </div>
                        <div id="rightmid">
                            <div id="mid1">
                                <div id="tempp"><div id="tempb"></div><h1>{weather.current_observation.condition.temperature}°F</h1></div>
                                
                                <h4>{weather.current_observation.condition.text}</h4>
                            </div>

                        </div>
                        <div id="rightbot">
                            <div className="rbd"><div id="ib0"></div><h4>Humidity:{weather.current_observation.atmosphere.humidity}</h4></div>
                            <div className="rbd"><div id="ib1"></div><h4>Visibility: {weather.current_observation.atmosphere.visibility}</h4></div>
                            <div className="rbd"><div id="ib2"></div><h4>Pressure: {weather.current_observation.atmosphere.pressure}-hpa</h4></div>
                            <div className="rbd"><div id="ib3"></div><h4>Wind: {weather.current_observation.wind.speed} mph</h4></div>
                            <div className="rbd"><div id="ib4"></div><h4>Direction: {weather.current_observation.wind.direction}</h4></div>
                            <div className="rbd"><div id="ib5"></div><h4>Chill: {weather.current_observation.wind.chill}</h4></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Weather;