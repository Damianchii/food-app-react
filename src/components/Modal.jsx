import React from "react"
import { AiOutlineClose, AiFillPhone } from "react-icons/ai"
import { BsFillCartFill } from "react-icons/bs"
import { FaMoneyBillWaveAlt } from "react-icons/fa"

export const Modal = props => {
	return (
		<div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full'>
			<div
				onClick={props.toggleModal}
				className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/40 x '></div>
			<div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] leading-6 bg-[#f1f1f1] py-6 px-4 w-[80%] max-w-[800px] rounded-2xl'>
				<div className='w-full h-full flex flex-col '>
					<div className='relative flex justify-center items-center bg-indigo-950/40 rounded-2xl z-1'>
						<h1 className='absolute z-2 text-white font-medium tracking-wide text-3xl md:text-4xl text-center'>
							{props.name}
						</h1>
						<img
							src={props.image}
							alt={props.name}
							className='max-h-[160px] md-max-h-[200px] w-full object-cover rounded-xl relative z-[-2]'
						/>
					</div>
					<div className='py-4 px-6 text-sm lg:text-xl'>
						{props.description}
					</div>
					<div className='flex justify-center gap-3 md:gap-6 pt-8'>
						<button className=' h-[50px] p-2 md:p-4 rounded-lg bg-blue-700 border-none text-white flex justify-center items-center gap-2 text-sm md:text-lg leading-none'>
							<BsFillCartFill className='text-[18px] md:text-[25px]' />
							Add to cart
						</button>
						<button className='border-blue-700 rounded-full w-auto'>
							<AiFillPhone size={25} />
						</button>
						<button className='h-[50px] p-4 rounded-lg bg-blue-700 border-none text-white flex justify-center items-center gap-2 text-sm md:text-lg'>
							<FaMoneyBillWaveAlt className='text-[18px] md:text-[25px]' />
							Buy now
						</button>
					</div>
				</div>
				<button
					onClick={props.toggleModal}
					className='absolute top-[-15px] right-[-15px] px-2 py-2 border-none bg-black text-white rounded-full'>
					<AiOutlineClose size={25} />
				</button>
			</div>
		</div>
	)
}
