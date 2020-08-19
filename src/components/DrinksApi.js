import React, { useState, useEffect } from 'react';
import DrinkOptions from './DrinkOptions';

const DrinksApi = ({ ingredient }) => {
	const [drinkOptions, getDrinkOptions] = useState([]);
	const [cocktailId, getCocktailById] = useState('');

	useEffect(() => {
		if (ingredient !== '') {
			fetch(
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
				.then((drinkTitles) => getDrinkOptions(drinkTitles.drinks))
				.catch((err) => console.log(err));
		}
	}, [cocktailId, ingredient]);

	return (
		<>
			<DrinkOptions drinks={drinkOptions} />
		</>
	);
};

export default DrinksApi;
