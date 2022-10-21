import React from 'react';

const Card = ({ name, username, email, id }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='kitties' src={`https://robohash.org/${id}?size=200x200&set=set4`} />
			<div>
				<h2>{name}</h2>
				<p className='b'>{username}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
