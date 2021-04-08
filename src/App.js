import React from 'react';
import './css/app.css';

// COMPONENTS
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
	return (
		<div className="container--max">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
