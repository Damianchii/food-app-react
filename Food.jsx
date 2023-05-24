import React, { useState, version } from "react"
import { data } from "../data/data.js"
import { Modal } from "./Modal.jsx"

export const Food = () => {
	const [foods, setFoods] = useState(data)

	//Modal
	const [modal, setModal] = useState(false)
	const toggleModal = () => setModal(!modal)
	const [foodName, setFoodName] = useState("")
	const [foodImage, setFoodImage] = useState("")
	const [foodDescription, setFoodDescription] = useState("")

	const showItemModal = item => {
		setModal(!modal)
		setFoodName(item.name)
		setFoodImage(item.image)
		setFoodDescription(item.description)
	}

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
			<h1 className='text-blue-600 text-4xl text-center'>
				Top Rated Menu Items
			</h1>
			{/*Filter Row*/}
			<div className='flex flex-col lg:flex-row justify-between mt-4'>
				{/*Filter Type*/}
				<div>
					<p className='font-bold text-gray-700'>Filter Type</p>
					<div className='flex justify-start flex-wrap'>
						<button
							onClick={() => setFoods(data)}
							className='border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white m-1 '>
							All
						</button>
						<button
							onClick={() => filterType("burger")}
							className='border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white m-1'>
							Burgers
						</button>
						<button
							onClick={() => filterType("pizza")}
							className='border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white m-1'>
							Pizza
						</button>
						<button
							onClick={() => filterType("salad")}
							className='border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white m-1'>
							Salads
						</button>
						<button
							onClick={() => filterType("chicken")}
							className='border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white m-1'>
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
							className='border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white m-1'>
							All
						</button>
						<button
							onClick={() => filterPrice("$")}
							className='border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white m-1'>
							$
						</button>
						<button
							onClick={() => filterPrice("$$")}
							className='border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white m-1'>
							$$
						</button>
						<button
							onClick={() => filterPrice("$$$")}
							className='border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white m-1'>
							$$$
						</button>
						<button
							onClick={() => filterPrice("$$$$")}
							className='border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white m-1'>
							$$$$
						</button>
					</div>
				</div>
			</div>

			{/*Display food*/}
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
				{modal && (
					<Modal
						name={foodName}
						image={foodImage}
						toggleModal={toggleModal}
						description={foodDescription}
					/>
				)}
				{foods.map((item, index) => (
					<>
						<div
							onClick={() => showItemModal(item)}
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
									<span className='bg-blue-500 text-white py-2 px-3 rounded-full'>
										{item.price}
									</span>
								</p>
							</div>
						</div>
					</>
				))}
			</div>
		</div>
	)
}
