import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [windowSize, setWindowSize] = useState(0);

	// For email input field
	const [email, setEmail] = useState('');
	const [isEmailError, setIsEmailError] = useState(false);

	const handleWindowResize = () => {
		const width = window.innerWidth;
		setWindowSize(width);
	};

	useEffect(() => {
		handleWindowResize();
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	const handleInputChange = (e) => {
		const value = e.target.value;
		setEmail(value);
	};

	const handleEmailFormSubmission = (e) => {
		e.preventDefault();

		const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		if (!email || !regEmail.test(email)) {
			return setIsEmailError(true);
		}

		setEmail('');
		setIsEmailError(false);
	};

	return (
		<AppContext.Provider
			value={{
				windowSize,
				email,
				handleInputChange,
				isEmailError,
				handleEmailFormSubmission,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
