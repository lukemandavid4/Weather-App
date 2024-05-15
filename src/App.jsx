import axios from 'axios'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ccc28cfef87326fdf27adb45071461a8`
  const handleChange = (e) =>{
    setLocation(e.target.value)
  }
  const handleClick = () =>{
    axios.get(url)
      .then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
  }
  return (
    <div className='container'>
      <div className="container__top">
        <input type="text" name="name" id="name" placeholder='Enter Location' onChange={handleChange} value={location}/>
        <button onClick={handleClick}>Search</button>
      </div>
      <div className="container__middle">
        <div className="container__middle--location">
          <h1>{data.name}</h1>
          {data.main ?  <p>{data.main.temp}°F</p> : null}
        </div>
        {data.weather ? <h4>{data.weather[0].main}</h4> : null}
      </div>
      <div className="container__bottom">
       <div className='bottom'>
        <div className="bottom__feel">
            {data.main ?  <h4>{data.main.feels_like}°F</h4> : null}
            <p>Feels Like</p>
          </div>
          <div className="bottom__humidity">
            {data.main ?  <h4>{data.main.humidity}%</h4> : null}
            <p>Humidity</p>
          </div>
          <div className="bottom__speed">
            {data.wind ?  <h4>{data.wind.speed}MPH</h4> : null}
            <p>Wind Speed</p>
          </div>
       </div>
      </div>
    </div>
  )
}

export default App
