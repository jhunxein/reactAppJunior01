import React from 'react';

function DataPresentation() {
	return (
		<div className="presentation">
			<section className="presentation--wrapper">
				<h2 aria-hidden={true}>1.4k+</h2>
				<p className="hide--elem">one thousand four hundred plus</p>
				<p>Communities Formed</p>
			</section>
			<section className="presentation--wraper">
				<h2 aria-hidden={true}>2.7m+</h2>
				<p className="hide--elem">two million seven hundred plus</p>
				<p>Messages Sent</p>
			</section>
		</div>
	);
}

export default DataPresentation;
