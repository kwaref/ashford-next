import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'animate.css'
import story1 from '../../public/images/story1.webp'
import story2 from '../../public/images/story2.webp'
import story3 from '../../public/images/story3.webp'
import story4 from '../../public/images/story4.webp'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import './styles.css'

// import required modules
import { Pagination, Navigation, Lazy, Controller } from 'swiper'
import { Fade, Slide } from 'react-reveal'
import Link from 'next/link'
import SliderCard from './SliderCard'
import SliderCardTransition from './SliderCardTransition'

const images = [
	{
		src: 'https://picsum.photos/320/240?v1',
	},
	{
		src: 'https://picsum.photos/320/240?v2',
	},
	{
		src: 'https://picsum.photos/320/240?v3',
	},
	{
		src: 'https://picsum.photos/320/240?v4',
	},
]

const cards = [
	{
		index: 1,
		picture: story1,
		bg: "bg-[url('/images/story1.webp')]",
		header: 'Maydelise Columna',
		subtitle: 'Paciente del Centro de la mujer',
		href: '/testimonios/testimonios#0',
	},
	{
		index: 2,
		picture: story2,
		bg: "bg-[url('/images/story2.webp')]",
		header: 'Natalie y Daniel',
		subtitle: 'Pacientes de Ginecología y sala de partos',
		href: '/testimonios/testimonios#1',
	},
	{
		index: 3,
		picture: story3,
		bg: "bg-[url('/images/story3.webp')]",
		header: 'Dra. Rosa Bonilla',
		subtitle: 'Directora NICU Nivel 3',
		href: '/testimonios/testimonios#2',
	},
	{
		index: 4,
		picture: story4,
		bg: "bg-[url('/images/story4.webp')]",
		header: 'Elizabet De Jesús',
		subtitle: 'Sobreviviente de COVID-19',
		href: '/testimonios/testimonios#3',
	},
]

const CardSwiper = () => {
	const [show, setShow] = useState(false)

	// const [windowSize, setWindowSize] = useState({})

	// useEffect(() => {
	// 	const getWindowSize = () => {
	// 		if (typeof window === 'undefined') {
	// 			global.window = {}
	// 		}
	// 		const { innerWidth, innerHeight } = window
	// 		return { innerWidth, innerHeight }
	// 	}

	// 	function handleWindowResize() {
	// 		setWindowSize(getWindowSize())
	// 	}

	// 	window.addEventListener('resize', handleWindowResize)
	// 	window.addEventListener('load', handleWindowResize)

	// 	return () => {
	// 		window.removeEventListener('resize', handleWindowResize)
	// 		window.removeEventListener('load', handleWindowResize)
	// 	}
	// }, [])

	return (
		<div className='bg-split-blue-white items-center'>
			<div className='px-4 xsm:p-10 md:px-28 md:py-0 g4xl:h-[530px] 2xl:mx-[calc((100vw-1440px)/2)]'>
				<Swiper
					slidesPerView={1}
					grabCursor={true}
					spaceBetween={20}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1320: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
					}}
					modules={[Pagination]}
					className='mySwiper'>
					{cards.map(card => {
						return (
							<SwiperSlide
								key={card.index}
								>
								<SliderCard card={card}/>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}

export default CardSwiper
