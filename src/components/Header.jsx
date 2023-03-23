import React from 'react';
import Styles from '../components/header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';

const Header = () => {
	return (
		<header className={Styles.header}>
			<nav className={`${Styles.nav} d-flex align-items-center justify-content-between container`}>
				<Link className={Styles.logo} to="/" aria-label="Dogs - Home">
					<Dogs />
				</Link>
				<Link to="/login" className={Styles.login}>
					Login/Criar
				</Link>
			</nav>
		</header>
	);
};

export default Header;
