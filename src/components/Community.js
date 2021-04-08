import React from 'react';

import growTogether from './../assets/images/illustration-grow-together.svg';
import flowingConversation from './../assets/images/illustration-flowing-conversation.svg';
import yourUsers from './../assets/images/illustration-your-users.svg';

import './../css/community.css';

// MOBILE DESIGNS
import mobileTop1 from './../assets/images/bg-section-top-mobile-1.svg';
import mobileBottom1 from './../assets/images/bg-section-bottom-mobile-1.svg';
import mobileTop2 from './../assets/images/bg-section-top-mobile-2.svg';
import mobileBottom2 from './../assets/images/bg-section-bottom-mobile-2.svg';

// DESKTOP DESIGNS
import desktopTop1 from './../assets/images/bg-section-top-desktop-1.svg';
import desktopBottom1 from './../assets/images/bg-section-bottom-desktop-1.svg';
import desktopTop2 from './../assets/images/bg-section-top-desktop-2.svg';
import desktopBottom2 from './../assets/images/bg-section-bottom-desktop-2.svg';

import { useGlobalContext } from './../helpers/context';

function Community() {
	const { windowSize } = useGlobalContext();

	return (
		<article className="container--max community">
			<div className="img--design design__top">
				{windowSize > 820 ? (
					<img src={desktopTop1} alt="" aria-hidden={true} />
				) : (
					<img src={mobileTop1} alt="" aria-hidden={true} />
				)}
			</div>
			<section className="community--wrapper">
				<div className="container">
					<div className="community--info">
						<h2 className="community__title">Grow Together</h2>
						<p className="community__desc">
							Generate meaningful discussions with your audience and build a strong,
							loyal community. Think of the insightful conversations you miss out on
							with a feedback form.
						</p>
					</div>
					<img src={growTogether} alt="..." className="community__img" />
				</div>
			</section>
			<div className="img--design design__bottom">
				{windowSize > 820 ? (
					<img src={desktopBottom1} alt="" aria-hidden={true} />
				) : (
					<img src={mobileBottom1} alt="" aria-hidden={true} />
				)}
			</div>

			<section className="community--wrapper community--wrapper__transparent padding-0">
				<div className="container">
					<div className="community--info">
						<h2 className="community__title">Flowing Conversations</h2>
						<p className="community__desc">
							You wouldn't paginate a conversation in real life, so why do it online?
							Our threads have just-in-time loading for a more natural flow.
						</p>
					</div>
					<img src={flowingConversation} alt="..." className="community__img" />
				</div>
			</section>

			<div className="img--design design__top">
				{windowSize > 820 ? (
					<img src={desktopTop2} alt="" aria-hidden={true} />
				) : (
					<img src={mobileTop2} alt="" aria-hidden={true} />
				)}
			</div>
			<section className="community--wrapper">
				<div className="container">
					<div className="community--info">
						<h2 className="community__title">Your Users</h2>
						<p className="community__desc">
							It takes no time at all to integrate Huddle with your app's
							authentication solution. This means, once signed in to your app, your
							users can start chatting immediately.
						</p>
					</div>
					<img src={yourUsers} alt="..." className="community__img" />
				</div>
			</section>
			<div className="img--design design__bottom">
				{windowSize > 820 ? (
					<img src={desktopBottom2} alt="" aria-hidden={true} />
				) : (
					<img src={mobileBottom2} alt="" aria-hidden={true} />
				)}
			</div>
		</article>
	);
}

export default Community;
