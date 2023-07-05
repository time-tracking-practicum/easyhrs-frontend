import logo from '../../images/authform-logo.svg';
import './AuthForm.css';

import AuthSubmitBtn from '../AuthSubmitBtn';
import AuthCheckBox from '../AuthCheckBox';
import AuthCancelBtn from '../AuthCancelBtn';

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
	showCancelButton,
	cancelBtnText,
	onCancelButton,
	onError,
	isValid,
	backendErr,
}) {
	return (
		<div className={`authForm ${isVisible ? 'authForm_visible' : ''}`}>
			<img src={logo} alt="Логотип" className="authForm__logo" />
			<h1 className="authForm__title">{title}</h1>
			<p className="authForm__text">
				{formHintText}
				{formHintButtonText && (
					<button
						className="authForm__text-button"
						type="button"
						onClick={onFormChange}
					>
						{formHintButtonText}
					</button>
				)}
			</p>
			{onError && <span className="authForm-error">{backendErr}</span>}
			<form
				className="authForm__form"
				action="#"
				name={formName}
				onSubmit={onSubmit}
			>
				<fieldset className="authForm__fieldset">{children}</fieldset>
				{showForgetPassBtn && (
					<button
						className="authForm__forgotPassButton"
						type="button"
						onClick={remindPass}
					>
						{forgetPassBtnText}
					</button>
				)}
				{showCheckBox && (
					<AuthCheckBox
						isCheckboxChecked={isCheckboxChecked}
						toggleCheckBox={toggleCheckBox}
					/>
				)}
				{showCancelButton ? (
					<div className="authForm__sbmtBtnContainer">
						<AuthSubmitBtn
							buttonText={submitBtnText}
							showCancelButton
							isValid={isValid}
						/>
						<AuthCancelBtn
							buttonText={cancelBtnText}
							onCancelButton={onCancelButton}
						/>
					</div>
				) : (
					<AuthSubmitBtn buttonText={submitBtnText} isValid={isValid} />
				)}
			</form>
		</div>
	);
}
