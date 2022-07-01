import Link from 'next/link'
import React from 'react'
import { Especialidad } from './Especialidad'

export const Especialidades = ({ especialidades }) => {
	return (
		<div id='especialidades' className='px-3 bg-white'>
			<div className='pt-28 pb-16 bg-white 2xl:mx-[calc((100vw-1440px)/2)]'>
				<p className='text-2xl xsm:text-[32px] text-center text-navyFooter font-extralight'>
					Especialidades
				</p>
				<div className='pt-8 xxs:pt-12 xxs:flex xxs:flex-row xxs:flex-wrap justify-center'>
					{especialidades.map(esp => {
						return (
							<Especialidad key={esp.short} esp={esp} />
							// <Link key={esp.short} href={esp.href}>
							// 	<div className='flex p-2 xxs:flex-col xxs:w-[196px] xxs:h-[125px] xxs:items-center'>
							// 		<div className=''>
							// 			<div>
							// 				<div className='flex w-[61px] h-[61px] text-navyFooter bg-navyFooter rounded-lg items-center justify-center'>
							// 					<p className='text-lg text-silverContact  font-light'>
							// 						{esp.short}
							// 					</p>
							// 				</div>
							// 			</div>
							// 		</div>
							// 		<div className='ml-4 xxs:m-0'>
							// 			<p className='my-[14px] text-lg xxs:text-sm text-center text-navyFooter'>
							// 				{esp.name}
							// 			</p>
							// 		</div>
							// 	</div>
							// </Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}
