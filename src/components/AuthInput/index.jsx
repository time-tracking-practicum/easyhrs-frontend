import { useEffect, useState } from 'react';
import './AuthInput.css';

export default function AuthInput({
	name,
	showLable,
	hidden,
	text,
	autoComplete,
}) {
	const [passwordIsShown, setPasswordIsShown] = useState(true);

	useEffect(() => {
		if (hidden) {
			setPasswordIsShown(false);
		}
	}, [hidden]);

	function showPassword() {
		setPasswordIsShown(!passwordIsShown);
	}

	return (
		<>
			<div className="authForm__input-container">
				{showLable && (
					<label htmlFor={name} className="authForm__lable">
						{name}
					</label>
				)}
				<input
					type={passwordIsShown ? 'text' : 'password'}
					name={name}
					id={name}
					className="authForm__input"
					autoComplete={autoComplete}
				/>
				{hidden && (
					<div
						className="authForm__showPassBtn"
						onClick={showPassword}
						aria-hidden="true"
					/>
				)}
			</div>
			{text && <span className="authForm__inputHint">{text}</span>}
		</>
	);
}
