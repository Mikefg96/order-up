import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import LandingScreen from './screens/LandingScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
		<Router>
			<Header/>
			<Container fluid className='pa0'>
				<main>
					<Route path='/' component={LandingScreen} exact></Route>
					<Route path='/register' component={RegisterScreen}></Route>
					<Route path='/login' component={LoginScreen}></Route>
				</main>
			</Container>
		{/* 	<Footer/> */}
		</Router>
	);
}

export default App;