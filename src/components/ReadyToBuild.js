import React from 'react';

import './../css/build.css';

function ReadyToBuild() {
	return (
		<section className="build">
			<h2 className="build__title">Ready To Build Your Community?</h2>

			<div className="btn--wrapper">
				<a href="/" className="btn btn__primary btn__large build__btn">
					Get Started For Free
				</a>
			</div>
		</section>
	);
}

export default ReadyToBuild;
