export const ingredientApi = () => {
	return fetch(`https://the-cocktail-db.p.rapidapi.com/list.php?i=list`, {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
			'x-rapidapi-key': process.env.REACT_APP_COCKTAIL_DB_API_KEY,
		},
	})
		.then((res) => res.json())
		.then((ingredientData) => ingredientData.drinks)
		.catch((err) => console.log(err));
};

export const drinksByIngredientApi = (ingredient) => {
	return fetch(
		`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingredient}`,
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
				'x-rapidapi-key': process.env.REACT_APP_COCKTAIL_DB_API_KEY,
			},
		}
	)
		.then((res) => res.json())
		.then((drinkTitles) => drinkTitles.drinks)
		.catch((err) => console.log(err));
};

export const recipeByCocktailId = (id) => {
	return fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`, {
		headers: {
			'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
			'x-rapidapi-key': process.env.REACT_APP_COCKTAIL_DB_API_KEY,
		},
	})
		.then((res) => res.json())
		.then((drinkData) => drinkData.drinks[0])
		.catch((err) => console.log(err));
};
