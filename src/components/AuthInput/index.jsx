import { useState } from 'react';
import './AuthInput.css';

export default function AuthInput({
	email,
	password,
	name,
	placeholder,
	hidden,
	text,
	autoComplete,
	onChange,
	min,
	max,
	required,
	onError,
}) {
	const [passwordIsShown, setPasswordIsShown] = useState(false);

	function showPassword() {
		setPasswordIsShown(!passwordIsShown);
	}

	return (
		<>
			<div
				className={`authForm__input-container ${
					onError ? 'authForm__input-container-error' : ''
				}`}
			>
				<input
					type={
						(email && 'email') ||
						(password && `${passwordIsShown ? 'text' : 'password'}`)
					}
					name={name}
					id={name}
					className="authForm__input"
					autoComplete={autoComplete}
					onChange={onChange}
					minLength={min}
					maxLength={max}
					required={required}
					placeholder={placeholder}
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
