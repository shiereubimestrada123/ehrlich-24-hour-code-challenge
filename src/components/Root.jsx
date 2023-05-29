import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Root() {
  return (
    <>
    	<section>
        <Navbar />
				<hr />
      </section>
			<main>
      	<Outlet />
      </main>
		</>
  )
}

export default Root