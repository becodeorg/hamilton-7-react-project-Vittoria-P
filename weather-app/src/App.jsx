import { useRef,useState  } from 'react';
import reactLogo from './assets/react.svg'



const apiLink = "https://api.openweathermap.org/data/2.5/forecast/?q=";
const apiKey = "60139c8b2107e392ac604ffc88f931a8"

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [city, setCity] = useState("Paris")
  const getWeather = (event) => {
    if(event.key == "Enter"){
      fetch(`${apiLink}${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {setWeatherData(data)})
    }
    console.log("weatherdata", weatherData);
  };


return (
    <div className="App bg-sky-200 text-center p-5">
      <h1 className="text-blue-700 text-5xl p-7">Vice Weather</h1>
      <p className="p-3 ">From where do you want the weather ?</p>
        <input className='input rounded-lg p-3 m-5' onChange={e=> setCity(e.target.value)} value={city} placeholder="Where ?"onKeyDown={getWeather}></input>
            {weatherData.city ? 
                (<div className="bg-white text-center text-slate-800">
                    <p>{weatherData.city.name}</p>
                    <br></br>
                    <p>{Math.round(weatherData.temp)}°C</p>
                    <br></br>
                    <p>{weatherData.weather}</p>
                </div>) : "Enter a data"
            }
    </div>
)
}
// dans l'array, chercher les donnes, des disposées

export default App








/*
Liens

https://api.openweathermap.org/data/2.5/weather?q=$%7Bcity%7D&units=metric&APPID=$%7Bprocess.env.REACT_APP_WEATHER_API_KEY%7D

https://api.openweathermap.org/data/2.5/forecast?q=$%7Bcity%7D&units=metric&APPID=$%7Bprocess.env.REACT_APP_WEATHER_API_KEY%7D


*/