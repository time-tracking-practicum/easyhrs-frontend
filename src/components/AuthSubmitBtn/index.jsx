import './AuthSubmitBtn.css';

export default function AuthSubmitBtn({ buttonText, showCancelButton, isValid }) {
	return (
		<button
			className={`authForm__submit-button ${
				showCancelButton ? 'authForm__submit-button_small' : ''
			} ${
				isValid ? '' : 'authForm__submit-button_disabled'
			}`}
			type="submit"
		>
			{buttonText}
		</button>
	);
}
