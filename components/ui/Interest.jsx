import Image from 'next/image'
import React from 'react'
import interest from '/public/images/interest.webp'

export const Interest = () => {
	return (
		<div className='flex flex-col bg-interestBlue pb-12 xsm:py-12 xsm:px-10 md:px-28'>
			<div>
				<div className='flex flex-col xsm:flex-row'>
					<div className='pb-10 xsm:w-1/2 xsm:pb-0'>
						<div className='flex xsm:pr-12 w-full xsm:h-full relative'>
							<Image
								src={interest}
								alt='image'
								className='xsm:rounded'
								objectFit='cover'
							/>
						</div>
					</div>
					<div className='px-4 xsm:w-1/2 xsm:p-0 flex-col m4xl:flex m4xl:justify-around'>
						<div className='flex flex-col'>
							<p className='mb-4 text-sm xxs:text-[11.5px] xxs:font-bold text-greenArrow uppercase'>
								datos de interés
							</p>
							<p className='my-[18px] text-silverContact text-2xl xxs:text-5xl font-extralight'>
								¡En el Hospital Ashford estamos para servirles!
							</p>
							<p className='mb-8 xsm:mb-12 text-xl text-greenArrow font-light'>
								Nuestra misión es proveer servicios médicos hospitalarios de
								excelencia con calor humano con empatía y compasión
							</p>
							<div className='grid grid-cols-2 gap-x-12 gap-y-8'>
								<div>
									<div>
										<p className='text-[32px] xsm:text-5xl text-white font-light'>
											118
										</p>
									</div>
									<div>
										<p className='mt-2 text-base text-white'>
											Años de servicio a la comunidad
										</p>
									</div>
								</div>
								<div>
									<div>
										<p className='text-[32px] xsm:text-5xl text-white font-light'>
											300
										</p>
									</div>
									<div>
										<p className='mt-2 text-base text-white'>
											Vidas de bebés salvadas al año en nuestro NICU Nivel 3
										</p>
									</div>
								</div>
								<div>
									<div>
										<p className='text-[32px] xsm:text-5xl text-white font-light'>
											#1
										</p>
									</div>
									<div>
										<p className='mt-2 text-base text-white'>
											La clínica colorrectal más completa de Puerto Rico
										</p>
									</div>
								</div>
								<div>
									<div>
										<p className='text-[32px] xsm:text-5xl text-white font-light'>
											#1
										</p>
									</div>
									<div>
										<p className='mt-2 text-base text-white'>
											#1 en partos en Hospital Privado en Puerto Rico
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
