import { useRef,useState  } from 'react';
import reactLogo from './assets/react.svg'



const url = "https://api.openweathermap.org/data/2.5/onecall?lat=$%7Blat%7D&lon=$%7Blon%7D&units=metric&appid=$%7Bkey%7D";
fetch(url)
    .then(response => response.json())



function App() {
  const apiKey = ""
  const [wheatherData, setWheatherData] = useState([{}])
  const [city, setCity] = useState()
  const getWheater = (event) => {
    if(event.key == "Enter"){
      fetch(apiLink + ${city} + ${apiKey})
        .then(response => response.json())
        .then(data => {setWheatherData(data)
                        setCity("")})
    }
};


/*
  return (
    <div className="App bg-sky-300 text-center flex-col justify-evenly p-5">
      <h1 className="text-blue-700 text-5xl p-7">Vice Weather</h1>
      <p className="p-3 ">From where do you want the weather ?</p>
      <div className="card flex-col justify-evenly">
        <input type="text" ref={inputElement} placeholder="Where ?" className="bg-white text-gray-500 p-3"></input>
        <button onClick={cityName()} className="p-3">Submit</button>
      </div>
    </div>
  )
*/

return (
    <div className='container'>
        <input className='input' onchange={e=>setCity (e.target.value)} value={city} onKeyPress={getWeather(placeholder = " ... ")}></input>
            {typeofwheaterData.main === "undefined" ? (
                <div><p>Please enter city : </p></div>) :
                    (<div>
                          <p>{wheatherData.name}</p>
                          <p>{Math.round(wheatherData.main.temp)}°C</p>
                          <p>{wheatherData.wheather[e]}</p>
                    </div>)
            }
    </div>
)



export default App








/*
Liens

https://api.openweathermap.org/data/2.5/weather?q=$%7Bcity%7D&units=metric&APPID=$%7Bprocess.env.REACT_APP_WEATHER_API_KEY%7D

https://api.openweathermap.org/data/2.5/forecast?q=$%7Bcity%7D&units=metric&APPID=$%7Bprocess.env.REACT_APP_WEATHER_API_KEY%7D


*/