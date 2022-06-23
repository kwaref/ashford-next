import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapBotton, MapTop } from '../components/ui/Map'

const contacto = () => {
	return (
		<div className='flex flex-col bg-silver'>
			<div className='flex flex-col py-10 px-4 md:pt-14 md:px-14 md:pb-10 2xl:pt-28 2xl:px-28 2xl:pb-[72px]'>
				<p className='pt-0 pb-4 px-0 text-[10px] font-semibold text-greenArrow uppercase'>
					contacta
				</p>
				<p className='text-[32px] xsm:text-5xl font-extralight text-blackNavlink'>
					Contacta con Ashford
				</p>
			</div>
			<div className=''>
				<div className='hidden xsm:flex xsm:flex-row xsm:h-[520px] xsm:mb-28 2xl:w-[1440px]'>
					<div className='w-1/2'>
						<div className='px-14 md:px-28 bg-silver'>
							<MapTop />
						</div>
					</div>
					<div className='w-1/2'>
						<div className='flex flex-col py-0 my-4 px-4 md:py-0 md:pl-0 md:pr-14 lg:pr-28'>
							<p className='text-xl text-greenArrow'>
								Información, ubicación y horarios
							</p>
							<div className='flex mt-0 mb-8 mx-0' id='menu'>
								<div className='flex flex-row w-full'>
									<div className='flex flex-col w-full -ml-4'>
										<div className='flex w-full mt-4 mr-0 mb-0 ml-4 p-4 bg-white'>
											<div className='w-5 h-5 mr-[10px] relative'>
												<Image
													src='/images/gps.svg'
													alt='dirección'
													layout='fill'
												/>
											</div>
											<div className='inline-block'>
												<a href=''>
													<div>
														<p className='text-sm font-light'>
															1451 Ave Dr Ashford, San Juan, 00907, Puerto Rico
														</p>
													</div>
												</a>
											</div>
										</div>
										<div className='flex w-full mt-4 mr-0 mb-0 ml-4 p-4 bg-white'>
											<div className='w-5 h-5 mr-[10px] relative'>
												<Image
													src='/images/phone.svg'
													alt='teléfono'
													layout='fill'
												/>
											</div>
											<div className='inline-block'>
												<a href=''>
													<div>
														<p className='text-sm font-light'>
															+1 787-721-2160
														</p>
													</div>
												</a>
											</div>
										</div>
										<div className='flex w-full mt-4 mr-0 mb-0 ml-4 p-4 bg-white'>
											<div className='w-5 h-5 mr-[10px] relative'>
												<Image
													src='/images/phone.svg'
													alt='hotline'
													layout='fill'
												/>
											</div>
											<div className='inline-block'>
												<a href=''>
													<div>
														<p className='text-sm font-light'>
															Compliance Hotline: +1 787-721-2163
														</p>
													</div>
												</a>
											</div>
										</div>
										<div className='flex w-full mt-4 mr-0 mb-0 ml-4 p-4 bg-white'>
											<div className='w-5 h-5 mr-[10px] relative'>
												<Image
													src='/images/mail.svg'
													alt='mail'
													layout='fill'
												/>
											</div>
											<div className='inline-block'>
												<a href=''>
													<div>
														<p className='text-sm font-light'>
															spaciente@ashfordhospital.com
														</p>
													</div>
												</a>
											</div>
										</div>
										<div className='flex w-full mt-4 mr-0 mb-0 ml-4 p-4 bg-white'>
											<div className='w-5 h-5 mr-[10px] relative'>
												<Image
													src='/images/clock.svg'
													alt='horario'
													layout='fill'
												/>
											</div>
											<div className='inline-block'>
												<a href=''>
													<div>
														<p className='text-sm font-light'>
															De lunes a viernes de 9:00am a 5:00pm
														</p>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<p className='text-xl text-greenArrow'>Redes sociales</p>
							<div className='flex mt-4 -mr-4 mb-8 ml-0' id='iconos'>
								<div className='w-[42px] h-[42px] rounded-full py-[11px] px-[15px] mt-0 mr-4 mb-0 ml-0 bg-silverContact cursor-pointer'>
									<a href='https://es-la.facebook.com/ashfordhospitalpr/'>
										<div className='relative w-[11px] h-[20px]'>
											<Image src='/images/face.svg' alt='face' layout='fill' />
										</div>
									</a>
								</div>
								<div className='w-[42px] h-[42px] rounded-full p-[11px] mt-0 mr-4 mb-0 ml-0 bg-silverContact cursor-pointer'>
									<a href='https://www.linkedin.com/company/ashfordhospital/?originalSubdomain=pr'>
										<div className='relative w-[20px] h-[20px]'>
											<Image src='/images/link.svg' alt='link' layout='fill' />
										</div>
									</a>
								</div>
								<div className='w-[42px] h-[42px] rounded-full py-3  px-[11px] mt-0 mr-4 mb-0 ml-0 bg-silverContact cursor-pointer'>
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
								<div className='w-[42px] h-[42px] rounded-full p-[11px] mt-0 mr-4 mb-0 ml-0 bg-silverContact cursor-pointer'>
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
					</div>
				</div>
				<div className='xsm:hidden'>
					<div>
						<div></div>
						<div>
							<div className='flex flex-col py-0 px-4'>
								<p className='text-xl text-greenArrow'>
									Información, ubicación y horarios
								</p>
								<div className='flex mt-0 mb-8 mx-0' id='menu'>
									<div className='flex flex-row w-full'>
										<div className='flex flex-col w-full -ml-4'>
											<div className='flex w-full mt-4 mr-0 mb-0 ml-4 p-4 bg-white'>
												<div className='w-5 h-5 mr-[10px] relative'>
													<Image
														src='/images/gps.svg'
														alt='dirección'
														layout='fill'
													/>
												</div>
												<div className='inline-block'>
													<a href=''>
														<div>
															<p className='text-sm font-light'>
																1451 Ave Dr Ashford, San Juan, 00907, Puerto
																Rico
															</p>
														</div>
													</a>
												</div>
											</div>
											<div className='flex w-full mt-4 mr-0 mb-0 ml-4 p-4 bg-white'>
												<div className='w-5 h-5 mr-[10px] relative'>
													<Image
														src='/images/phone.svg'
														alt='teléfono'
														layout='fill'
													/>
												</div>
												<div className='inline-block'>
													<a href=''>
														<div>
															<p className='text-sm font-light'>
																+1 787-721-2160
															</p>
														</div>
													</a>
												</div>
											</div>
											<div className='flex w-full mt-4 mr-0 mb-0 ml-4 p-4 bg-white'>
												<div className='w-5 h-5 mr-[10px] relative'>
													<Image
														src='/images/phone.svg'
														alt='hotline'
														layout='fill'
													/>
												</div>
												<div className='inline-block'>
													<a href=''>
														<div>
															<p className='text-sm font-light'>
																Compliance Hotline: +1 787-721-2163
															</p>
														</div>
													</a>
												</div>
											</div>
											<div className='flex w-full mt-4 mr-0 mb-0 ml-4 p-4 bg-white'>
												<div className='w-5 h-5 mr-[10px] relative'>
													<Image
														src='/images/mail.svg'
														alt='mail'
														layout='fill'
													/>
												</div>
												<div className='inline-block'>
													<a href=''>
														<div>
															<p className='text-sm font-light'>
																spaciente@ashfordhospital.com
															</p>
														</div>
													</a>
												</div>
											</div>
											<div className='flex w-full mt-4 mr-0 mb-0 ml-4 p-4 bg-white'>
												<div className='w-5 h-5 mr-[10px] relative'>
													<Image
														src='/images/clock.svg'
														alt='horario'
														layout='fill'
													/>
												</div>
												<div className='inline-block'>
													<a href=''>
														<div>
															<p className='text-sm font-light'>
																De lunes a viernes de 9:00am a 5:00pm
															</p>
														</div>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<p className='text-xl text-greenArrow'>Redes sociales</p>
								<div className='flex mt-4 -mr-4 mb-8 ml-0' id='iconos'>
									<div className='w-[42px] h-[42px] rounded-full py-[11px] px-[15px] mt-0 mr-4 mb-0 ml-0 bg-silverContact cursor-pointer'>
										<a href='https://es-la.facebook.com/ashfordhospitalpr/'>
											<div className='relative w-[11px] h-[20px]'>
												<Image
													src='/images/face.svg'
													alt='face'
													layout='fill'
												/>
											</div>
										</a>
									</div>
									<div className='w-[42px] h-[42px] rounded-full p-[11px] mt-0 mr-4 mb-0 ml-0 bg-silverContact cursor-pointer'>
										<a href='https://www.linkedin.com/company/ashfordhospital/?originalSubdomain=pr'>
											<div className='relative w-[20px] h-[20px]'>
												<Image
													src='/images/link.svg'
													alt='link'
													layout='fill'
												/>
											</div>
										</a>
									</div>
									<div className='w-[42px] h-[42px] rounded-full py-3  px-[11px] mt-0 mr-4 mb-0 ml-0 bg-silverContact cursor-pointer'>
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
									<div className='w-[42px] h-[42px] rounded-full p-[11px] mt-0 mr-4 mb-0 ml-0 bg-silverContact cursor-pointer'>
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
						</div>
					</div>
				</div>
			</div>
			<div className='p-0 xs:pb-28 bg-silver xsm:hidden'>
				<MapBotton />
			</div>
		</div>
	)
}

export default contacto
