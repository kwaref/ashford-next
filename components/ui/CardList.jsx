import React from 'react'
import { Card } from './Card'

export const CardList = ({cards}) => {
	return (
		<div className='pt-16 px-4 pb-12 bg-lightSilver'>
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
		</div>
	)
}
