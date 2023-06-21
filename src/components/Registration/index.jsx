import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm';
import AuthInput from '../AuthInput';
import * as text from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import authApi from '../../utils/AuthApi';

export default function Registration({ onFormChange, isVisible }) {
	const nav = useNavigate();
	const { values, handleChange, isValid, errors } = useFormAndValidation({
		email: '',
		password: '',
		confimPassword: '',
	});
	const [isCheckboxChecked, setisCheckboxChecked] = useState(true);

	const toggleCheckBox = () => {
		setisCheckboxChecked(!isCheckboxChecked);
	};

	async function registration() {
		if (isValid) {
			try {
				await authApi.register({
					email: values.email,
					password: values.password,
					full_name: 'ФИО',
				});
				const loginData = await authApi.login({
					email: values.email,
					password: values.password,
				});
				if (loginData && isCheckboxChecked) {
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
		if (values.password !== values.confimPassword) {
			console.log('Пароли не совпадают!');
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
			onError={errors.email || errors.password || errors.confimPassword}
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
				required
			/>
			<AuthInput
				password
				name="password"
				placeholder={text.passPlaceholder}
				hidden
				autoComplete="current-password"
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
				autoComplete="off"
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
