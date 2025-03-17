import React from 'react';
import styles from './Header.module.css';
import Id from './Id/Id';
import Contact from './Contact/Contact';

const Header = () => {
	return (
		<header className={`${styles.header} ${styles.content} ${styles.profile} ${styles.profile__info}`}>
			<Id />
			<Contact />
		</header >
	)
};

export default Header;
