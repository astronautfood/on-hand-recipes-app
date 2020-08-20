import React, { useState, useEffect } from 'react';

const RecipeApi = ({ id }) => {
	const [recipe, getRecipe] = useState([]);

	useEffect(() => {
		if (id !== '') {
			fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`, {
				headers: {
					'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
					'x-rapidapi-key': process.env.REACT_APP_COCKTAIL_DB_API_KEY,
				},
			})
				.then((res) => res.json())
				.then((drinkData) => getRecipe(drinkData.drinks[0]))
				.catch((err) => console.log(err));
		}
	}, [id]);

	let ingredientObj = Object.entries(recipe).map(([key, value], i) =>
		key.includes('Ingredient') && value !== null ? [key, value] : ''
	);

	let ingredientArr = ingredientObj.filter((el) => el !== '');

	console.log(ingredientArr);

	return (
		<>
			<p>Recipe</p>
		</>
	);
};

export default RecipeApi;
