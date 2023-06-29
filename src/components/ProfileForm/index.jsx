import './ProfileForm.css';
import { useEffect, useState } from 'react';

import ProfileFormButton from '../ProfileFormButton';

export default function ProfileForm({
	showInputs,
	children,
	text,
	onSubmit,
	showSubmitButton,
	formName,
	buttonIcon,
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
				<ProfileFormButton
					buttonImg={buttonIcon}
					onclick={toggleInputs}
					text={text}
				/>
			)}
			{inputsShown && (
				<form
					name={formName}
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
