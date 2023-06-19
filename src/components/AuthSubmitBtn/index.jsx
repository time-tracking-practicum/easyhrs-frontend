import './AuthSubmitBtn.css';

export default function AuthSubmitBtn({ buttonText, showCancelButton }) {
	return (
		<button
			className={`authForm__submit-button ${
				showCancelButton ? 'authForm__submit-button_small' : ''
			}`}
			type="submit"
		>
			{buttonText}
		</button>
	);
}
