import React from 'react';

const IngredientList = ({ options }) => {
	console.log(options);
	return (
		<>
			<form>
				<fieldset>
					<legend>Choose an ingredient</legend>
					<div style={formLayout}>
						{options.map((option) => (
							<label
								key={option.strIngredient1}
								htmlFor={option.strIngredient1.toLowerCase().replace(/ /g, '')}
							>
								{option.strIngredient1}
								<input
									type='radio'
									name='ingredients'
									id={option.strIngredient1.toLowerCase().replace(/ /g, '')}
									value={option.strIngredient1}
								/>
							</label>
						))}
					</div>
				</fieldset>
			</form>
		</>
	);
};

const formLayout = {
	display: 'grid',
	gridTemplateColumns: 'repeat(5, minmax(100px, 1fr))',
	gridGap: 10,
};

export default IngredientList;
