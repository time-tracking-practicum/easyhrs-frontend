/* eslint-disable jsx-a11y/label-has-associated-control */
import './ProfileForm.css';

import inputKey from '../../images/icon-inputKey.svg';
import inputArrow from '../../images/icon-inputArrow.svg';

export default function ProfileForm() {
	return (
		<form className="profile__form">
			<h2 className="profile__subtitle">Персональные данные</h2>
			<fieldset className="profile__form-fieldset">
				<div className="profile__input-container">
					<input
						type="text"
						name="name"
						id="name"
						disabled
						className="profile__input"
						value="ФИО"
					/>
					<img
						src={inputArrow}
						alt="Иконка Стрелочка"
						className="profile__input-icon"
					/>
				</div>
				<div className="profile__input-container">
					<input
						type="text"
						name="email"
						id="email"
						disabled
						className="profile__input"
						value="Email"
					/>
					<img
						src={inputArrow}
						alt="Иконка Стрелочка"
						className="profile__input-icon"
					/>
				</div>
				<div className="profile__input-container">
					<label htmlFor="password" className="profile__input-label">
						Пароль
					</label>
					<img
						src={inputKey}
						alt="Иконка Ключ"
						className="profile__input-icon profile__input-icon-key"
					/>
					<input
						type="text"
						name="password"
						id="password"
						disabled
						className="profile__input"
						value="Обновлен 1 месяц назад"
					/>
					<img
						src={inputArrow}
						alt="Иконка Стрелочка"
						className="profile__input-icon "
					/>
				</div>
			</fieldset>
		</form>
	);
}
