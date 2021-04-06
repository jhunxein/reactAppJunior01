import React from 'react';

import growTogether from './../assets/images/illustration-grow-together.svg';
import flowingConversation from './../assets/images/illustration-flowing-conversation.svg';
import yourUsers from './../assets/images/illustration-your-users.svg';

function Community() {
	return (
		<article className="community">
			<section className="community--wrapper">
				<div className="community--flex">
					<h2>Grow Together</h2>
					<img src={growTogether} alt="..." />
				</div>
				<p>
					Generate meaningful discussions with your audience and build a strong,
					loyal community. Think of the insightful conversations you miss out on with
					a feedback form.
				</p>
			</section>
			<section className="community--wrapper">
				<div className="community--flex">
					<h2>Flowing Conversations</h2>
					<img src={flowingConversation} alt="..." />
				</div>
				<p>
					You wouldn't paginate a conversation in real life, so why do it online? Our
					threads have just-in-time loading for a more natural flow.
				</p>
			</section>
			<section className="community--wrapper">
				<div className="community--flex">
					<h2>Your Users</h2>
					<img src={yourUsers} alt="..." />
				</div>
				<p>
					It takes no time at all to integrate Huddle with your app's authentication
					solution. This means, once signed in to your app, your users can start
					chatting immediately.
				</p>
			</section>
		</article>
	);
}

export default Community;
