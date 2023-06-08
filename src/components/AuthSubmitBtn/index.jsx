import './AuthSubmitBtn.css';

export default function AuthSubmitBtn({ buttonText, onSubmit }) {
	return (
		<button className="authForm__submit-button" onClick={onSubmit}>
			{buttonText}
		</button>
	);
}
