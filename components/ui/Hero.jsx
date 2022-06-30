import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-reveal'

export const Hero = () => {
	return (
		<div id='hero'>
			<div>
				<div
					id='wrapper'
					className="flex w-full h-[calc(100vh-66px)] xxs:h-[calc(100vh-66px)]  bg-[url('/images/info-background-small.avif')] xs:bg-[url('/images/info-background.webp')] bg-cover bg-top bg-no-repeat items-end">
					<div className='flex py-0 px-4 flex-col w-full justify-items-center'>
						<div className='flex flex-col w-full ssm:w-[759px] s4xl:w-[895px]'>
							<Fade bottom>
								<div className='flex'>
									<p className='flex mb-2 xxs:mb-6 text-2xl xxs:text-[32px] xsm:text-5xl xxs:text-center text-silverContact font-extralight'>
										Hospital Ashford, comprometidos con tu calidad de vida
									</p>
								</div>
							</Fade>
							<Fade bottom>
								<div className='flex'>
									<p className='text-white font-light xxs:text-lg xxs:text-center'>
										Por 118 años hemos operado de forma continua con los
										principios de nuestros fundadores como norte: Salud
										preventiva, vocación al servicio, innovación y trato con
										calor humano.
									</p>
								</div>
							</Fade>
						</div>
						<div className='flex w-full py-8'></div>
						<div className='hidden h-[121.19px] xxs:flex xxs:flex-row justify-around items-start'>
							<Link href='#cards'>
								<div className='h-[57.34px] self-end cursor-pointer sticky bottom-0'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-[25px] h-[25px] transition ease-in-out hover:scale-150 duration-200'
										viewBox='0 0 24 24'
										fill='#EFF3F8'>
										<path d='M17.71,11.29a1,1,0,0,0-1.42,0L13,14.59V7a1,1,0,0,0-2,0v7.59l-3.29-3.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l5-5A1,1,0,0,0,17.71,11.29Z'></path>
									</svg>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
