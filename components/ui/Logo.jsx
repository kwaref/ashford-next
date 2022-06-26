import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
	return (
		<div
			className='w-[120px] h-[50px] md:h-14 lg:h-[50px] my-0 mr-4 ml-0 py-[5px] pr-0 pl-4 bg-white'
			id='logo'>
			<Link href='/#home'>
				<a className=''>
					<div className='w-[104px] h-10 relative'>
						<Image src='/images/logo.svg' alt='Ashford' layout='fill' />
					</div>
				</a>
			</Link>
		</div>
	)
}
