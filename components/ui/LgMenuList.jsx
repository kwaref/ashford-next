import React from 'react'
import { LgMenuItem } from './LgMenuItem'

export const LgMenuList = ({menu_items}) => {
	return (
		<ul className='hidden md:flex justify-between'>
			{menu_items.map(item => {
				return <LgMenuItem key={item.name} {...item} />
			})}
		</ul>
	)
}
