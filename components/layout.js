import HeaderNavbar from './HeaderNavbar'

export default function Layout({ children }) {
	return (
		<>
			<HeaderNavbar />
			<main className='mt-[70px] overflow-y-scroll h-[calc(100vh-70px)]'>
				{children}
			</main>
		</>
	)
}
