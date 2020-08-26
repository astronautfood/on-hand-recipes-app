import React, { useState, useEffect } from 'react';
import RecipeResults from './RecipeResults';

const RecipeApi = ({ id }) => {
	const [recipe, setRecipe] = useState([]);

	useEffect(() => {
		if (id) {
			fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`, {
				headers: {
					'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
					'x-rapidapi-key': process.env.REACT_APP_COCKTAIL_DB_API_KEY,
				},
			})
				.then((res) => res.json())
				.then((drinkData) => setRecipe(drinkData.drinks[0]))
				.catch((err) => console.log(err));
		}
	}, [id]);

	return (
		<>
			<RecipeResults recipe={recipe} />
		</>
	);
};

export default RecipeApi;
