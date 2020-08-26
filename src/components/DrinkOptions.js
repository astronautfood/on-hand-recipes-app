import React, { useState, useEffect } from 'react';
import { drinksByIngredientApi } from '../utils/Apis';
import RecipeResults from './RecipeResults';

const DrinkOptions = ({ ingredient }) => {
	const [cocktails, setCocktails] = useState([]);
	const [cocktailId, setCocktailId] = useState([]);
	const [isActive, setActive] = useState(true);

	useEffect(() => {
		if (ingredient !== '') {
			drinksByIngredientApi(ingredient).then((res) => setCocktails(res));
		}
	}, [ingredient]);

	return (
		<>
			{isActive ? (
				<div className='wrapper'>
					<a href='/'>Back to Ingredients</a>
					<div className='container'>
						{cocktails.map((drink) => (
							<div className='drink' key={drink.idDrink}>
								<h2>{drink.strDrink}</h2>
								<button
									id={drink.idDrink}
									onClick={(e) => {
										e.preventDefault();
										setCocktailId(e.target.id);
										setActive(false);
									}}
								>
									View Ingredients
								</button>
							</div>
						))}
					</div>
				</div>
			) : (
				<RecipeResults id={cocktailId} />
			)}
		</>
	);
};

export default DrinkOptions;
