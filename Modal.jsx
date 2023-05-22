import React from "react"
import { AiOutlineClose } from "react-icons/ai"

export const Modal = props => {
	return (
		<>
			{props.modal && (
				<div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full'>
					<div
						onClick={props.toggleModal}
						className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/40'></div>
					<div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] leading-6 bg-[#f1f1f1] py-6 px-4 rounded-sm w-[80%] max-w-[800px] rounded-2xl'>
						<div className='w-full h-full flex flex-col '>
							<div className='relative flex justify-center items-center bg-indigo-950/40 z-1'>
								<h1 className='absolute z-2 text-white font-medium tracking-wide text-3xl md:text-4xl '>
									dfga
								</h1>
								<img
									src='https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
									alt='adasdasd'
									className='max-h-[160px] md-max-h-[200px] w-full object-cover rounded-xl relative z-[-2]'
								/>
							</div>
							<div className='py-4 px-6'>
								A cheeseburger is a classic American culinary delight, loved by
								people of all ages. The star of the cheeseburger is the
								perfectly grilled beef patty, cooked to juicy perfection. A
								generous slice of melted cheese, typically American or cheddar,
								adds a rich and creamy element to the burger. The bun, often
								toasted, provides a soft and slightly crispy base for the
								delicious toppings. Crisp lettuce leaves bring a refreshing
								crunch to the cheeseburger experience. Slices of ripe tomatoes
								offer a burst of freshness and acidity, balancing the richness
								of the cheese and meat. Tangy pickles add a delightful zing and
								a hint of sourness that cuts through the richness of the burger.
								Onions, whether raw or caramelized, bring a savory sweetness and
								texture to the cheeseburger. Ketchup, mustard, and mayo are
								classic condiments that enhance the flavors and add a creamy,
								tangy, or slightly spicy kick.
							</div>
							<div className='flex justify-center gap-6 py-8'>
								<button className='p-4 rounded-lg'>Add to cart</button>
								<button>Call and ask</button>
								<button>Buy Now</button>
							</div>
						</div>
						<button
							onClick={props.toggleModal}
							className='absolute top-[-15px] right-[-15px] px-2 py-2 border-none bg-black text-white rounded-full'>
							<AiOutlineClose size={25} />
						</button>
					</div>
				</div>
			)}
		</>
	)
}
