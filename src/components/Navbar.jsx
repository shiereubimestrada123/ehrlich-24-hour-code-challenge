import { useNavigate } from 'react-router-dom'

import weatherIcon from '../assets/images/thunderstorm.png'

function Navbar() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  }

  return (
    <>
      <header className='bg-slate-400 py-2 px-4'>
        <div className='flex justify-between items-center'>
          <ul className='flex items-center gap-2 cursor-pointer' onClick={handleNavigate}>
            <img src={weatherIcon} alt="Weather Icon" className='w-1- h-10' />
            <li>Weather Forecast</li>
          </ul>
          <button></button>
        </div>
      </header>
    </>
  )
}

export default Navbar