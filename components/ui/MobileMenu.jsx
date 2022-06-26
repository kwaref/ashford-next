import { Popover } from '@headlessui/react'
import React from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion'
import { MenuItem } from './MenuItem'

export const MobileMenu = ({ menu_items }) => {
	return (
		<Accordion allowZeroExpanded='true'>
			{menu_items.map(item => {
				return (
					<AccordionItem key={item.name}>
						<AccordionItemHeading>
							<AccordionItemButton>
								{!item.href ? (
									<div className='w-auto h-11 mx-0 px-1 py-[10px] my-1 border-0 rounded-none bg-silver group'>
										<span className='flex justify-between text-sm px-[10px]'>
											<p className='mt-[2px] group-hover:text-greenArrow'>
												{item.name}
											</p>
											<div>
												<svg
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'
													className='w-6 h-6 fill-transparent'>
													<path
														d='M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z'
														fill='#01426A'></path>
												</svg>
											</div>
										</span>
									</div>
								) : (
									<Popover.Button as='a' href={item.href}>
										<div className='w-auto h-11 mx-0 px-1 py-[10px] my-1 border-0 rounded-none bg-silver group'>
											<span className='flex justify-between text-sm px-[10px]'>
												<p className='mt-[2px] group-hover:text-greenArrow'>
													{item.name}
												</p>
											</span>
										</div>
									</Popover.Button>
								)}
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							{item.cols &&
								item.cols.map(col => {
									return col.items.map(item => {
										return (
											<MenuItem
												key={item.name}
												text={item.name}
												href={item.href}
											/>
										)
									})
								})}
						</AccordionItemPanel>
					</AccordionItem>
				)
			})}
		</Accordion>
	)
}
