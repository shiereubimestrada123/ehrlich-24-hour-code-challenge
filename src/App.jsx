import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Landing from './pages/Landing/Landing.jsx'
import Home from './pages/Home/Home.jsx'
import Weather from './pages/Weather/Weather.jsx'

import Navbar from './components/Navbar.jsx'

function App() {
	const navigate = useNavigate();

	const [data, setData] = useState({})
  const [city, setCity] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()

		if(city) {
			const { data } = await axios.get(url);
			setData(data);
			// setCity('');
			navigate('/weather')
		}
	}

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_weatherApiKey }`

  return (
		<>
			<Navbar />
			<Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home handleSubmit={handleSubmit} setCity={setCity} city={city} />} />
      <Route path='/weather' element={<Weather data={data} />} />
    </Routes>
		</>
  )
}

export default App