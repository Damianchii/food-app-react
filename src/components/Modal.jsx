import React from "react"
import { AiOutlineClose } from "react-icons/ai"

export const Modal = props => {
	return (
		<>
			{props.modal && (
				<div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full '>
					<div
						onClick={props.toggleModal}
						className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/40'></div>
					<div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] leading-6 bg-[#f1f1f1] px-7 py-4 rounded-sm max-w-[600px] min-w-[300px]'>
						<h2>
							Hello <p>sdfasdfas</p>
						</h2>
						<button
							onClick={props.toggleModal}
							className='absolute top-[5px] right-[5px] px-2 py-2 border-none'>
							<AiOutlineClose size={25} />
						</button>
					</div>
				</div>
			)}
		</>
	)
}
