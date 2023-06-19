import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm';
import AuthInput from '../AuthInput';
import * as text from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import authApi from '../../utils/AuthApi';

export default function Login({ onFormChange, remindPass, isVisible }) {
	const nav = useNavigate();

	const { values, handleChange, isValid, errors } = useFormAndValidation({
		email: '',
		password: '',
	});
	const [isCheckboxChecked, setisCheckboxChecked] = useState(true);

	const toggleCheckBox = () => {
		setisCheckboxChecked(!isCheckboxChecked);
	};

	async function login() {
		if (isValid) {
			try {
				const loginData = await authApi.login({
					email: values.email,
					password: values.password,
				});
				if (isCheckboxChecked) {
					localStorage.setItem('token', loginData.auth_token);
					nav('/main');
					return;
				}
				sessionStorage.setItem('token', loginData.auth_token);
				nav('/main');
			} catch (error) {
				console.log(error);
			}
		}
	}

	const onSubmit = (e) => {
		e.preventDefault();
		login();
	};

	return (
		<AuthForm
			onSubmit={onSubmit}
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
			isCheckboxChecked={isCheckboxChecked}
			toggleCheckBox={toggleCheckBox}
		>
			<AuthInput
				email
				name="email"
				placeholder={text.emailPlaceholder}
				autoComplete="email"
				onChange={handleChange}
				onError={errors.email}
				min={1}
				required
			/>
			<AuthInput
				password
				name="password"
				placeholder={text.passPlaceholder}
				hidden
				autoComplete="current-password"
				onChange={handleChange}
				onError={errors.password}
				min={8}
				required
			/>
		</AuthForm>
	);
}
