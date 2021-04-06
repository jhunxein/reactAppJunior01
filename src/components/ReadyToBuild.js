import React from 'react';

import Button from './Button';

function ReadyToBuild() {
	return (
		<section className="build">
			<h2 className="build__title">Ready To Build Your Community?</h2>
			<Button type="button" classes="btn build__btn" text="Get Started For Free" />
		</section>
	);
}

export default ReadyToBuild;
