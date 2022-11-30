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
                  (<div className="bg-white text-center text-slate-800 rounded-lg m-3 py-5 px-5">
                      <p className='font-bold'>{weatherData.city.name}</p>
                      <p className=''>{parseFloat(weatherData.list[0].main.temp)}°F</p>
                      <p className=''>{weatherData.weather}</p>
                  </div>) : "Enter a city"
              }
        <p className='pt-10'>That is juste the temperature for the moment...</p>
        <p className='pb-10'>Upload comming soon...</p>
      </div>
  )
}

export default App

