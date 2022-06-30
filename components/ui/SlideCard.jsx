import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import { SwiperSlide } from 'swiper/react'

export const SlideCard = ({ card }) => {
	const [buttonVisible, setButtonVisible] = useState(false)
	return (
		<SwiperSlide key={card.index}>
			<div
				className={`flex flex-col group py-8 px-4 w-[400px] xsm:w-full ssd:w-[400px] h-[498px] -mt-10 ${card.bg} bg-cover bg-no-repeat bg-center bg-slate-200 bg-blend-multiply brightness-100 rounded-lg justify-end`}
				onMouseEnter={() => setButtonVisible(true)}
				onMouseLeave={() => setButtonVisible(false)}>
				<Fade bottom>
					<div className='group-hover:hidden'>
						<p className='mb-2 text-[40px] xxs:text-[32px] text-silverContact brightness-35 text-left'>
							{card.header}
						</p>
						<p className='text-white xxs:text-sm text-left'>{card.subtitle}</p>
					</div>
				</Fade>
				<Fade bottom when={buttonVisible}>
					<div className='hidden group-hover:block '>
						<button className='flex w-full h-10 bg-greenArrow rounded text-sm text-white justify-center items-center'>
							<span>Leer más</span>
						</button>
					</div>
				</Fade>
			</div>
		</SwiperSlide>
	)
}
