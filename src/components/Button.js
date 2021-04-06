function Button(props) {
	const { classes = '', type = '', text = '' } = props;

	return (
		<button className={classes} type={type}>
			{text}
		</button>
	);
}

export default Button;
