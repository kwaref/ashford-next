import Link from 'next/link'
import React, { useState } from 'react'

export const LgMenuItem = props => {
	const [open, setOpen] = useState(false)
	return props.cols ? (
		<li
			className='flex static h-auto md:h-16 lg:h-[58px] lg:pt-2 px-2 pb-2 z-10'
			onMouseOver={() => setOpen(true)}
			onMouseLeave={() => {
				setOpen(false)
			}}>
			<a className='relative h-auto lg:h-9 p-2 text-[13px] cursor-pointer hover:text-cyan-500'>
				{props.name}
			</a>
			<div
				className={`absolute ${
					open ? 'block' : 'hidden'
				}  w-[100%]  left-0 py-6 px-16  mt-[61px] lg:mt-[51px]  shadow-xl bg-silver animate__animated animate__slideInDown animate__faster`}>
				<div className='flex'>
					<div className='w-1/3 py-0 pr-[15px] pl-0'>
						<p className='mx-0 mt-0 mb-4 text-[31px]'>{props.header}</p>
						<p className='mx-0 mt-0 mb-4 text-[13.5px] text-blackNavlink'>
							{props.resume}
						</p>
					</div>
					<div className='flex flex-row w-2/3'>
						{props.cols &&
							props.cols.map(col => {
								return (
									<div key={col.header} className='w-1/2 border-l-2'>
										<Link href='/nosotros'>
											<a className='py-2 pr-8 pl-8 text-[18px] text-cyan-500'>
												{col.header}
											</a>
										</Link>

										{col.items.length > 5 ? (
											<div className='flex w-full m-0 p-0'>
												<div className='w-1/2 m-0 p-0'>
													<ul className='my-0 mr-0 -ml-2 py-0 pr-0 pl-8 w-full'>
														{col.items
															.slice(0, col.items.length / 2)
															.map(item => {
																return (
																	<li
																		key={item.name}
																		className='p-2 text-[13.5px] w-full'>
																		<Link
																			href={item.href}
																			className='w-full p-2 text-[13.5px]'>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				{item.name}
																			</a>
																		</Link>
																	</li>
																)
															})}
													</ul>
												</div>
												<div className='w-1/2 m-0 p-0'>
													<ul className='my-0 mr-0 -ml-2 py-0 pr-0 pl-8'>
														{col.items
															.slice(col.items.length / 2, col.items.length)
															.map(item => {
																return (
																	<li
																		key={item.name}
																		className='p-2 text-[13.5px] w-full'>
																		<Link
																			href={item.href}
																			className='w-full p-2 text-[13.5px]'>
																			<a className='hover:text-cyan-500 flex text-blackNavlink'>
																				{item.name}
																			</a>
																		</Link>
																	</li>
																)
															})}
													</ul>
												</div>
											</div>
										) : (
											<ul className='flex-col my-0 mr-0 -ml-2 py-0 pr-0 pl-8'>
												{col.items.map(item => {
													return (
														<li key={item.href}>
															<Link href={item.href}>
																<a
																	className='flex p-2 text-[13.5px] text-blackNavlink hover:text-cyan-500'
																	onClick={() => setOpen(false)}>
																	{item.name}
																</a>
															</Link>
														</li>
													)
												})}
											</ul>
										)}
									</div>
								)
							})}
					</div>
				</div>
			</div>
		</li>
	) : (
		<li className='flex static group h-auto md:h-16 lg:h-[58px] lg:pt-2 px-2 pb-2 z-10'>
			<Link href={props.href}>
				<a className='relative h-auto lg:h-9 p-2 text-[13px] cursor-pointer hover:text-cyan-500'>
					{props.name}
				</a>
			</Link>
		</li>
	)
}
