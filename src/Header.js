import React from 'react';

import './css/header.css';

import logo from './assets/images/logo.svg';

import Button from './components/Button';

function Header() {
	return (
		<header className="container header">
			<nav className="nav">
				<a href="/">
					<img src={logo} alt="logo" className="nav__logo" />
				</a>
				<Button
					type="button"
					classes="btn btn__transparent btn__small nav__btn"
					text="Try it Free"
				/>
			</nav>
		</header>
	);
}

export default Header;
