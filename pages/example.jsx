import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { useState } from 'react'

function MyComponent() {
	const [isShowing, setIsShowing] = useState(false)

	return (
		<>
			<button onClick={() => setIsShowing(isShowing => !isShowing)}>
				Toggle
			</button>
			<div>
				<div
					className='p-10 w-20 h-20 bg-red-500'
					onMouseEnter={() => {
						setIsShowing(true)
					}}
					onMouseLeave={() => {
						setIsShowing(false)
					}}>
					<Transition
						show={isShowing}
						enter='transform transition duration-1000 ease-in-out'
						enterFrom='translate-y-full opacity-0'
						enterTo='-translate-y-full'
						leave='transform transition duration-1000 ease-in-out'
						leaveFrom='-translate-y-full'
						leaveTo='translate-y-full opacity-0'>
						<Link href={''}>
							<div className='w-10 h-10 border-4 bg-blue-400'></div>
						</Link>
					</Transition>
					<Transition
						show={!isShowing}
						enter='transform transition duration-1000 ease-in-out'
						enterFrom='translate-y-full'
						enterTo='-translate-y-full'
						leave='transform transition duration-1000 ease-in-out'
						leaveFrom='-translate-y-full'
						leaveTo='translate-y-full'>
						<Link href={''}>
							<div className=''>
								<p>JKGFDUGVKGS</p>
							</div>
						</Link>
					</Transition>
				</div>
			</div>
		</>
	)
}

export default MyComponent
