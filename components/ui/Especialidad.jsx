import Link from 'next/link'
import React from 'react'

export const Especialidad = ({ esp }) => {
	return (
		<Link key={esp.short} href={esp.href}>
			<div className='flex p-2 xxs:flex-col xxs:w-[196px] xxs:h-[125px] xxs:items-center cursor-pointer'>
				<div className=''>
					<div>
						<div className='flex w-[61px] h-[61px] text-navyFooter bg-navyFooter rounded-lg items-center justify-center'>
							<p className='text-lg text-silverContact  font-light'>
								{esp.short}
							</p>
						</div>
					</div>
				</div>
				<div className='ml-4 xxs:m-0'>
					<p className='my-[14px] text-lg xxs:text-sm text-center text-navyFooter'>
						{esp.name}
					</p>
				</div>
			</div>
		</Link>
	)
}
