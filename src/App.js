import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import IngredientsApi from './components/IngredientsApi';

function App() {
	return (
		<div className='App'>
			<Router path='/'>
				<IngredientsApi />
			</Router>
		</div>
	);
}

export default App;
