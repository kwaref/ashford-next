import { Hero } from '../components/ui/Hero'
import Marquee from '../components/ui/Marquee'

const message = 'Vacunación Covid-19 | Lunes-Viernes 8:30am-3:00pm'

export default function Home() {
	return (
		<div className='flex flex-col'>
			<main>
				<Marquee text={message} />
				<Hero />
				<div className=''></div>
				<div className=''></div>
				<div className=''></div>
				<div className=''></div>
				<div className=''></div>
			</main>
		</div>
	)
}
