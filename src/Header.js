import React from 'react';

import logo from './assets/images/logo.svg';

import Button from './components/Button';

function Header() {
	return (
		<header className="header">
			<nav className="nav">
				<img src={logo} alt="logo" className="nav__logo" />
				<Button type="button" classes="btn nav__btn" text="Try it Free" />
			</nav>
		</header>
	);
}

export default Header;
