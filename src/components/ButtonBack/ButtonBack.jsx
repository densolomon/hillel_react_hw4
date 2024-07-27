const ButtonBack = ({
handleClick,
buttonText
}) => {
	return (
		<button onClick={handleClick} className="back-button">
			{buttonText}
		</button>
	);
};

export default ButtonBack;