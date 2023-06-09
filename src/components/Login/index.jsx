import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm';
import AuthInput from '../AuthInput';
import * as text from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import authApi from '../../utils/AuthApi';
import userApi from '../../utils/UserApi';

export default function Login({
	onFormChange,
	remindPass,
	isVisible,
	onSetCurrentUser,
}) {
	const nav = useNavigate();

	const { values, handleChange, isValid, errors } = useFormAndValidation({
		email: '',
		password: '',
	});
	const [isCheckboxChecked, setisCheckboxChecked] = useState(true);
	const [backendErr, setBackendErr] = useState('');

	const toggleCheckBox = () => {
		setisCheckboxChecked(!isCheckboxChecked);
	};

	async function login() {
		if (isValid) {
			try {
				setBackendErr('');
				const loginData = await authApi.login({
					email: values.email,
					password: values.password,
				});
				if (isCheckboxChecked) {
					localStorage.setItem('token', loginData.auth_token);
					nav('/main');
					const userData = await userApi.getCurrentUser();
					onSetCurrentUser({
						email: userData.email,
						firstName: userData.first_name,
						lastName: userData.last_name,
						username: userData.username,
						id: userData.id,
						photo: userData.photo,
					});
					return;
				}
				sessionStorage.setItem('token', loginData.auth_token);
				const userData = await userApi.getCurrentUser();
				onSetCurrentUser({
					email: userData.email,
					firstName: userData.first_name,
					lastName: userData.last_name,
					username: userData.username,
					id: userData.id,
					photo: userData.photo,
				});
				nav('/main');
			} catch (error) {
				const err = await error;
				if (err.non_field_errors) {
					setBackendErr(
						'Не верный e-mail или пароль. Проверьте правильность введенных данных.'
					);
				}
			}
		}
	}

	const onSubmit = (e) => {
		e.preventDefault();
		login();
	};

	return (
		<AuthForm
			isValid={isValid}
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
			onError={backendErr}
			backendErr={backendErr}
		>
			<AuthInput
				email
				name="email"
				placeholder={text.emailPlaceholder}
				autoComplete="email"
				onChange={handleChange}
				min={1}
				max={254}
				required
				onError={errors.email}
				errText={errors.email}
			/>
			<AuthInput
				password
				name="password"
				placeholder={text.passPlaceholder}
				hidden
				autoComplete="current-password"
				onChange={handleChange}
				min={6}
				required
				onError={errors.password}
				errText={errors.password}
			/>
		</AuthForm>
	);
}
