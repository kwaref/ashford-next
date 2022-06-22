import Image from 'next/image'
import React from 'react'
import eme3 from '../public/images/eme3.webp'

const emergencia = () => {
	return (
		<div className='flex flex-col w-screen bg-silver items-center'>
			<div className='flex flex-col w-screen 2xl:w-[1440px] py-10 px-4 xs:p-14 lg:p-28'>
				<div className='flex flex-col w-full'>
					<p className='w-full mb-4 text-[10px] font-semibold text-greenArrow uppercase'>
						sala de emergencia
					</p>
					<p className='w-full mb-4 text-[32px] xsm:text-5xl font-extralight text-blackNavlink'>
						Nuestra sala de emergencia está abierta 24 horas al día, los 7 días
						de la semana
					</p>
					<p className='w-full mb-8 text-lg text-greenArrow'>
						Contamos con profesionales especializados en medicina de familia,
						medicina de emergencia, medicina interna, pediatría, enfermería y
						administración
					</p>
					<div className='w-full'>
						<div className='w-full'>
							<div className='w-full'></div>
						</div>
					</div>
				</div>
				<p className='w-full mb-4 text-lg'>
					El Ashford es el hospital de emergencia designado para el Aeropuerto
					Internacional Luis Muñoz Marín, Puertos de Cruceros de San Juan,
					Centro de Convenciones y hoteles en el área metropolitana de San Juan.
				</p>
				<div>
					<p className='w-full mt-8 text-lg text-greenArrow'>
						Información, ubicación y horarios:
					</p>
					<div className='w-full mt-4'>
						<div className='flex flex-col msm:flex-row w-auto  -mt-4 -ml-4 items-center xs:items-start'>
							<div className='flex h-[52px] mt-4 ml-4 p-4 bg-white xs:float-left'>
								<div className='w-5 h-5 mr-[10px] relative'>
									<Image src='/images/phone.svg' alt='teléfono' layout='fill' />
								</div>
								<div className='inline-block'>
									<a href=''>
										<div>
											<p>(787) 721-2160, ext. 1095, 1096, 1097 y 1098</p>
										</div>
									</a>
								</div>
							</div>
							<div className='flex h-[52px] mt-4 ml-4 p-4 bg-white'>
								<div className='w-5 h-5 mr-[10px] relative'>
									<Image src='/images/clock.svg' alt='horarios' layout='fill' />
								</div>
								<div className='inline-block'>
									<div className='inline-block'>
										<p>24 horas al día, los siete días de la semana</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full xsm:relative xsm:bg-[url('/images/emer2.webp')] bg-cover bg-no-repeat">
				<div className='xsm:hidden'>
					<div
						id='image_wrapper'
						className='w-full h-[340px] emexs:h-[calc(62.5vw)] relative'>
						<Image
							src='/images/eme2.webp'
							alt='eme2'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</div>
				<div id='adultos' className='xsm:py-0 xsm:pr-24 xsm:pl-4'>
					<div className='flex flex-col xsd:w-[747px] xsd:float-right rounded-md mt-10 px-4 pb-10 xsm:bg-white xsm:mt-28 xsm:mb-8 lg:my-24 lg:mx-0 xsm:mx-0 xsm:p-24 lg:h-[840px]'>
						<div className='flex flex-col'>
							<p className='w-full mb-4 text-[10px] font-semibold text-greenArrow uppercase'>
								sala de emergencia
							</p>
							<p className='w-full mb-2 xsm:mb-[17px] text-[32px] xsm:text-5xl font-extralight leading-loose text-blackNavlink'>
								Sala de emergencias de adultos
							</p>
							<p className='w-full mb-8 text-lg text-greenArrow'>
								En nuestra sala de emergencia te ofrecemos un diagnóstico
								preciso con calor humano
							</p>
							<div className='mb-8 xsm:mb-11'>
								<p className='w-full text-base text-blackNavlink'>
									En la Sala de Emergencias del Hospital Ashford brindamos
									servicios de emergencia con cómodas salas de espera, cirugía,
									rayos x, cuidado intensivo, admisión intermedia, registro y
									primeros auxilios.
								</p>
							</div>
							<div>
								<div>
									<div className='flex flex-row -mx-[10px]'>
										<div className='flex flex-col px-3'>
											<ul>
												<li className='flex w-full mb-3'>
													<div className='w-3 h-3 mt-[6px] relative'>
														<Image
															src='/images/right_arrow.svg'
															alt='arrow'
															layout='fill'
														/>
													</div>
													<span className='ml-2 text-base text-blackNavlink'>
														Servicio de emergenciólogos
													</span>
												</li>
												<li className='flex w-full mb-3'>
													<div className='w-3 h-3 mt-[6px] relative'>
														<Image
															src='/images/right_arrow.svg'
															alt='arrow'
															layout='fill'
														/>
													</div>
													<span className='ml-2 text-base text-blackNavlink'>
														Agilidad en prestación de servicios
													</span>
												</li>
												<li className='flex w-full mb-3'>
													<div className='w-3 h-3 mt-[6px] relative'>
														<Image
															src='/images/right_arrow.svg'
															alt='arrow'
															layout='fill'
														/>
													</div>
													<span className='ml-2 text-base text-blackNavlink'>
														Unidades especializadas en dolor
													</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id='pediatrico'>
				<div>
					<div></div>
					<div></div>
				</div>
				<div>
					<div className='flex flex-row'>
						<div className='flex flex-col xsm:flex-row'>
							<div className='py-10 px-4 xsm:w-1/2 xsm:h-[670px] xsd:h-[646px] xmd:h-[588px] lg:h-[758px] xxl:h-[700px] xxxl:h-[676px] ivxl:h-[652px] 2xl:h-[628px] 2xl:w-[720px] 2xl:float-right xsm:py-14 lg:py-28 xsm:pl-14 lg:pl-28 xsm:pr-0 lg:pr-0'>
								<div className=''>
									<p className='w-full mb-4 text-[10px] font-semibold text-greenArrow uppercase'>
										sala de emergencia
									</p>
									<p className='w-full mb-2 text-[32px] xsm:text-5xl font-extralight text-blackNavlink'>
										Sala de emergencias pediátrica
									</p>
									<div className='mb-8'>
										<div>
											<p className='w-full text-base text-blackNavlink'>
												El Ashford fue el primer hospital en Puerto Rico que
												tiene sala de emergencia para niños disponible las 24
												horas del día con el mejor equipo de pediatría y
												enfermería y el apoyo humano que necesitan los padres en
												momentos inesperados.
											</p>
										</div>
									</div>
									<div>
										<div>
											<div className='flex flex-row -mx-[10px]'>
												<div className='flex flex-col px-3'>
													<ul>
														<li className='flex w-full mb-3'>
															<div className='w-3 h-3 mt-[6px] relative'>
																<Image
																	src='/images/right_arrow.svg'
																	alt='arrow'
																	layout='fill'
																/>
															</div>
															<span className='ml-2 text-base text-blackNavlink'>
																6 camas de observación y tratamiento para
																cualquier tipo de enfermedad aguda
															</span>
														</li>
														<li className='flex w-full mb-3'>
															<div className='w-3 h-3 mt-[6px] relative'>
																<Image
																	src='/images/right_arrow.svg'
																	alt='arrow'
																	layout='fill'
																/>
															</div>
															<span className='ml-2 text-base text-blackNavlink'>
																Pediatras, consultores pediátricos y
																sub-especialistas con vasta experiencia
															</span>
														</li>
														<li className='flex w-full mb-3'>
															<div className='w-3 h-3 mt-[6px] relative'>
																<Image
																	src='/images/right_arrow.svg'
																	alt='arrow'
																	layout='fill'
																/>
															</div>
															<span className='ml-2 text-base text-blackNavlink'>
																Enfermeras auxiliares y graduadas
															</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='flex flex-col xsm:w-1/2 xsm:h-[670px] xsd:h-[646px] xmd:h-[588px] lg:h-[758px] xxl:h-[700px] xxxl:h-[676px] ivxl:h-[652px] 2xl:h-[628px] 2xl:w-[720px] xsm:pl-14 lg:pl-28'>
								<div className='relative w-full h-[340px] xsm:h-[670px] xsd:h-[646px] xmd:h-[588px] lg:h-[758px] xxl:h-[700px] xxxl:h-[676px] ivxl:h-[652px] 2xl:h-[628px] 2xl:w-[720px]'>
									<Image
										src={eme3}
										alt='eme3'
										layout='fill'
										objectFit='cover'
										placeholder='blur'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default emergencia
