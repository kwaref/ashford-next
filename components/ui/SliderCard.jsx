import { Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import { useWindowSize } from '../../hooks/useWindowSize'

const SliderCard = ({ card }) => {
	const [show, setShow] = useState(false)
	const { innerWidth } = useWindowSize({})

	return (
		<Link
			href={innerWidth >= 1024 ? '' : `${card.href}`}
			onMouseEnter={() => setShow(true)}
			onMouseLeave={() => setShow(false)}>
			<div
				className={`flex flex-col group py-8 px-4 w-[400px] xsm:w-full ssd:w-[400px] h-[498px] -mt-10 ${card.bg} bg-cover bg-no-repeat bg-center bg-slate-200 bg-blend-multiply brightness-100 rounded-lg justify-end`}>
				<Fade bottom when={show}>
					<div
						className={`lg:group-hover:hidden ${
							!show
								? 'animate__animated animate__fadeInUp'
								: 'animate__animated animate__fadeOutDown'
						}`}>
						<p className='mb-2 text-[40px] xxs:text-[32px] text-silverContact brightness-35 text-left'>
							{card.header}
						</p>
						<p className='text-white xxs:text-sm text-left'>{card.subtitle}</p>
					</div>
				</Fade>
				<Fade bottom>
					{/* <Transition
						show={!show}
						enter='transition-opacity duration-150'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='transition-opacity duration-150'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'> */}

					<div className='hidden lg:group-hover:block'>
						<Link href={card.href}>
							<button
								className={`flex w-full h-10 bg-greenArrow rounded text-sm text-white justify-center items-center `}>
								<span>Leer más</span>
							</button>
						</Link>
					</div>
					{/* </Transition> */}
				</Fade>
			</div>
		</Link>
	)
}

export default SliderCard
