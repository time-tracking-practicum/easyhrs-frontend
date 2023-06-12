import './AuthSubmitBtn.css';

export default function AuthSubmitBtn({ buttonText }) {
	return (
		<button className="authForm__submit-button" type="submit">
			{buttonText}
		</button>
	);
}
