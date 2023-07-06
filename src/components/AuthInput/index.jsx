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
	errText,
	onChange,
	pattern,
	min,
	max,
	required,
	onError,
	isValid,
}) {
	const [passwordIsShown, setPasswordIsShown] = useState(false);

	function showPassword() {
		setPasswordIsShown(!passwordIsShown);
	}

	return (
		<>
			<div
				className={`authForm__input-container ${
					!isValid && onError && 'authForm__input-container-error'
				}`}
			>
				<input
					type={
						(email && 'email') ||
						(password && `${passwordIsShown ? 'text' : 'password'}`)
					}
					name={name}
					id={name}
					pattern={pattern}
					className={`authForm__input ${
						!isValid && onError && 'authForm__input_error'
					}`}
					autoComplete={autoComplete}
					onChange={onChange}
					minLength={min}
					maxLength={max}
					required={required}
					placeholder={placeholder}
				/>
				{!isValid && onError && <div className="authForm__errorIcon" />}
				{hidden && !onError && (
					<div
						className={
							passwordIsShown
								? 'authForm__showPassBtn_active'
								: 'authForm__showPassBtn'
						}
						onClick={showPassword}
						aria-hidden="true"
					/>
				)}
			</div>
			{text && !onError && <span className="authForm__inputHint">{text}</span>}
			{onError && !isValid && (
				<span className="authForm__input-errText">{errText}</span>
			)}
		</>
	);
}
