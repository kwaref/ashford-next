import Image from 'next/image'
import React from 'react'
import img1 from '/public/images/1.webp'
import img2 from '/public/images/2.webp'
import img3 from '/public/images/3.webp'
import img4 from '/public/images/4.webp'
import img5 from '/public/images/5.webp'

const reveals = [
	{
		year: 1904,
		header: 'Centro de registro',
		image: img1,
		alt: 'img1',
		description:
			'La primera sede del Hospital Presbiteriano fue inaugurada en 1904. Inicialmente era un dispensario, fundado por la Doctora Grace Williams Atkins, y luego se convirtió en hospital. En ese mismo año también comienza la escuela de enfermería en los predios del hospital.',
	},
	{
		year: 1917,
		header: 'Centro de registro',
		image: img5,
		alt: 'img5',
		description:
			'El edificio del Hospital Presbiteriano fue inaugurado en 1917. La edificación inicial consistía de tres edificios de madera, en el corazón de Condado en el mismo lugar que el hospital ocupa hoy.',
	},
	{
		year: 1946,
		header: 'Edificación inicial',
		image: img2,
		alt: 'img2',
		description:
			'La Junta Fundadora del Hospital traspasó el manejo de la institución a una Junta de Síndicos residentes en Puerto Rico y se le cambió el nombre al Ashford Presbyterian Community Hospital.',
	},
	{
		year: 1958,
		header: 'Primer hospital',
		image: img3,
		alt: 'img3',
		description:
			'Primer hospital en Puerto Rico acreditado por The Joint Commission que se ha mantenido vigente por los pasados 63 años.',
	},
	{
		year: 1963,
		header: 'Ashford Medical Tower',
		image: img4,
		alt: 'img4',
		description:
			'Primer hospital en contar con una torre de oficinas médicas (Ashford Medical Center).',
	},
]

