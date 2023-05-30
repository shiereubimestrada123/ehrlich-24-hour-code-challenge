function Main({ children }) {
  return (
    <div className='flex justify-center items-center flex-row h-screen bg-slate-100'>
			<div className='flex flex-col gap-6 px-10'>
				{children}
			</div>
		</div>
  )
}

export default Main