function Main({ children }) {
  return (
    <div className='flex justify-center items-center flex-row h-[50rem]'>
			<div className='flex flex-col gap-6'>
				{children}
			</div>
		</div>
  )
}

export default Main