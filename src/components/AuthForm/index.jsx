import logo from '../../images/logo.svg';
import './AuthForm.css';

import AuthSubmitBtn from '../AuthSubmitBtn';
import AuthCheckBox from '../AuthCheckBox';

export default function AuthForm({
	onSubmit,
	isVisible,
	remindPass,
	onFormChange,
	title,
	formName,
	formHintText,
	formHintButtonText,
	children,
	showForgetPassBtn,
	showCheckBox,
	submitBtnText,
	forgetPassBtnText,
	isCheckboxChecked,
	toggleCheckBox,
}) {
	return (
		<div className={`authForm ${isVisible ? 'authForm_visible' : ''}`}>
			<img src={logo} alt="Логотип" className="authForm__logo" />
			<h1 className="authForm__title">{title}</h1>
			<p className="authForm__text">
				{formHintText}
				{formHintButtonText && (
					<button className="authForm__text-button" onClick={onFormChange}>
						{formHintButtonText}
					</button>
				)}
			</p>
			<form
				className="authForm__form"
				action="#"
				name={formName}
				onSubmit={onSubmit}
			>
				<fieldset className="authForm__fieldset">{children}</fieldset>
				{showForgetPassBtn && (
					<button className="authForm__forgotPassButton" onClick={remindPass}>
						{forgetPassBtnText}
					</button>
				)}
				{showCheckBox && (
					<AuthCheckBox
						isCheckboxChecked={isCheckboxChecked}
						toggleCheckBox={toggleCheckBox}
					/>
				)}
				<AuthSubmitBtn buttonText={submitBtnText} />
			</form>
		</div>
	);
}
