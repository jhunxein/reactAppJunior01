import React from 'react';

import growTogether from './../assets/images/illustration-grow-together.svg';
import flowingConversation from './../assets/images/illustration-flowing-conversation.svg';
import yourUsers from './../assets/images/illustration-your-users.svg';

import './../css/community.css';

function Community() {
	return (
		<article className="container--max community">
			<h2 className="hide--elem">Community</h2>

			<div className="img--design img__top-1">
				<div className="design__top-1"></div>
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

			<div className="img--design img__bottom-1">
				<div className="design__bottom-1"></div>
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

			<div className="img--design img__top-2">
				<div className="design__top-2"></div>
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
			<div className="img--design img__bottom-2">
				<div className="design__bottom-2"></div>
			</div>
		</article>
	);
}

export default Community;
