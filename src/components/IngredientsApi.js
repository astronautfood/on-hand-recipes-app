import React, { useState, useEffect } from 'react';
import IngredientList from './IngredientList';

const IngredientsApi = () => {
	const [ingredientOptions, setIngredientOptions] = useState([]);

	useEffect(() => {
		fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?i=list`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
				'x-rapidapi-key': process.env.REACT_APP_COCKTAIL_DB_API_KEY,
			},
		})
			.then((res) => res.json())
			.then((ingredientData) => setIngredientOptions(ingredientData.drinks))
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			<IngredientList options={ingredientOptions} />
		</>
	);
};

export default IngredientsApi;
