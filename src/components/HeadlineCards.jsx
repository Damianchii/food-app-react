import React from "react"

export const HeadlineCards = () => {
	return (
		<div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
			{/*Card*/}
			<div className='rounded-xl relative'>
				{/*Overlay */}
				<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className='font-bold text-2xl px-3 pt-4'>Sun's Out, BOGO's Out</p>
					<p className='px-3'>Trough 8/26</p>
					<button className='border-white bg-white text-black mx-3 absolute bottom-4 '>
						Order Now
					</button>
				</div>
				<img
					className='max-h-[160px] md-max-h-[200px] w-full object-cover rounded-xl'
					src='https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
					alt='/'
				/>
			</div>
			{/*Card*/}
			<div className='rounded-xl relative'>
				{/*Overlay */}
				<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className='font-bold text-2xl px-3 pt-4'>New Restaurants</p>
					<p className='px-3'>Added Daily</p>
					<button className='border-white bg-white text-black mx-3 absolute bottom-4 '>
						Order Now
					</button>
				</div>
				<img
					className='max-h-[160px] md-max-h-[200px] w-full object-cover rounded-xl'
					src='https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
					alt='/'
				/>
			</div>
			{/*Card*/}
			<div className='rounded-xl relative'>
				{/*Overlay */}
				<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className='font-bold text-2xl px-3 pt-4'>We Deliver Desserts</p>
					<p className='px-3'>Tasty Treats</p>
					<button className='border-white bg-white text-black mx-3 absolute bottom-4 '>
						Order Now
					</button>
				</div>
				<img
					className='max-h-[160px] md-max-h-[200px] w-full object-cover rounded-xl'
					src='https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80'
					alt='/'
				/>
			</div>
		</div>
	)
}
