import React from 'react'
import { Servicio } from './Servicio'

export const Servicios = ({ servicios }) => {
	return (
		<div id='servicios' className='px-3 bg-silver'>
			<div className='py-8 px-3 bg-silver 2xl:mx-[calc((100vw-1440px)/2)]'>
				<p className='text-2xl xsm:text-[32px] text-center text-navyFooter font-extralight'>
					Servicios
				</p>
				<div className='pt-8 xxs:pt-12 xxs:flex xxs:flex-row xxs:flex-wrap justify-center space-y-4'>
					{servicios.map(serv => {
						return <Servicio key={serv.short} serv={serv} />
					})}
				</div>
			</div>
		</div>
	)
}
