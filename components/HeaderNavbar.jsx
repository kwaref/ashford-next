import 'animate.css'
import { Popover } from '@headlessui/react'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion'
import { MenuItem } from './ui/MenuItem'

const menu_items = [
	{
		name: 'Servicios y especialidades',
		items: [
			{
				name: 'Radiología/Centro de imágenes',
				href: '/servicios#radiologia_centro-de-imagenes',
			},
			{
				name: 'Medicina nuclear y centro de cardiología',
				href: '/servicios#medicina_nuclear_centro-de-cardiologia',
			},
			{
				name: 'Laboratorio',
				href: '/servicios#laboratorio',
			},
			{
				name: 'Centro de medicina física y rehabilitación',
				href: '/servicios#centro-de-medicina-fisica_rehabilitacion',
			},
			{
				name: 'Cuidado de heridas',
				href: '/servicios#cuidado-de-heridas',
			},
			{
				name: 'Ashford Prenatal',
				href: '/servicios#centro-prenatal',
			},
			{
				name: 'Centro de la mujer',
				href: '/servicios#centro-de-la-mujer',
			},
			{
				name: 'Centro de vacunación',
				href: '/servicios#centro-de-vacunacion',
			},
			{
				name: 'Farmacia de la comunidad',
				href: '/servicios#farmacia-de-la-comunidad',
			},
			{
				name: 'Obstetricia, ginecología y ginecología oncológica',
				href: '/servicios#obstetricia_ginecologia_ginecologia-oncologica',
			},
			{
				name: 'Unidad de cuidado intensivo neonatal',
				href: '/servicios#unidad-de-cuidado-intensivo-neonatal',
			},
			{
				name: 'Cirugía colorrectal',
				href: '/servicios#cirugia-colorrectal',
			},
			{
				name: 'Ortopedia',
				href: '/servicios#ortopedia',
			},
			{
				name: 'Medicina deportiva',
				href: '/servicios#medicina-deportiva',
			},
			{
				name: 'Otorrinolaringología',
				href: '/servicios#otorrinolaringologia',
			},
			{
				name: 'Endocrinología',
				href: '/servicios#endocrinologia',
			},
			{
				name: 'Cirigia general',
				href: '/servicios#cirugia-general',
			},
			{
				name: 'Cirugia oncológica',
				href: '/servicios#cirugia-oncologica',
			},
			{
				name: 'Pediatria',
				href: '/servicios#pediatria',
			},
			{
				name: 'Urología',
				href: '/servicios#urologia',
			},
		],
	},
	{
		name: 'Sala de emergencia',
		items: [],
		href: '/emergencia',
	},
	{
		name: 'Para paciente',
		items: [
			{
				name: 'Condiciones de salud',
				href: '/condiciones',
			},
			{
				name: 'Directorio médico',
				href: '/directorio',
			},
			{
				name: 'Guía para pacientes',
				href: '/guia',
			},
			{
				name: 'Admisiones y pre-admisiones',
				href: '/admision',
			},
			{
				name: 'Testimonios',
				href: '/testimonios',
			},
		],
	},
	{
		name: 'Sobre nosotros',
		items: [
			{
				name: 'Sobre nosotros',
				href: '/nosotros',
			},
			{
				name: 'Equipo',
				href: '/equipo',
			},
		],
	},
	{
		name: 'Contacto',
		items: [],
		href: '/contacto',
	},
]

