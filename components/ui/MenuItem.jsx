import { Popover } from '@headlessui/react'
import React from 'react'

export const MenuItem = ({ text, href }) => {
	return (
		<Popover.Button as='a' href={href}>
			<div className='w-auto h-11 -mt-1 mb-0 pl-8 py-[10px] my-1 border-0 rounded-none group bg-silver'>
				<span className='flex justify-between text-sm px-[10px] group-hover:text-greenArrow'>
					{text}
				</span>
			</div>
		</Popover.Button>
	)
}
