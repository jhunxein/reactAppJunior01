import React from 'react';

import Hero from './components/Hero';
import DataPresentation from './components/DataPresentation';
import Community from './components/Community';
import ReadyToBuild from './components/ReadyToBuild';

function Main() {
	return (
		<main>
			<Hero />
			<DataPresentation />
			<Community />
			<ReadyToBuild />
		</main>
	);
}

export default Main;
