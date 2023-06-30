import './AuthCheckBox.css';

export default function AuthCheckBox({ isCheckboxChecked, toggleCheckBox }) {
	return (
		<div className="authForm__checkbox-container">
			<label
				className={`authForm__checkbox-label ${
					isCheckboxChecked ? 'authForm__checkbox-label_checked' : ''
				}`}
				aria-hidden
				htmlFor="hello"
			>
				<input
					type="checkbox"
					id="hello"
					className="authForm__checkbox"
					checked={isCheckboxChecked}
					onChange={toggleCheckBox}
				/>
			</label>
			<p className="authForm__checkbox-text">Запомнить меня</p>
		</div>
	);
}
