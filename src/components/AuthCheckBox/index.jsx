import './AuthCheckBox.css';

export default function AuthCheckBox({ isCheckboxChecked, toggleCheckBox }) {
	console.log(isCheckboxChecked);
	return (
		<label className="authForm__checkbox-container" htmlFor="hello">
			<input
				type="checkbox"
				id="hello"
				className="authForm__checkbox"
				checked={isCheckboxChecked}
			/>
			<span
				className={`authForm__checkbox-label ${
					isCheckboxChecked ? 'authForm__checkbox-label_checked' : ''
				}`}
				aria-hidden
				onClick={toggleCheckBox}
			/>
			Запомнить меня
		</label>
	);
}
