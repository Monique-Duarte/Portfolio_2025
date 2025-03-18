import React from 'react';
import Id from '../Id';
import Contact from '../Contact';

const Header = () => {
	return (
		<>
			<h1
				style={{
					textAlign: 'center',
					backgroundColor: '#000916',
					color: 'white',
					margin: 0,
					boxShadow: 'inset 0 0 0 3px #002D49',
					padding: '5px'
				}}
			>
				Portfólio
			</h1>
			<Id />
			<Contact />
		</>
	);
};

export default Header;
