import '../styles/globals.css'
import Layout from '../components/layout'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
			<Footer className='overflow-y-scroll' />
		</Layout>
	)
}

export default MyApp
