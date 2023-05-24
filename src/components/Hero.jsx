import React from "react"

export const Hero = () => {
	return (
		<div className='max-w-[1640px] mx-auto p-4 '>
			<div className='max-h-[500px] relative'>
				{/*Overlay*/}
				<div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center '>
					<h1 className='px-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
						The <span className='text-blue-500'>Best</span>
					</h1>
					<h1 className='px-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
						<span className='text-blue-500'>Foods</span> Delivered
					</h1>
				</div>
				<img
					className='w-full max-h-[500px] object-cover'
					src='https://images.unsplash.com/photo-1571116213508-2a5017ab1324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
					alt='/'
				/>
			</div>
		</div>
	)
}
