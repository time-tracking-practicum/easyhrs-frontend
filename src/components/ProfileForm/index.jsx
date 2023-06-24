import './ProfileForm.css';
import { useEffect, useState } from 'react';
import buttonImg from '../../images/icon-profileAddButton.svg';

export default function ProfileForm({
	showInputs,
	children,
	text,
	onSubmit,
	showSubmitButton,
}) {
	const [inputsShown, setinputsShown] = useState(false);

	useEffect(() => {
		if (showInputs) {
			setinputsShown(true);
		}
	}, []);

	const toggleInputs = () => {
		setinputsShown(!inputsShown);
	};

	return (
		<>
			{!inputsShown && (
				<button
					className="profile__form-button"
					type="button"
					onClick={toggleInputs}
				>
					<img
						className="profile__form-button-img"
						alt="Картинка кнопки"
						src={buttonImg}
					/>
					{text}
				</button>
			)}
			{inputsShown && (
				<form
					name="nameForm"
					action="#"
					className="profile__form"
					onSubmit={onSubmit}
				>
					{children}
					{showSubmitButton && (
						<button
							type="submit"
							className="profile__submit-btn"
							onClick={onSubmit}
						>
							OK
						</button>
					)}
				</form>
			)}
		</>
	);
}