const servicios_especialidades = [
	{
		name: 'Radiología/Centro de imágenes',
		href: '/servicios#radiologia_centro-de-imagenes',
	},
	{
		name: 'Medicina nuclear y centro de cardiología',
		href: '/servicios#medicina_nuclear_centro-de-cardiologia',
	},
	{
		name: 'Laboratorio',
		href: '/servicios#laboratorio',
	},
	{
		name: 'Centro de medicina física y rehabilitación',
		href: '/servicios#centro-de-medicina-fisica_rehabilitacion',
	},
	{
		name: 'Cuidado de heridas',
		href: '/servicios#cuidado-de-heridas',
	},
	{
		name: 'Ashford Prenatal',
		href: '/servicios#centro-prenatal',
	},
	{
		name: 'Centro de la mujer',
		href: '/servicios#centro-de-la-mujer',
	},
	{
		name: 'Centro de vacunación',
		href: '/servicios#centro-de-vacunacion',
	},
	{
		name: 'Farmacia de la comunidad',
		href: '/servicios#farmacia-de-la-comunidad',
	},
	{
		name: 'Obstetricia, ginecología y ginecología oncológica',
		href: '/servicios#obstetricia_ginecologia_ginecologia-oncologica',
	},
	{
		name: 'Unidad de cuidado intensivo neonatal',
		href: '/servicios#unidad-de-cuidado-intensivo-neonatal',
	},
	{
		name: 'Cirugía colorrectal',
		href: '/servicios#cirugia-colorrectal',
	},
	{
		name: 'Ortopedia',
		href: '/servicios#ortopedia',
	},
	{
		name: 'Medicina deportiva',
		href: '/servicios#medicina-deportiva',
	},
	{
		name: 'Otorrinolaringología',
		href: '/servicios#otorrinolaringologia',
	},
	{
		name: 'Endocrinología',
		href: '/servicios#endocrinologia',
	},
	{
		name: 'Cirigia general',
		href: '/servicios#cirugia-general',
	},
	{
		name: 'Cirugia oncológica',
		href: '/servicios#cirugia-oncologica',
	},
	{
		name: 'Pediatria',
		href: '/servicios#pediatria',
	},
	{
		name: 'Urología',
		href: '/servicios#urologia',
	},
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const HeaderNavbar = () => {
	const [isNotVisible, setIsNotVisible] = useState(true)

	return (
		<nav
			className='fixed w-full h-[70px] md:h-[72px] lg:h-[66px] py-2 px-0 md:px-16 md:pt-2 md:pb-0 bg-white top-0 z-10'
			// className='relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light'
			id='navbar'>
			<Popover>
				{({ open }) => (
					<>
						<div className='flex w-auto h-auto lg:h-[58px] m-auto bg-white justify-between'>
							<div
								className='w-[120px] h-[50px] md:h-14 lg:h-[50px] my-0 mr-4 ml-0 py-[5px] pr-0 pl-4 bg-white'
								id='logo'>
								<Link href='/'>
									<a className=''>
										<div className='w-[104px] h-10 relative'>
											<Image
												src='/images/logo.svg'
												alt='Ashford'
												layout='fill'
											/>
										</div>
									</a>
								</Link>
							</div>
							<div className='flex' id='menus'>
								<ul className='hidden md:flex justify-between'>
									<li className='flex static group h-auto md:h-16 lg:h-[58px] lg:pt-2 px-2 pb-2 z-10'>
										<a
											href='#'
											className='relative h-auto lg:h-9 p-2 text-[13px] cursor-pointer hover:text-cyan-500'>
											Servicios y especialidades
										</a>
										<div className='absolute hidden group-hover:block w-[100%] left-0 py-6 px-16  mt-[61px] lg:mt-[51px]   shadow-xl bg-silver animate__animated animate__slideInDown animate__faster'>
											<div className='flex m-0 w-full'>
												<div className='flex-col w-auto py-0 pr-[15px] pl-0'>
													<p className='mt-0 mx-0 mb-4 text-[32px]'>
														Servicios y especialidades
													</p>
													<p className='mt-0 mx-0 mb-4 text-[13.5px] text-blackNavlink'>
														En el Hospital Ashford ofrecemos una gran diversidad
														de servicios.
													</p>
												</div>
												<div className='flex w-full m-0 p-0'>
													<div className='flex-col w-1/2 border-l-2'>
														<Link href='/servicios'>
															<a className='w-full py-2 pr-2 pl-8 text-[18px] text-cyan-500'>
																Servicios
															</a>
														</Link>
														<div className='flex w-full m-0 p-0'>
															<div className='w-1/2 m-0 p-0'>
																<ul className='my-0 mr-0 -ml-2 py-0 pr-0 pl-8 w-full'>
																	<li className='p-2 text-[13.5px] w-full'>
																		<Link
																			href='/'
																			className='w-full p-2 text-[13.5px]'>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Radiología/Centro de imágenes
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Medicina nuclear y centro de cardiología
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Laboratorio
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Centro de medicina física y
																				rehabilitación
																			</a>
																		</Link>
																	</li>
																</ul>
															</div>
															<div className='w-1/2 m-0 p-0'>
																<ul className='my-0 mr-0 -ml-2 py-0 pr-0 pl-8'>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Cuidado de heridas
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Ashford Prenatal
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Centro de la mujer
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Centro de vacunación
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Farmacia de la comunidad
																			</a>
																		</Link>
																	</li>
																</ul>
															</div>
														</div>
													</div>
													<div className='flex-col w-1/2 border-l-2'>
														<Link href='/especialidades'>
															<a className='w-full py-2 pr-2 pl-8 text-[18px] text-cyan-500'>
																Especialidades
															</a>
														</Link>
														<div className='flex w-full m-0 p-0'>
															<div className='w-1/2 m-0 p-0'>
																<ul className='my-0 mr-0 -ml-2 py-0 pr-0 pl-8'>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Obstetricia, ginecología y ginecología
																				oncológica
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Unidad de cuidado intensivo neonatal
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Cirugía colorrectal
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Ortopedia
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Medicina deportiva
																			</a>
																		</Link>
																	</li>
																</ul>
															</div>
															<div className='w-1/2 flex-col m-0 p-0'>
																<ul className='my-0 mr-0 -ml-2 py-0 pr-0 pl-8'>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Otorrinolaringología
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Endocrinología
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Cirugía general
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Cirugía oncológica
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Pediatría
																			</a>
																		</Link>
																	</li>
																	<li className='p-2 text-[13.5px]'>
																		<Link href=''>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				Urología
																			</a>
																		</Link>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className='flex static group h-auto md:h-16 lg:h-[58px] lg:pt-2 px-2 pb-2 z-10'>
										<Link href='/emergencia'>
											<a className='relative h-auto lg:h-9 p-2 text-[13px] cursor-pointer hover:text-cyan-500'>
												Sala de emergencia
											</a>
										</Link>
									</li>
									<li className='flex static group h-auto md:h-16 lg:h-[58px] lg:pt-2 px-2 pb-2 z-10'>
										<a
											href='#'
											className='relative h-auto lg:h-9 p-2 text-[13px] cursor-pointer hover:text-cyan-500'>
											Para paciente
										</a>
										<div className='absolute hidden group-hover:block w-[100%] h-[200px] left-0 py-6 px-16  mt-[61px] lg:mt-[51px]  shadow-xl bg-silver animate__animated animate__slideInDown animate__faster'>
											<div className='flex'>
												<div className='w-1/3 py-0 pr-[15px] pl-0'>
													<p className='mx-0 mt-0 mb-4 text-[32px]'>
														Para pacientes
													</p>
													<p className='mx-0 mt-0 mb-4 text-[13.5px] text-blackNavlink'>
														Encuentre guias esenciales para que todo paciente
														este informado y tenga la mejor experiencia posible
														en el Hospital Ashford
													</p>
												</div>
												<div className='w-1/3 border-l-2 '>
													<a
														href=''
														className='py-2 pr-8 pl-8 text-[18px] text-cyan-500'>
														Directorios
													</a>
													<ul className='flex-col my-0 mr-0 -ml-2 py-0 pr-0 pl-8'>
														<li>
															<Link href=''>
																<a className='flex p-2 text-[13.5px] text-blackNavlink hover:text-cyan-500'>
																	Condiciones de salud
																</a>
															</Link>
														</li>
														<li>
															<Link href=''>
																<a className='flex p-2 text-[13.5px] text-blackNavlink hover:text-cyan-500'>
																	Directorio médico
																</a>
															</Link>
														</li>
													</ul>
												</div>
												<div className='w-1/3 border-l-2 '>
													<a
														href=''
														className='py-2 pr-8 pl-8 text-[18px] text-cyan-500'>
														Recursos
													</a>
													<ul className='flex-col my-0 mr-0 -ml-2 py-0 pr-0 pl-8'>
														<li>
															<Link href='/'>
																<a className='flex p-2 text-[13.5px] text-blackNavlink hover:text-cyan-500'>
																	Guía para pacientes
																</a>
															</Link>
														</li>
														<li>
															<Link href='/'>
																<a className='flex p-2 text-[13.5px] text-blackNavlink hover:text-cyan-500'>
																	Admisiones y pre-admisiones
																</a>
															</Link>
														</li>
														<li>
															<Link href='/'>
																<a className='flex p-2 text-[13.5px] text-blackNavlink hover:text-cyan-500'>
																	Testimonios
																</a>
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li className='flex static group h-auto md:h-16 lg:h-[58px] lg:pt-2 px-2 pb-2 z-10'>
										<a
											href='#'
											className='relative h-auto lg:h-9 p-2 text-[13px] cursor-pointer hover:text-cyan-500'>
											Sobre nosotros
										</a>
										<div className='absolute hidden group-hover:block w-[100%] h-[220px] xl:h-[203px] left-0 py-6 px-16  mt-[61px] lg:mt-[51px]  shadow-xl bg-silver animate__animated animate__slideInDown animate__faster'>
											<div className='flex'>
												<div className='w-1/3 h-full py-0 pr-[15px] pl-0'>
													<p className='mx-0 mt-0 mb-4 text-[31px]'>
														Sobre nosotros
													</p>
													<p className='mx-0 mt-0 mb-4 text-[13.5px] text-blackNavlink'>
														El hospital Ashford cuenta con una facultad de
														aproximadamente 250 médicos, 630 empleados, y con
														175 camas para atender paciente en prácticamente
														todas las especialidades.
													</p>
												</div>
												<div className='border-l-2'>
													<a
														href=''
														className='py-2 pr-8 pl-8 text-[18px] text-cyan-500'>
														Directorios
													</a>
													<ul className='flex-col my-0 mr-0 -ml-2 py-0 pr-0 pl-8'>
														<li>
															<Link href=''>
																<a className='flex p-2 text-[13.5px] text-blackNavlink hover:text-cyan-500'>
																	Condiciones de salud
																</a>
															</Link>
														</li>
														<li>
															<Link href=''>
																<a className='flex p-2 text-[13.5px] text-blackNavlink hover:text-cyan-500'>
																	Directorio médico
																</a>
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li className='flex static group h-auto md:h-16 lg:h-[58px] lg:pt-2 px-2 pb-2 z-10'>
										<Link href='/contacto'>
											<a className='relative h-auto lg:h-9 p-2 text-[13px] cursor-pointer hover:text-cyan-500'>
												Contacto
											</a>
										</Link>
									</li>
								</ul>
								<div className='flex w-[111px] h-[54px] bg-white p-0 md:w-13'>
									<button className='w-[49px] h-[54px] my-0 mx-1 py-1 px-3 md:ml-3'>
										<form
											action=''
											className='flex w-[25px] h-[46px] py-2 px-0'>
											<svg
												className='w-[25px] h-[30px] fill-sky-900 md:w-5 md:h-6 transition ease-in-out hover:scale-125 duration-500'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'>
												<path d='M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z'></path>
											</svg>
											<div className='flex w-0 h-6'>
												<input
													type='text'
													className='w-0 h-6'
													placeholder='Buscar'
												/>
												<svg
													className='w-[13px] h-[13px] fill-sky-900'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'>
													<path d='M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'></path>
												</svg>
											</div>
										</form>
									</button>

									<Popover.Button className='w-[54px] h-[54px] py-1 px-3 border-0 outline-none md:hidden'>
										<div className='w-[30px] h-[30px] p-0'>
											{!open ? (
												<svg
													viewBox='0 0 24 24'
													className='w-[30px] h-[30px] fill-transparent'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z'
														fill='#27364B'></path>
												</svg>
											) : (
												<svg
													viewBox='0 0 24 24'
													className='w-[30px] h-[30px] fill-transparent'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z'
														fill='#01426A'></path>
												</svg>
											)}
										</div>
									</Popover.Button>
								</div>
							</div>
						</div>
						<Popover.Panel className='w-screen h-screen pt-4 px-4 pb-20 mt-0 bg-white z-40 overflow-auto md:hidden'>
							<Accordion allowZeroExpanded='true'>
								{menu_items.map(item => {
									return (
										<AccordionItem key={item.name}>
											<AccordionItemHeading>
												<AccordionItemButton>
													{!item.href ? (
														<div className='w-auto h-11 mx-0 px-1 py-[10px] my-1 border-0 rounded-none bg-silver group'>
															<span className='flex justify-between text-sm px-[10px]'>
																<p className='mt-[2px] group-hover:text-greenArrow'>
																	{item.name}
																</p>
																<div>
																	{item.items.length > 0 && (
																		<svg
																			viewBox='0 0 24 24'
																			xmlns='http://www.w3.org/2000/svg'
																			className='w-6 h-6 fill-transparent'>
																			<path
																				d='M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z'
																				fill='#01426A'></path>
																		</svg>
																	)}
																</div>
															</span>
														</div>
													) : (
														<Popover.Button as='a' href={item.href}>
															<div className='w-auto h-11 mx-0 px-1 py-[10px] my-1 border-0 rounded-none bg-silver group'>
																<span className='flex justify-between text-sm px-[10px]'>
																	<p className='mt-[2px] group-hover:text-greenArrow'>
																		{item.name}
																	</p>
																	<div>
																		{item.items.length > 0 && (
																			<svg
																				viewBox='0 0 24 24'
																				xmlns='http://www.w3.org/2000/svg'
																				className='w-6 h-6 fill-transparent'>
																				<path
																					d='M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z'
																					fill='#01426A'></path>
																			</svg>
																		)}
																	</div>
																</span>
															</div>
														</Popover.Button>
													)}
												</AccordionItemButton>
											</AccordionItemHeading>
											<AccordionItemPanel>
												{item.items.map(({ name, href }) => {
													return <MenuItem key={name} text={name} href={href} />
												})}
											</AccordionItemPanel>
										</AccordionItem>
									)
								})}
							</Accordion>
							<div className='flex w-[42px] mt-8 -mr-4 mb-0 ml-0'>
								<div className='w-[42px] h-[42px] rounded-full py-[11px] px-[15px] mt-0 mr-4 mb-0 ml-0 bg-silver cursor-pointer'>
									<a href='https://es-la.facebook.com/ashfordhospitalpr/'>
										<div className='relative w-[11px] h-[20px]'>
											<Image src='/images/face.svg' alt='face' layout='fill' />
										</div>
									</a>
								</div>
								<div className='w-[42px] h-[42px] rounded-full p-[11px] mt-0 mr-4 mb-0 ml-0 bg-silver cursor-pointer'>
									<a href='https://www.linkedin.com/company/ashfordhospital/?originalSubdomain=pr'>
										<div className='relative w-[20px] h-[20px]'>
											<Image src='/images/link.svg' alt='link' layout='fill' />
										</div>
									</a>
								</div>
								<div className='w-[42px] h-[42px] rounded-full py-3  px-[11px] mt-0 mr-4 mb-0 ml-0 bg-silver cursor-pointer'>
									<a href='https://twitter.com/ashfordpr'>
										<div className='relative w-[20px] h-[18px]'>
											<Image
												src='/images/tweet.svg'
												alt='tweet'
												layout='fill'
											/>
										</div>
									</a>
								</div>
								<div className='w-[42px] h-[42px] rounded-full p-[11px] mt-0 mr-4 mb-0 ml-0 bg-silver cursor-pointer'>
									<a href='https://www.instagram.com/ashfordhospitalpr/?hl=es'>
										<div className='relative w-[20px] h-[20px]'>
											<Image
												src='/images/insta.svg'
												alt='insta'
												layout='fill'
											/>
										</div>
									</a>
								</div>
							</div>
						</Popover.Panel>
					</>
				)}
			</Popover>
		</nav>
	)
}

export default HeaderNavbar
