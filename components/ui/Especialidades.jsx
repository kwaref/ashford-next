import Link from 'next/link'
import React from 'react'
import { Especialidad } from './Especialidad'

export const Especialidades = ({ especialidades }) => {
	return (
		<div id='especialidades' className='px-3 bg-white'>
			<div className='pt-16 pb-8 bg-white 2xl:mx-[calc((100vw-1440px)/2)]'>
				<p className='text-2xl xsm:text-[32px] text-center text-navyFooter font-extralight'>
					Especialidades
				</p>
				<div className='pt-8 xxs:pt-12 xxs:flex xxs:flex-row xxs:flex-wrap justify-center'>
					{especialidades.map(esp => {
						return <Especialidad key={esp.short} esp={esp} />
					})}
				</div>
			</div>
		</div>
	)
}
