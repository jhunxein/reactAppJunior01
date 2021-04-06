import React from 'react';
import mockup from './../assets/images/screen-mockups.svg';

import Button from './Button';

function Hero() {
	return (
		<section className="hero">
			<h1 className="hero__title">build the community your fans will love</h1>
			<p className="hero__desc">
				Huddle re-imagines the way we build communities. You have a voice, but so
				does your audience. Create connections with your users as you engage in
				genuine discussion.
			</p>

			<Button type="button" classes="btn cta" text="Get Started For Free" />
			<div className="hero--mockup">
				<img src={mockup} alt="" className="hero__img" />
			</div>
		</section>
	);
}

export default Hero;
