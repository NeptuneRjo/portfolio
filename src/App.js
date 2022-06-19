import './App.css'
import { About, Contact, Hero, Projects, Menu } from './components'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
	return (
		<ParallaxProvider>
			<div className='app-main'>
				<Menu />
				<Hero />
				<About />
				<Projects />
				<Contact />
			</div>
		</ParallaxProvider>
	)
}

export default App
