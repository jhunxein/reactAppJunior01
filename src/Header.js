import React from 'react';

import './css/header.css';

import logo from './assets/images/logo.svg';

function Header() {
	return (
		<header className="container header">
			<nav className="nav">
				<a href="/">
					<img src={logo} alt="logo" className="nav__logo" />
				</a>
				<a href="/" className="btn btn__transparent btn__small nav__btn">
					Try it Free
				</a>
			</nav>
		</header>
	);
}

export default Header;
