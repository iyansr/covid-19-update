import React from 'react'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import Confirmed from './pages/Confirmed'
import Recovered from './pages/Recovered'
import Death from './pages/Death'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const App = () => {
	return (
		<div>
			<Router>
				<nav className='navbar navbar-light bg-light'>
					<div className='container'>
						<Link className='navbar-brand' to='/'>
							Covid 19 Update
						</Link>
					</div>
				</nav>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/confirmed' component={Confirmed} />
					<Route path='/recovered' component={Recovered} />
					<Route path='/deaths' component={Death} />
					<Route component={Page404} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
