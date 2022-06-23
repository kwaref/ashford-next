import React from 'react'
import Image from 'next/image'

export const Card = ({ icon, question, answer }) => {
	return (
		<div className='my-2 xxs:mx-2'>
			<div className='flex flex-col w-[330px] h-[278px] xxs:h-[305.19px] py-12 px-6 rounded-md border-[1px] bg-white shadow-md items-center'>
				<div className='w-5 h-5 relative'>
					<Image src={icon} alt='esteto' layout='fill' />
				</div>
				<p className='my-6 text-lg text-navyFooter font-light text-center'>
					{question}
				</p>
				<p className='text-[12px] xxs:text-sm text-cardSmallText font-light text-center'>
					{answer}
				</p>
			</div>
		</div>
	)
}
