import React from 'react'
import { Card } from './Card'

export const CardList = ({ cards }) => {
	return (
		<div id='cards' className='flex flex-col pt-16 xxs:pt-28 px-4 pb-12 bg-lightSilver items-center justify-around'>
			<p className='text-2xl xxs:text-[32px] text-navyFooter font-extralight text-center'>
				¡Saludos! ¿Cómo podríamos ayudarle?
			</p>
			<div className='flex flex-col hxs:flex-row hxs:flex-wrap pt-[50px] justify-center'>
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
