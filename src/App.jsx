// import axios from 'axios'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const handleChange = (e) =>{
    setLocation(e.target.value)
  }
  const handleClick = () =>{
    
  }
  return (
    <div className='container'>
      <div className="container__top">
        <input type="text" name="name" id="name" placeholder='Enter Location' onChange={handleChange} value={location}/>
        <button onClick={handleClick}>Search</button>
      </div>
      <div className="container__middle">
        <div className="container__middle--location">
          <h1>{location}</h1>
          <p>32°C</p>
        </div>
        <h4>Clear</h4>
      </div>
      <div className="container__bottom">
       <div className='bottom'>
        <div className="bottom__feel">
            <h4>31°C</h4>
            <p>Feels Like</p>
          </div>
          <div className="bottom__humidity">
            <h4>20%</h4>
            <p>Humidity</p>
          </div>
          <div className="bottom__speed">
            <h4>10MPH</h4>
            <p>Wind Speed</p>
          </div>
       </div>
      </div>
    </div>
  )
}

export default App
