import Image from 'next/image'
import { Card } from '../components/ui/Card'
import { Hero } from '../components/ui/Hero'
import Marquee from '../components/ui/Marquee'
import esteto from '../public/images/esteto.svg'
import cita from '../public/images/cita.svg'
import adn from '../public/images/adn.svg'
import person from '../public/images/person.svg'
import { CardList } from '../components/ui/CardList'

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
		<div className='flex flex-col'>
			<main>
				<Marquee text={message} />
				<Hero />
				<CardList cards={cards} />
				{/* <div className='pt-16 px-4 pb-12 bg-lightSilver'>
					<p className='text-2xl text-navyFooter font-extralight text-center'>
						¡Saludos! ¿Cómo podríamos ayudarle?
					</p>
					<div className='flex flex-col pt-[50px] items-center'>
						{cards.map(({ icon, question, answer }) => (
							<Card
								key={question}
								icon={icon}
								question={question}
								answer={answer}
							/>
						))}
					</div>
				</div> */}
				<div className=''></div>
				<div className=''></div>
				<div className=''></div>
				<div className=''></div>
			</main>
		</div>
	)
}
