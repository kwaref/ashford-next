import { Hero } from '../components/ui/Hero'
import Marquee from '../components/ui/Marquee'
import esteto from '../public/images/esteto.svg'
import cita from '../public/images/cita.svg'
import adn from '../public/images/adn.svg'
import person from '../public/images/person.svg'
import { CardList } from '../components/ui/CardList'
import 'animate.css'
import { Interest } from '../components/ui/Interest'
import CardSwiper from '../components/ui/Swiper'
import Link from 'next/link'
import { Especialidades } from '../components/ui/Especialidades'
import { Servicios } from '../components/ui/Servicios'

const message = 'Vacunación Covid-19 | Lunes-Viernes 8:30am-3:00pm'

const cards = [
	{
		icon: esteto,
		question:
			'¿Necesitas estar ingresado para utilizar los servicios del hospital?',
		answer:
			'Nuestros servicios - incluyendo laboratorios, centro de imágenes, cuidado de heridas - están disponibles para el público en general.',
	},
	{
		icon: cita,
		question: '¿Cómo hacer citas con nuestros médicos?',
		answer:
			' Citas con nuestra facultad médica se hacen a través de sus oficinas, favor referirse al directorio médico para información de contacto.',
	},
	{
		icon: adn,
		question: '¿Qué constituye una emergencia médica?',
		answer:
			'Se considera una emergencia toda condición que podría resultar en daño a las funciones corporales, a un órgano corporal o a la salud del individuo.',
	},
	{
		icon: person,
		question: '¿Qué tengo que saber antes de mi operación?',
		answer:
			'Visite la sección de “Admisiones” donde encontrará toda información, en adición a un listado detallado de los requisitos necesarios antes de ser admitido.',
	},
]

const especialidades = [
	{
		name: 'OB-Gyn/Ginecología',
		short: 'OB-G',
		href: '/especialidades#obstetricia_ginecologia_ginecologia-oncologica',
	},
	{ name: 'Unidad NICU', short: 'NICU', href: '/especialidades#nicu' },
	{
		name: 'Cirugía colorrectal',
		short: 'Cc',
		href: '/especialidades#cirugia-colorrectal',
	},
	{ name: 'Ortopedia', short: 'Or', href: '/especialidades#ortopedia' },
	{
		name: 'Medicina física, deportiva y rehabilitación',
		short: 'FdR',
		href: '/especialidades#medicina-deportiva',
	},
	{
		name: 'Otorrinolaringología',
		short: 'Ot',
		href: '/especialidades#otorrinolaringologia',
	},
	{
		name: 'Endocrinología',
		short: 'En',
		href: '/especialidades#endocrinologia',
	},
	{
		name: 'Cirugía general',
		short: 'Cg',
		href: '/especialidades#cirugia-general',
	},
	{
		name: 'Cirugía oncológica',
		short: 'Co',
		href: '/especialidades#cirugia-oncologica',
	},
	{ name: 'Pediatría', short: 'Pe', href: '/especialidades#pediatria' },
	{ name: 'Urología', short: 'Ur', href: '/especialidades#urologia' },
]

const servicios = [
	{
		name: 'Radiología/Centro de imágenes',
		short: 'OB-G',
		href: '/servicios#laboratorio',
	},
	{ name: 'Laboratorio', short: 'NICU', href: '' },
	{
		name: 'Cuidado de heridas',
		short: 'Cc',
		href: '/servicios#cuidado-de-heridas',
	},
	{
		name: 'Centro de medicina física y rehabilitación ',
		short: 'Or',
		href: '/servicios#centro-de-medicina-fisica_rehabilitacionservicios#centro-de-medicina-fisica_rehabilitacion',
	},
	{
		name: 'Ashford Prenatal',
		short: 'FdR',
		href: '/servicios#centro-prenatal',
	},
	{
		name: 'Centro de vacunación',
		short: 'Ot',
		href: '/servicios#centro-de-vacunacion',
	},
	{
		name: 'Clínica de cardiología',
		short: 'En',
		href: '/servicios#medicina-nuclear_centro-de-cardiologia',
	},
	{
		name: 'Centro de la mujer',
		short: 'Cg',
		href: '/servicios#centro-de-la-mujer',
	},
	{
		name: 'Farmacia de la comunidad',
		short: 'Co',
		href: '/servicios#farmacia-de-la-comunidad',
	},
]

export default function Home() {
	return (
		<div id='home' className='flex flex-col'>
			<main>
				<Marquee text={message} />
				<Hero />
				<CardList cards={cards} />
				<Interest />
				<CardSwiper />
				<Especialidades especialidades={especialidades} />
				<Servicios servicios={servicios} />
				<div className=''></div>
			</main>
		</div>
	)
}
