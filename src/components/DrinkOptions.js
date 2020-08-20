import React, { useState } from 'react';
import RecipeApi from './RecipeApi';

const DrinkOptions = ({ drinks }) => {
	const [cocktailId, getCocktailById] = useState('');

	return (
		<>
			{drinks.map((drink) => (
				<div className='drink' key={drink.idDrink}>
					<h2>{drink.strDrink}</h2>
					<button
						id={drink.idDrink}
						onClick={(e) => {
							e.preventDefault();
							getCocktailById(e.target.id);
						}}
					>
						View Ingredients
					</button>
				</div>
			))}
			<RecipeApi id={cocktailId} />
		</>
	);
};

export default DrinkOptions;
