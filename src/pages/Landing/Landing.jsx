import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import Main from '../../components/Main'

function Landing({  }) {
  const { loginWithRedirect, isAuthenticated} = useAuth0();

  return (
    <section>
      <Main>
        <p className='text-2xl'>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.</p>
				<button onClick={() => loginWithRedirect()} className='flex w-fit bg-slate-400 border-white py-2 px-4'>Login</button>
      </Main>
    </section>
  )
}

export default Landing