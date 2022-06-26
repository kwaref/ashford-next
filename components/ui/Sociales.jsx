import Image from 'next/image'
import React from 'react'

export const Sociales = () => {
	return (
		<div className='flex w-[42px] mt-8 -mr-4 mb-0 ml-0'>
			<div className='w-[42px] h-[42px] rounded-full py-[11px] px-[15px] mt-0 mr-4 mb-0 ml-0 bg-silver cursor-pointer'>
				<a href='https://es-la.facebook.com/ashfordhospitalpr/'>
					<div className='relative w-[11px] h-[20px]'>
						<Image src='/images/face.svg' alt='face' layout='fill' />
					</div>
				</a>
			</div>
			<div className='w-[42px] h-[42px] rounded-full p-[11px] mt-0 mr-4 mb-0 ml-0 bg-silver cursor-pointer'>
				<a href='https://www.linkedin.com/company/ashfordhospital/?originalSubdomain=pr'>
					<div className='relative w-[20px] h-[20px]'>
						<Image src='/images/link.svg' alt='link' layout='fill' />
					</div>
				</a>
			</div>
			<div className='w-[42px] h-[42px] rounded-full py-3  px-[11px] mt-0 mr-4 mb-0 ml-0 bg-silver cursor-pointer'>
				<a href='https://twitter.com/ashfordpr'>
					<div className='relative w-[20px] h-[18px]'>
						<Image src='/images/tweet.svg' alt='tweet' layout='fill' />
					</div>
				</a>
			</div>
			<div className='w-[42px] h-[42px] rounded-full p-[11px] mt-0 mr-4 mb-0 ml-0 bg-silver cursor-pointer'>
				<a href='https://www.instagram.com/ashfordhospitalpr/?hl=es'>
					<div className='relative w-[20px] h-[20px]'>
						<Image src='/images/insta.svg' alt='insta' layout='fill' />
					</div>
				</a>
			</div>
		</div>
	)
}
