import Image from 'next/image'
import { Hero } from '../components/ui/Hero'
import Marquee from '../components/ui/Marquee'
import esteto from '../public/images/esteto.svg'
import cita from '../public/images/cita.svg'
import adn from '../public/images/adn.svg'
import person from '../public/images/person.svg'
import { CardList } from '../components/ui/CardList'
import 'animate.css'
import interest from '/public/images/interest.webp'
import { Interest } from '../components/ui/Interest'

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

export default function Home() {
	return (
		<div id='home' className='flex flex-col'>
			<main>
				<Marquee text={message} />
				<Hero />
				<CardList cards={cards} />
				<Interest />

				<div id='carrousel' className=''></div>
				<div className=''></div>
				<div className=''></div>
			</main>
		</div>
	)
}
