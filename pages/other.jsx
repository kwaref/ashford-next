import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import story1 from '../public/images/story1.webp'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
import Image from 'next/image'

export default function OtherSwiper() {
	return (
		<div className='px-4'>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 50,
					},
				}}
				modules={[Pagination]}
				className='mySwiper'>
				<SwiperSlide>
					<div className='w-[400px] h-[498px] -mt-10 relative'>
						<Image src={story1} layout='fill' className='rounded-lg' />
					</div>
				</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
			</Swiper>
		</div>
	)
}
