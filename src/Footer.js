import React from 'react';

import logo from './assets/images/logo--footer.svg';
import Button from './components/Button';

import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

import phone from './assets/images/icon-phone.svg';
import messages from './assets/images//icon-email.svg';

import mobileTop from './assets/images/bg-footer-top-mobile.svg';
import desktopTop from './assets/images/bg-footer-top-desktop.svg';

import './css/footer.css';

import { useGlobalContext } from './helpers/context';

function Footer() {
	const {
		windowSize,
		isEmailError,
		email,
		handleInputChange,
		handleEmailFormSubmission,
	} = useGlobalContext();

	return (
		<footer className="container--max footer">
			<div className="img--design">
				{windowSize > 820 ? (
					<img src={desktopTop} alt="" aria-hidden={true} />
				) : (
					<img src={mobileTop} alt="" aria-hidden={true} />
				)}
			</div>

			<div className="footer--wrapper">
				<div>
					<section className="container ">
						<h2 className="footer__title">Newsletter</h2>
						<p className="footer__desc">
							To receive tips on how to grow your community, sign up to our weekly
							newsletter. We'll never send you spam or pass on your email address
						</p>

						<form
							className="footer--form"
							onSubmit={handleEmailFormSubmission}
							noValidate
						>
							<label htmlFor="email" className="hide--elem">
								Email Address
							</label>
							<input
								type="email"
								name="email"
								id="email"
								value={email}
								onChange={handleInputChange}
								className={`${
									isEmailError ? 'footer__email input__error' : 'footer__email'
								}`}
							/>
							<Button
								text="Subscribe"
								type="submit"
								classes="btn btn__primary footer__btn"
							/>
						</form>
					</section>

					<section className="container">
						<a href="/">
							<img src={logo} alt="" className="footer__logo" />
						</a>
						<p className="footer__desc">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad labore ex
							commodi quisquam amet officiis minus velit? Doloribus consequatur
							mollitia nisi eveniet, nihil quam numquam, exercitationem inventore saepe
							necessitatibus nulla.
						</p>

						<address className="footer--address">
							<div className="flex--wrapper inline__icon">
								<img src={phone} alt="" className="address__icons" /> Phone:
								+1-543-123-4567
							</div>
							<br />
							<img src={messages} alt="" className="address__icons" />{' '}
							example@company.com
						</address>

						<div className="footer--icons">
							<a href="https://www.facebook.com" className="footer__icon">
								<FaFacebookSquare />
							</a>
							<a href="https://www.instagram.com" className="footer__icon">
								<FaInstagram />
							</a>
							<a href="https://www.twitter.com" className="footer__icon">
								<FaTwitterSquare />
							</a>
						</div>
					</section>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
