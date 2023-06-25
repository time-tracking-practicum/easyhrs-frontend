import './ProfileFormButton.css';

export default function ProfileFormButton({ onclick, buttonImg, text }) {
	return (
		<button className="profile__form-button" type="button" onClick={onclick}>
			<img
				className="profile__form-button-img"
				alt="Картинка кнопки"
				src={buttonImg}
			/>
			{text}
		</button>
	);
}
