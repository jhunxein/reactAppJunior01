import React from 'react';

import Button from './Button';

import './../css/build.css';

function ReadyToBuild() {
	return (
		<section className="build">
			<h2 className="build__title">Ready To Build Your Community?</h2>
			<Button
				type="button"
				classes="btn btn__primary btn__large build__btn"
				text="Get Started For Free"
			/>
		</section>
	);
}

export default ReadyToBuild;
