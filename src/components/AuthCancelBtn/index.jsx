import './AuthCancelBtn.css';

export default function AuthCancelBtn({ buttonText, onCancelButton }) {
	return (
		<button
			className="authForm__cancel-button"
			type="button"
			onClick={onCancelButton}
		>
			{buttonText}
		</button>
	);
}
