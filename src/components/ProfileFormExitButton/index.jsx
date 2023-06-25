import './ProfileFormExitButton.css';

export default function ProfileFormExitButton({ text, onclick }) {
	return (
		<button className="profile__exitBtn" type="button" onClick={onclick}>
			{text}
		</button>
	);
}
