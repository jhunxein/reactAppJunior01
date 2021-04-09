import React from 'react';

import communities from './../assets/images/icon-communities.svg';
import messages from './../assets/images/icon-messages.svg';

import './../css/dataPresentation.css';

function DataPresentation() {
	return (
		<div className="container presentation">
			<section className="presentation--wrapper">
				<div className="flex--wrapper fix--width presentation__flex">
					<h2 aria-hidden={true} className="presentation__title">
						1.4k+
					</h2>
					<img src={communities} alt="" className="presentation__icon" />
					<p className="hide--elem">one thousand four hundred plus</p>
					<p className="presentation__desc">Communities Formed</p>
				</div>
			</section>
			<section className="presentation--wraper">
				<div className="flex--wrapper fix--width presentation__flex">
					<h2 aria-hidden={true} className="presentation__title">
						2.7m+
					</h2>
					<img src={messages} alt="" className="presentation__icon" />
					<p className="hide--elem">two million seven hundred plus</p>
					<p className="presentation__desc last--margin__presentation__desc">
						Messages Sent
					</p>
				</div>
			</section>
		</div>
	);
}

export default DataPresentation;
