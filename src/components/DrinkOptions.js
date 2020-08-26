import React, { useState } from 'react';
import RecipeApi from './RecipeApi';

const DrinkOptions = ({ drinks }) => {
	const [cocktailId, setCocktailById] = useState('');
	const [isActive, setActive] = useState(true);

	return (
		<>
			{isActive && (
				<div className='wrapper'>
					<a href='/'>Back to Ingredients</a>
					<div className='container'>
						{drinks.map((drink) => (
							<div className='drink' key={drink.idDrink}>
								<h2>{drink.strDrink}</h2>
								<button
									id={drink.idDrink}
									onClick={(e) => {
										e.preventDefault();
										setCocktailById(e.target.id);
										setActive(false);
									}}
								>
									View Ingredients
								</button>
							</div>
						))}
					</div>
				</div>
			)}
			<RecipeApi id={cocktailId} />
		</>
	);
};

export default DrinkOptions;
