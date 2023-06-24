import './ProfileAvatarSection.css';
import defaultImg from '../../images/avatar.svg';
import buttonImg from '../../images/icon-pencil_violet.svg';

export default function ProfileAvatarSection({ image, text }) {
	return (
		<div className="profile__avatar-container">
			<img
				src={image ?? defaultImg}
				alt="Аватар пользователя"
				className="profile__avatar-image"
			/>
			<button className="profile__avatar-button" type="button">
				<img
					className="profile__avatar-button-img"
					alt="Картинка кнопки"
					src={buttonImg}
				/>
				{text}
			</button>
		</div>
	);
}
