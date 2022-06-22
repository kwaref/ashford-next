// import Link from 'next/link'
// import { useState } from 'react'

// const NavLink = ({ to, children }) => {
// 	return (
// 		<Link href={to}>
// 			<a className={`mx-4`}>{children}</a>
// 		</Link>
// 	)
// }

// const MobileNav = ({ open, setOpen }) => {
// 	return (
// 		<div
// 			className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
// 				open ? '-translate-x-0' : '-translate-x-full'
// 			} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
// 			<div className='flex items-center justify-center filter drop-shadow-md bg-white h-20'>
// 				{' '}
// 				{/*logo container*/}
// 				<Link href='/'>
// 					<a className='text-xl font-semibold'>LOGO</a>
// 				</Link>
// 			</div>
// 			<div className='flex flex-col ml-4'>
// 				<a
// 					className='text-xl font-medium my-4'
// 					href='/about'
// 					onClick={() =>
// 						setTimeout(() => {
// 							setOpen(!open)
// 						}, 100)
// 					}>
// 					About
// 				</a>
// 				<a
// 					className='text-xl font-normal my-4'
// 					href='/contact'
// 					onClick={() =>
// 						setTimeout(() => {
// 							setOpen(!open)
// 						}, 100)
// 					}>
// 					Contact
// 				</a>
// 			</div>
// 		</div>
// 	)
// }

// const Navbar = () => {
// 	const [open, setOpen] = useState(false)
// 	return (
// 		<nav className='flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center'>
// 			<MobileNav open={open} setOpen={setOpen} />
// 			<div className='w-3/12 flex items-center'>
// 				<Link href='/'>
// 					<a className='text-2xl font-semibold'>LOGO</a>
// 				</Link>
// 			</div>
// 			<div className='w-9/12 flex justify-end items-center'>
// 				<div
// 					className='z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden'
// 					onClick={() => {
// 						setOpen(!open)
// 					}}>
// 					{/* hamburger button */}
// 					<span
// 						className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
// 							open ? 'rotate-45 translate-y-3.5' : ''
// 						}`}
// 					/>
// 					<span
// 						className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
// 							open ? 'w-0' : 'w-full'
// 						}`}
// 					/>
// 					<span
// 						className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
// 							open ? '-rotate-45 -translate-y-3.5' : ''
// 						}`}
// 					/>
// 				</div>

// 				<div className='hidden md:flex'>
// 					<NavLink to='/contact'>CONTACT</NavLink>
// 					<NavLink to='/about'>ABOUT</NavLink>
// 				</div>
// 			</div>
// 		</nav>
// 	)
// }

import React from 'react'
// import { Transition } from '@headlessui/react'
/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import { MobileMenuItem } from './ui/MobileMenuItem'
import Image from 'next/image'
import Link from 'next/link'
import DropDown from './ui/DropDown'
import DropDownMenu from './ui/PopOver'

const navigation = [
	{ name: 'Servicios y especialidades', href: '/', current: true },
	{ name: 'Sala de emergencia', href: '/emergencia', current: false },
	{ name: 'Para paciente', href: '/', current: false },
	{ name: 'Sobre nosotros', href: '/', current: false },
	{ name: 'Contacto', href: '/contacto', current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
	return (
		<Disclosure as='nav' className='top-0 sticky bg-white h-[70px] z-50'>
			{({ open }) => (
				<>
					<div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex items-center justify-between h-16'>
							<div className='flex'>
								<div className='flex-shrink-0 bg-white' id='brand'>
									<Link href='/'>
										<a>
											<div className='w-32 h-12 relative'>
												<Image
													src='/images/logo.svg'
													alt='Ashford'
													layout='fill'
												/>
											</div>
										</a>
									</Link>
								</div>
							</div>
							<div className='flex content-end' id='menu'>
								<div className='hidden md:block'>
									<div className='ml-10 flex items-baseline space-x-4'>
										{navigation.map(item => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? 'bg-white-700 text-cyan-400'
														: 'text-gray-300 hover:bg-white-700 hover:text-cyan-400',
													'px-3 py-2 rounded-md text-sm font-small',
												)}
												aria-current={item.current ? 'page' : undefined}>
												{item.name}
											</a>
										))}
                    <DropDownMenu />
									</div>
								</div>

								<div className='hidden md:block'>
									<div className='ml-4 flex items-center md:ml-6'>
										<button
											type='button'
											className='p-1 rounded-full text-black-rgba '>
											<span className='sr-only'>Buscar</span>
											<SearchIcon className='h-6 w-6' aria-hidden='true' />
										</button>
									</div>
								</div>
							</div>
							<div className='-mr-2 flex md:hidden'>
								{/* Mobile menu button */}
								<button
									type='button'
									className='p-1 rounded-full text-black-rgba'>
									<span className='sr-only'>Buscar</span>
									<SearchIcon className='h-7 w-7' aria-hidden='true' />
								</button>
								<Disclosure.Button className='bg-white-800 inline-flex items-center justify-center p-2 rounded-md text-black-rgba focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-800 focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-7 w-7' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-7 w-7' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white min-h-full'>
							{navigation.map(item => (
								<MobileMenuItem
									key={item.name}
									label={item.name}
									description={'lorem ipsum'}
								/>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export default Navbar
