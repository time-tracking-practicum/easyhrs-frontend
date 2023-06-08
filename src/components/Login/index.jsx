import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm';
import AuthInput from '../AuthInput';
import * as text from '../../utils/constants';

export default function Login({ onFormChange, remindPass, isVisible }) {
	const nav = useNavigate();

	function onSubmit() {
		nav('/main');
	}

	return (
		<AuthForm
			onSubmit={() => onSubmit()}
			isVisible={isVisible}
			remindPass={remindPass}
			onFormChange={onFormChange}
			title={text.loginFormTitle}
			formHintText={text.loginFormInputHint}
			formHintButtonText={text.loginFormHitnButtonText}
			submitBtnText={text.loginFormSubmitBtnText}
			forgetPassBtnText={text.loginFormForgetPassText}
			showForgetPassBtn
			showCheckBox
		>
			<AuthInput name="Email" showLable autoComplete="email" />
			<AuthInput name="Password" hidden autoComplete="current-password" />
		</AuthForm>
	);
}
