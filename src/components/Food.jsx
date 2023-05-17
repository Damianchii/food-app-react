import React, { useState } from "react"
import { data } from "../data/data.js"
import { Modal } from "../components/Modal.jsx"

export const Food = () => {
	const [foods, setFoods] = useState(data)

	//Modal
	const [modal, setModal] = useState(false)
	const toggleModal = () => setModal(!modal)

	if (modal) {
		document.body.classList.add("overflow-y-hidden", "pr-[21px]")
	} else {
		document.body.classList.remove("overflow-y-hidden", "pr-[21px]")
	}
	//Filter Type
	const filterType = category => {
		setFoods(
			data.filter(item => {
				return item.category === category
			})
		)
	}

	//Filter by price
	const filterPrice = price => {
		setFoods(
			data.filter(item => {
				return item.price === price
			})
		)
	}

	return (
		<div className='max-w-[1640px] m-auto px-4 py-12'>
			<h1 className='text-orange-600 text-4xl text-center'>
				Top Rated Menu Items
			</h1>
			{/*Filter Row*/}
			<div className='flex flex-cl lg:flex-row justify-between mt-4'>
				{/*Filter Type*/}
				<div>
					<p className='font-bold text-gray-700'>Filter Type</p>
					<div className='flex justify-start flex-wrap'>
						<button
							onClick={() => setFoods(data)}
							className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 '>
							All
						</button>
						<button
							onClick={() => filterType("burger")}
							className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>
							Burgers
						</button>
						<button
							onClick={() => filterType("pizza")}
							className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>
							Pizza
						</button>
						<button
							onClick={() => filterType("salad")}
							className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>
							Salads
						</button>
						<button
							onClick={() => filterType("chicken")}
							className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>
							Chicken
						</button>
					</div>
				</div>
				{/*Filter Price*/}
				<div>
					<p className='font-bold text-gray-700'>Filter Price</p>
					<div className='flex justify-between max-w-[390px] w-full'>
						<button
							onClick={() => setFoods(data)}
							className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>
							All
						</button>
						<button
							onClick={() => filterPrice("$")}
							className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>
							$
						</button>
						<button
							onClick={() => filterPrice("$$")}
							className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>
							$$
						</button>
						<button
							onClick={() => filterPrice("$$$")}
							className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>
							$$$
						</button>
						<button
							onClick={() => filterPrice("$$$$")}
							className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>
							$$$$
						</button>
					</div>
				</div>
			</div>

			{/*Display food*/}
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
				<Modal toggleModal={toggleModal} modal={modal} />
				{foods.map((item, index) => (
					<div
						onClick={toggleModal}
						key={index}
						className='border rounded-lg shadow-lg duration-300 cursor-pointer hover:shadow-2xl}'>
						<img
							src={item.image}
							alt={item.name}
							className='w-full h-[200px]  object-cover rounded-t-lg pointer-events-none'
						/>
						<div className='flex justify-between px-2 py-4'>
							<p className='font-bold'>{item.name}</p>
							<p>
								<span className='bg-orange-500 text-white p-1 rounded-full'>
									{item.price}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
