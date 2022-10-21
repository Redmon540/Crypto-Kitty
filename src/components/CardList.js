import React from 'react';
import Card from './Card.js';

const CardList = ({ kitties }) => {
	return (
		<div> 
			{
				kitties.map((user, i) => {
					return (
						<Card 
						key={i} 
						id={kitties[i].id} 
						name={kitties[i].name}
						username={kitties[i].username}
						email={kitties[i].email} 
						/>
					);
				})
			}
		</div>
	);
}

export default CardList