const nosotros = () => {
	return (
		<main className='flex flex-col'>
			<div>
				<div
					id='sobre'
					className='flex flex-col pt-10 pb-16 px-4 md:p-28 bg-silver'>
					<div className='text-[10px] text-greenArrow font-semibold uppercase'>
						sobre nosotros
					</div>
					<div className='mt-4 text-[32px] xsm:text-5xl font-extralight'>
						El Hospital Ashford: 118 años ofreciendo servicios médicos de
						excelencia con empatía, compasión y calor humano.
					</div>
					<p className='mt-8 text-lg text-greenArrow'>
						Con un compromiso inquebrantable por la salud de la comunidad
					</p>
					<p className='mt-4 mb-16 xsm:mb-[120px] text-blackNavlink font-light text-base'>
						El Hospital Ashford es una institución sin fines de lucro, fundada
						en 1904 con la convicción de servir. Desde el comienzo el Hospital
						Ashford se posicionó a la vanguardia de la salud ofreciendo
						servicios y una experiencia de paciente llena de humanidad. No hay
						duda que la trayectoria del Hospital Ashford ha marcado la historia
						de la salud en Puerto Rico y de miles de vidas que han recibido
						servicio en el Hospital. Hoy estamos orgullosos de los logros de
						nuestra Facultad Médica, la calidad de nuestros servicios y
						especialidades y del equipo de trabajo que cada día se esmera por
						que cada paciente tenga una experiencia de primera. Continuamos
						ofreciendo un enfoque de prevención, con terapias innovadoras,
						diagnósticos precisos y tratamientos personalizados que resultan en
						calidad de vida para todos nuestros pacientes.
					</p>
					<div>
						{reveals.map(({ year, header, image, alt, description }, index) => {
							return (
								<div
									key={year}
									className='mb-8 pb-8 xsm:mb-16 xsm:pb-16 border-b-2'>
									<div
										className={`flex flex-col xsm:flex-row ${
											index % 2 == 0 ? '' : 'xsm:flex-row-reverse'
										}`}>
										<div className='flex flex-col xsm:w-[283.72px]'>
											<div
												className={`flex flex-row w-full ${
													index % 2 == 0 ? '' : 'xsm:flex-row-reverse'
												}`}>
												<p className='text-5xl font-bold'>{year}</p>
												<div className='w-[88px] h-[2px] mx-8 text-4xl font-light'>
													_____
												</div>
											</div>
											<p
												className={`text-base text-greenArrow ${
													index % 2 == 0 ? '' : 'xsm:text-right'
												}`}>
												{header}
											</p>
										</div>
										<div
											className={`flex flex-col xsm:w-[calc(100%-283.72px)] ${
												index > 0 ? 'xsm:flex-row' : ''
											} ${
												index % 2 == 0 && index > 0
													? 'xsm:flex-row-reverse'
													: ''
											}`}>
											<div
												className={`w-full ${
													index > 0 ? 'xsm:w-1/2' : ''
												} flex mt-8`}>
												<div
													className={`w-full rounded h-[calc(49.45vw)] xsm:h-[240px] ${
														index % 2 == 0 ? '' : 'xsm:h-[313px]'
													} ${index == 4 ? 'xsm:h-[278px]' : ''} relative`}>
													<Image
														src={image}
														alt={alt}
														layout='fill'
														objectFit='cover'
														className='rounded'
													/>
												</div>
											</div>
											<div
												className={`${
													index > 0 ? 'xsm:w-1/2' : ''
												} pt-8 text-base text-blackNavlink font-light ${
													index > 0 && index % 2 != 0 ? 'xsm:pl-8' : ''
												}
													${index > 0 && index % 2 == 0 ? 'xsm:pr-8' : ''}`}>
												<p>{description}</p>
											</div>
										</div>
									</div>
								</div>
							)
						})}
						<p className='text-lg text-greenArrow'>
							A través de su historia, se ha distinguido por la innovación y por
							ser el primero en implementar tratamientos y tecnologías para
							beneficiar a los pacientes. En el 2020 fue el primer Hospital en
							recibir y tratar un paciente de COVID y el primero en administrar
							la vacuna de COVID en Puerto Rico.
						</p>
					</div>
				</div>
			</div>

			<div id='nuestra' className='flex flex-col py-8 px-4 md:p-28 bg-white'>
				<div>
					<p className='text-[10px] text-greenArrow mb-4 font-semibold'>
						Nuestra visión
					</p>
					<p className='mb-4 text-2xl xsm:text-[32px] md:text-3xl text-blackNavlink font-light'>
						{'"'}Ser la primera opción ofreciendo servicios médico-hospitalarios
						de excelencia. Deseamos convertirnos en el hospital más querido por
						su humanidad y compromiso con pacientes{'"'}
					</p>
				</div>
				<div className='mt-8 md:mt-16 -mx-4 md:flex md:flex-row'>
					<div className='py-0 px-4 md:px-10'>
						<p className='mb-4 md:-ml-5 text-xl text-greenArrow'>
							Mujeres líderes
						</p>
						<p className='mb-4 md:-ml-5 text-base text-blackNavlink font-light'>
							El concepto de mujeres líderes es una idea centenaria para el
							Hospital Ashford. En 1901 la Dra. Grace Williams Atkins comienza
							los planes del Hospital Ashford reconociendo la precaria situación
							de la salud en la isla. La visión de la Dra. Atkins y su equipo de
							trabajo tuvo un impacto profundo en el Hospital, en el desarrollo
							de la comunidad del Condado y en mejorar la salud del pueblo.
							Además del Hospital, se logra fundar una escuela de enfermería
							para desarrollar talento. El Hospital Ashford ha continuado
							promoviendo el liderazgo de la mujer y la educación de salud a
							través de su historia. 118 años después nos honra tener un equipo
							gerencial dirigido por la Lcda. Itza Soto, y tener una alianza con
							el Ponce School of Medicine para educar médicos y otros
							profesionales en salud.
						</p>
						<p className='mb-4 md:-ml-5 text-base text-blackNavlink font-light'>
							En el Hospital Ashford seguimos operando con los valores y
							principios establecidos desde 1904; servicio a la comunidad, el
							paciente primero, innovación y servicios de excelencia. En el
							Hospital Ashford estamos siempre inspirados, con una visión clara
							de impactar positivamente la salud de nuestras comunidades, con
							una Facultad médica de primera, ofreciendo una experiencia
							profundamente humana.
						</p>
					</div>
					<div className='py-0 px-4 md:px-10'>
						<p className='mb-4 md:-ml-5 md:-mr-5 text-xl text-greenArrow'>
							Dr. Bailey K. Ashford
						</p>
						<p className='mb-4 md:-ml-5 md:-mr-5 text-base text-blackNavlink font-light'>
							Un pionero en la salud en Puerto Rico, llegó a nuestra isla en
							1898 como médico militar en la ocupación norteamericana. El Dr.
							Ashford investigó, descubrió y desarrolló el tratamiento de la
							uncinariasis, que en el 1900 era la principal causa de muerte en
							Puerto Rico. Gracias a su intervención, los médicos
							puertorriqueños ganaron reconocimiento profesional y científico.
							En 1911 el Dr. Ashford propone la creación de una Escuela de
							Medicina Tropical, la cual abrió en 1926. El Dr. Ashford fungio
							como profesor de la escuela y continuó aportando con sus
							investigaciones sobre anemia. Por su gran contribución y
							dedicación a Puerto Rico y a la salud del pueblo, nuestro Hospital
							se honra con su nombre.
						</p>
					</div>
				</div>
			</div>
		</main>
	)
}

export default nosotros
