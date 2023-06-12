import './AuthCheckBox.css';

export default function AuthCheckBox({ isCheckboxChecked, toggleCheckBox }) {
	return (
		<label className="authForm__checkbox-container" htmlFor="hello">
			<input
				type="checkbox"
				id="hello"
				className="authForm__checkbox"
				checked={isCheckboxChecked}
				onChange={toggleCheckBox}
			/>
			<span
				className={`authForm__checkbox-label ${
					isCheckboxChecked ? 'authForm__checkbox-label_checked' : ''
				}`}
				aria-hidden
			/>
			Запомнить меня
		</label>
	);
}
