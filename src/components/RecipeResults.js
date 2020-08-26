import React, { useState, useEffect } from 'react';
import { recipeByCocktailId } from '../utils/Apis';

const RecipeResults = ({ id }) => {
	const [recipe, setRecipe] = useState([]);
	const [recipeIngredients, setRecipeIngredients] = useState([]);
	const [recipeMeasurements, setRecipeMeasurements] = useState([]);

	useEffect(() => {
		recipeByCocktailId(id).then((res) => setRecipe(res));
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

	return (
		<>
			<a href='/'>Back to Ingredients</a>
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

export default RecipeResults;
