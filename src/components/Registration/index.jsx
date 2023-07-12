import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm';
import AuthInput from '../AuthInput';
import * as text from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import authApi from '../../utils/AuthApi';
import userApi from '../../utils/UserApi';

export default function Registration({
	onFormChange,
	isVisible,
	onSetCurrentUser,
}) {
	const nav = useNavigate();
	const { values, handleChange, isValid, errors } = useFormAndValidation({
		email: '',
		password: '',
		confimPassword: '',
	});
	const [isCheckboxChecked, setisCheckboxChecked] = useState(true);
	const [backendErr, setBackendErr] = useState('');

	const toggleCheckBox = () => {
		setisCheckboxChecked(!isCheckboxChecked);
	};

	async function registration() {
		if (isValid) {
			try {
				setBackendErr('');
				await authApi.register({
					email: values.email,
					password: values.password,
				});
				const loginData = await authApi.login({
					email: values.email,
					password: values.password,
				});
				if (isCheckboxChecked) {
					localStorage.setItem('token', loginData.auth_token);
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
				if (err.email) {
					setBackendErr('E-mail уже зарегистрирован.');
				}
			}
		}
	}

	const onSubmit = (e) => {
		e.preventDefault();
		if (values.password !== values.confimPassword) {
			return;
		}
		registration();
	};

	return (
		<AuthForm
			isValid={isValid}
			onSubmit={onSubmit}
			isVisible={isVisible}
			onFormChange={onFormChange}
			title={text.regFormTitle}
			formHintText={text.regFormInputHint}
			formHintButtonText={text.regFormHitnButtonText}
			submitBtnText={text.regFormSubmitBtnText}
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
				errText={errors.email}
				onChange={handleChange}
				onError={errors.email}
				min={1}
				max={254}
				required
			/>
			<AuthInput
				password
				name="password"
				placeholder={text.passPlaceholder}
				hidden
				autoComplete="new-password"
				text={text.passInputHint}
				errText={errors.password}
				onChange={handleChange}
				onError={errors.password}
				min={6}
				required
				isValid={isValid}
			/>
			<AuthInput
				password
				name="confimPassword"
				placeholder={text.repeatPassPlaceholder}
				hidden
				autoComplete="new-password"
				errText={errors.confimPassword}
				onChange={handleChange}
				onError={errors.confimPassword}
				min={6}
				required
				isValid={isValid}
			/>
		</AuthForm>
	);
}
