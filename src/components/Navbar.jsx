import weatherIcon from '../assets/images/thunderstorm.png'

function Navbar() {
  return (
    <header className='py-2 px-4'>
			<div className='flex justify-between items-center'>
				<ul className='flex items-center gap-2'>
					<img src={weatherIcon} alt="Weather Icon" className='w-1- h-10' />
					<li>Weather Forecast</li>
				</ul>
				<button>test</button>
			</div>
    </header>
  )
}

export default Navbar