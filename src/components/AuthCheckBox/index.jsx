import './AuthCheckBox.css';
import React, { useState } from 'react';

export default function AuthCheckBox() {
	const [isChecked, setIsChecked] = useState(true);

	function handleChange() {
		setIsChecked(!isChecked);
	}

	return (
		<label className="authForm__checkbox-container" htmlFor="hello">
			<input
				type="checkbox"
				id="hello"
				className="authForm__checkbox"
				checked={isChecked}
				onChange={handleChange}
			/>
			<span
				className={`authForm__checkbox-label ${
					isChecked ? 'authForm__checkbox-label_checked' : ''
				}`}
				aria-hidden
			/>
			Запомнить меня
		</label>
	);
}
