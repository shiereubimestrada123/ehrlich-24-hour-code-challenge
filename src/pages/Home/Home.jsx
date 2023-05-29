import React from 'react'
import Main from '../../components/Main'
import Search from '../../assets/images/search.png'

function Home({ handleSubmit, setCity, city }) {
  return (
    <section>
			<Main>
				<p>John Smith</p>
				<p>github url</p>
				<form onSubmit={handleSubmit}>
					<div className='flex items-center relative pb-6'>
						<img src={Search} alt='Search' className='absolute w-4 h-4 ml-3' />
						<input onChange={(e) => setCity(e.target.value)} value={city} type="text" className='border-2 border-gray-600 rounded-full p-1 pl-9' />
					</div>
					<button type='submit' className='bg-slate-400 border-white py-2 px-4'>Display Weather</button>
				</form>
			</Main>
    </section>
  )
}

export default Home