import React from 'react';
import mockup from './../assets/images/screen-mockups.svg';

import Button from './Button';

import './../css/hero.css';

function Hero() {
	return (
		<section className="container hero">
			<h1 className="hero__title">build the community your fans will love</h1>
			<p className="hero__desc">
				Huddle re-imagines the way we build communities. You have a voice, but so
				does your audience. Create connections with your users as you engage in
				genuine discussion.
			</p>

			{/* <Button
				type="button"
				classes="btn btn__primary btn__large cta"
				text="Get Started For Free"
			/> */}
			<div className="hero--wrapper">
				<a href="/" className="btn btn__primary btn__large cta">
					Get Started For Free
				</a>
			</div>
			<div className="hero--mockup">
				<img src={mockup} alt="website logo" className="hero--mockup__img" />
			</div>
		</section>
	);
}

export default Hero;
