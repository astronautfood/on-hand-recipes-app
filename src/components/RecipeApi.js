import React, { useState, useEffect } from 'react';

const RecipeApi = ({ id }) => {
	const [recipe, setRecipe] = useState([]);
	const [recipeIngredients, setRecipeIngredients] = useState([]);
	const [recipeMeasurements, setRecipeMeasurements] = useState([]);

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

	useEffect(() => {
		const sortRecipe = (detail) => {
			const sortedObj = Object.keys(recipe).filter((key) =>
				key.includes(detail) && recipe[key] !== null ? recipe[key] : ''
			);

			return sortedObj.map((key) => recipe[key]);
		};

		setRecipeIngredients(sortRecipe('Ingredient'));
		setRecipeMeasurements(sortRecipe('Measure'));
	}, [recipe]);

	if (recipe.idDrink === id) {
		console.log('defined');
	}

	console.log(recipe);
	console.log(recipeMeasurements);

	return (
		<>
			{console.log(recipeIngredients)}
			<h2>{recipe.strDrink}</h2>
			<img src={recipe.strDrinkThumb} alt={recipe.strDrink} />
			<div className='container'>
				{recipeMeasurements.map((measurement, i) => (
					<p key={i}>{measurement}</p>
				))}
				{recipeIngredients.map((ingredient) => (
					<p key={ingredient}>{ingredient}</p>
				))}
				<p>{recipe.strGlass}</p>
				<p>{recipe.strInstructions}</p>
			</div>
		</>
	);
};

export default RecipeApi;
