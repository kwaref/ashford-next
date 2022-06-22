import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className='w-full bg-green-500' id='footer'>
			<div className='flex flex-col bg-navyFooter'>
				<div className='flex flex-col 2xl:w-[1440px] 2xl:mx-auto lg:flex-row lg:justify-between px-4 pt-10 pb-0 xs:pt-16 xs:px-14 md:pt-16 md:px-28 md:mb-0'>
					{/* <div className='flex-col'> */}
					<div className='flex mt-0 mb-8 mx-0 lg:my-0 lg:mr-8 lg:ml-0'>
						<div className='flex-col w-1/2 xs:my-0 xs:mr-8'>
							<div className='relative w-[147px] h-14'>
								<Image
									alt='Ashford'
									layout='fill'
									src='/images/logo_footer.svg'
								/>
							</div>
							<p className='mt-10 mx-0 mb-0 w-[216px] h-[22px] text-lg text-white'>
								Ashford Hospital
							</p>
							<p className='flex-col w-[216px] h-[34px] text-[13.5px] text-white'>
								<span className='flex w-[216px] h-[17px]'>
									1451 Ave Dr Ashford,
								</span>
								<span className='flex w-[216px] h-[17px]'>
									00907, San Juan, Puerto Rico
								</span>
							</p>
							<div className='flex-col mt-14 mx-0 mb-0 w-[216px] h-[82px]'>
								<div className='flex h-[22px]'>
									<Link href='/contacto'>
										<a>
											<div className='flex group'>
												<label className='text-greenArrow text-lg mr-3 cursor-pointer'>
													Contacto
												</label>
												<div className='mt-2 w-3 h-3 relative group-hover:ml-2'>
													<Image
														src='/images/right_arrow.svg'
														alt='right'
														layout='fill'
													/>
												</div>
											</div>
										</a>
									</Link>
								</div>
								<div className='flex h-[22px] my-2'>
									<Link href='/contacto'>
										<a>
											<div className='flex group'>
												<label className='text-greenArrow text-lg mr-3 cursor-pointer'>
													Sobre nosotros
												</label>
												<div className='mt-2 w-3 h-3 relative group-hover:ml-2'>
													<Image
														src='/images/right_arrow.svg'
														alt='right'
														layout='fill'
													/>
												</div>
											</div>
										</a>
									</Link>
								</div>
								<div className='flex h-[22px]'>
									<Link href='/contacto'>
										<a>
											<div className='flex group'>
												<label className='text-greenArrow text-lg mr-3  cursor-pointer'>
													Equipo
												</label>
												<div className='mt-2 w-3 h-3 relative group-hover:ml-2'>
													<Image
														src='/images/right_arrow.svg'
														alt='right'
														layout='fill'
													/>
												</div>
											</div>
										</a>
									</Link>
								</div>
							</div>
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
						</div>
						<div className='hidden w-1/2 border-l-[1px] border-silverMedia border-opacity-10 py-0 px-8 xs:flex xs:flex-col lg:hidden'>
							<p className='mt-0 mb-4 mx-0 text-lg text-greenArrow'>
								Para pacientes
							</p>

							<ul>
								<li className='h-6'>
									<div>
										<a href='#'>
											<label className='h-[22px] text-white text-[13.5px] hover:text-greenArrow cursor-pointer'>
												Condiciones
											</label>
										</a>
									</div>
								</li>
								<li className='mt-2 mb-0 mx-0 h-6'>
									<a href=''>
										<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
											Directorio médico
										</label>
									</a>
								</li>
								<li className='mt-2 mb-0 mx-0 h-6'>
									<a href=''>
										<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
											Guía para pacientes
										</label>
									</a>
								</li>
								<li className='mt-2 mb-0 mx-0 h-6'>
									<a href=''>
										<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
											Admisiones y pre-admisiones
										</label>
									</a>
								</li>
								<li className='mt-2 mb-0 mx-0 h-6'>
									<a href=''>
										<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
											Testimonios
										</label>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='my-8 mx-0'>
						<div className='flex flex-col xs:hidden'>
							<p className='mt-0 mb-4 mx-0 text-lg text-greenArrow'>
								Servicios y especialidades
							</p>
							<div className=''>
								<ul>
									<li className='h-6'>
										<div>
											<a href='#'>
												<label className='h-[22px] text-white text-[13.5px] hover:text-greenArrow cursor-pointer'>
													Radiología/Centro de imágenes
												</label>
											</a>
										</div>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Medicina nuclear y centro de cardiología
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Laboratorio
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Centro de medicina física y rehabilitación
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Cuidado de heridas
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Ashford Prenatal
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Centro de la mujer
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Centro de vacunación
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Farmacia de la comunidad
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Obstetricia, ginecología y ginecología oncológica
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Unidad de cuidado intensivo neonatal
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Cirugía colorrectal
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Ortopedia
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Medicina deportiva
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Otorrinolaringología
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Endocrinología
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Cirugía general
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Cirugía oncológica
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Pediatría
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Urología
											</label>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='hidden xs:flex xs:flex-col md:pl-8 lg:border-l-[1px] border-silverMedia border-opacity-10'>
							<p className='mt-0 mb-4 mx-0 text-lg text-greenArrow'>
								Servicios y especialidades
							</p>
							<div className='flex justify-between'>
								<ul className='w-1/2'>
									<li className='h-6'>
										<div>
											<a href='#'>
												<label className='flex-grow h-[22px] text-white text-[13.5px] hover:text-greenArrow cursor-pointer'>
													Radiología/Centro de imágenes
												</label>
											</a>
										</div>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px]  hover:text-greenArrow cursor-pointer'>
												Medicina nuclear y centro de cardiología
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Laboratorio
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Centro de medicina física y rehabilitación
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Cuidado de heridas
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Ashford Prenatal
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Centro de la mujer
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Centro de vacunación
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Farmacia de la comunidad
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Obstetricia, ginecología y ginecología oncológica
											</label>
										</a>
									</li>
								</ul>
								<ul className='w-1/2 my-0 mr-0 ml-8'>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href='' className=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Unidad de cuidado intensivo neonatal
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Cirugía colorrectal
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Ortopedia
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Medicina deportiva
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Otorrinolaringología
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Endocrinología
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Cirugía general
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Cirugía oncológica
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Pediatría
											</label>
										</a>
									</li>
									<li className='mt-2 mb-0 mx-0 h-6'>
										<a href=''>
											<label className='flex text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
												Urología
											</label>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='my-8 mx-0my-8 mx-0 xs:hidden lg:flex lg:flex-col lg:border-l-[1px] border-silverMedia border-opacity-10 lg:pl-8 lg:w1/4'>
						<p className='mt-0 mb-4 mx-0 text-lg text-greenArrow'>
							Para pacientes
						</p>
						<div className=''>
							<ul>
								<li className='h-6'>
									<div>
										<a href='#'>
											<label className='h-[22px] text-white text-[13.5px] hover:text-greenArrow cursor-pointer'>
												Condiciones
											</label>
										</a>
									</div>
								</li>
								<li className='mt-2 mb-0 mx-0 h-6'>
									<a href=''>
										<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
											Directorio médico
										</label>
									</a>
								</li>
								<li className='mt-2 mb-0 mx-0 h-6'>
									<a href=''>
										<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
											Guía para pacientes
										</label>
									</a>
								</li>
								<li className='mt-2 mb-0 mx-0 h-6'>
									<a href=''>
										<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
											Admisiones y pre-admisiones
										</label>
									</a>
								</li>
								<li className='mt-2 mb-0 mx-0 h-6'>
									<a href=''>
										<label className='text-white text-[13.5px] h-[17px] hover:text-greenArrow cursor-pointer'>
											Testimonios
										</label>
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* </div> */}
				</div>
				<div className='flex flex-col-reverse 2xl:w-[1440px] 2xl:mx-auto sm:flex-row sm:h-[112px] sd:h-[88px] px-4 py-6 xs:pt-10 xs:pb-6 xs:px-14 md:pt-10 md:pb-6 md:px-14 2xl:pt-14 2xl:pb-6 2xl:px-28 2xl:h-[104px] bg-navyFooter justify-between'>
					<p className='h-[15px] sm:h-12 sd:h-6 mt-6 sm:mt-0 mb-0 mx-0 text-silverMedia text-[12px]'>
						Copyright © 2022. Ashford Hospital
					</p>
					<div className='flex flex-col  sm:flex-row h-[70px] sm:h-12 sd:h-6 sd:w-2/3 justify-between'>
						<a className='mt-0 mx-0 mb-2 sm:h-[30px] sd:h-[15px] text-[12px] text-white underline md:mr-8 md:mb-0 md:mt-1'>
							Lista comprensiva de cargos del Hospital Ashford
						</a>
						<p className='my-0 mr-8 ml-0 sd:mr-0 sm:h-[30px] sd:h-[15px]'>
							<a className='mt-0 mx-0 mb-2 text-[12px] text-white underline sm:h-[30px] sd:mb-0'>
								Política de privacidad
							</a>
						</p>
						<p>
							<a className='mt-0 mx-0 mb-2 text-[12px] text-white underline sd:h-[15px]'>
								Política de conflicto de intereses
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
