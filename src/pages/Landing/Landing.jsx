import React from 'react'
import Main from '../../components/Main'

function Landing() {
  return (
    <section>
      <Main>
        <p>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.</p>
				<button className='flex'>Login</button>
      </Main>
    </section>
  )
}

export default Landing