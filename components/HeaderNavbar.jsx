import 'animate.css'
import { Popover } from '@headlessui/react'

import { Logo } from './ui/Logo'
import { LgMenuList } from './ui/LgMenuList'
import { MobileMenu } from './ui/MobileMenu'
import { Sociales } from './ui/Sociales'

const menu_items = [
	{
		name: 'Servicios y especialidades',
		header: 'Servicios y especialidades',
		resume:
			'En el Hospital Ashford ofrecemos una gran diversidad de servicios.',
		cols: [
			{
				header: 'Servicios',
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
				],
			},
			{
				header: 'Especialidades',
				items: [
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
						name: 'Cirugía general',
						href: '/servicios#cirugia-general',
					},
					{
						name: 'Cirugía oncológica',
						href: '/servicios#cirugia-oncologica',
					},
					{
						name: 'Pediatría',
						href: '/servicios#pediatria',
					},
					{
						name: 'Urología',
						href: '/servicios#urologia',
					},
				],
			},
		],
	},
	{
		name: 'Sala de emergencia',
		href: '/emergencia',
	},
	{
		name: 'Para paciente',
		header: 'Para pacientes',
		resume:
			'Encuentre guias esenciales para que todo paciente este informado y tenga la mejor experiencia posible en el Hospital Ashford.',
		cols: [
			{
				header: 'Directorios',
				items: [
					{
						name: 'Condiciones de salud',
						href: '/condiciones',
					},
					{
						name: 'Directorio médico',
						href: '/directorio',
					},
				],
			},
			{
				header: 'Recursos',
				items: [
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
		],
	},
	{
		name: 'Sobre nosotros',
		header: 'Sobre nosotros',
		resume:
			'El hospital Ashford cuenta con una facultad de aproximadamente 250 médicos, 630 empleados, y con 175 camas para atender paciente en prácticamente todas las especialidades.',
		cols: [
			{
				header: 'Sobre nosotros',
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
		],
	},
	{
		name: 'Contacto',
		href: '/contacto',
	},
]

const HeaderNavbar = () => {
	return (
		<nav
			className='fixed w-full h-[70px] md:h-[72px] lg:h-[66px] py-2 px-0 md:px-16 md:pt-2 md:pb-0 bg-white top-0 z-10'
			id='navbar'>
			<Popover>
				{({ open }) => (
					<>
						<div className='flex w-auto h-auto lg:h-[58px] m-auto bg-white justify-between'>
							<Logo />
							<div className='flex' id='menus'>
								<LgMenuList menu_items={menu_items} />

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
							<MobileMenu menu_items={menu_items} />
							<Sociales />
						</Popover.Panel>
					</>
				)}
			</Popover>
		</nav>
	)
}

export default HeaderNavbar
