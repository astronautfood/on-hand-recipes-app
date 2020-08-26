import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import IngredientList from './components/IngredientList';

function App() {
	return (
		<div className='App'>
			<Router path='/'>
				<IngredientList />
			</Router>
		</div>
	);
}

export default App;
