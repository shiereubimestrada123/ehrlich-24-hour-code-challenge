import React from 'react'
import Main from '../../components/Main'
import Search from '../../assets/images/search.png'

function Home() {
  return (
    <section>
			<Main>
				<p>John Smith</p>
				<p>github url</p>
				<div className='flex items-center relative'>
					<img src={Search} alt='Search' className='absolute w-4 h-4 ml-3' />
					<input type="text" className='border-slate-300 rounded-full p-1 pl-9' />
				</div>
				<button className='bg-indigo-500 border-white py-2 px-4'>Display Weather</button>
			</Main>
    </section>
  )
}

export default Home