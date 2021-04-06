import React from 'react';
import logo from './assets/images/logo.svg';
import Button from './components/Button';

import {
	FaPhoneAlt,
	FaEnvelopeSquare,
	FaFacebookSquare,
	FaInstagram,
	FaTwitterSquare,
} from 'react-icons/fa';

function Footer() {
	return (
		<footer>
			<section className="footer--wrapper">
				<h2>Newsletter</h2>
				<p>
					To receive tips on how to grow your community, sign up to our weekly
					newsletter. We'll never send you spam or pass on your email address
				</p>

				<form>
					<label htmlFor="email" className="hide--elem">
						Email Address
					</label>
					<input type="email" name="email" id="email" />
					<Button text="Subscribe" type="submit" />
				</form>
			</section>
			<section className="footer--wrapper">
				<img src={logo} alt="website logo" className="footer__logo" />
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad labore ex
					commodi quisquam amet officiis minus velit? Doloribus consequatur mollitia
					nisi eveniet, nihil quam numquam, exercitationem inventore saepe
					necessitatibus nulla.
				</p>

				<address>
					<FaPhoneAlt /> Phone: +1-543-123-4567
					<br />
					<FaEnvelopeSquare /> example@company.com
				</address>

				<div className="footer--icons">
					<a href="https://www.facebook.com">
						<FaFacebookSquare />
					</a>
					<a href="https://www.instagram.com">
						<FaInstagram />
					</a>
					<a href="https://www.twitter.com">
						<FaTwitterSquare />
					</a>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
