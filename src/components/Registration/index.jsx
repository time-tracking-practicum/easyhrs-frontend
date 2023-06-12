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
		Email: '',
		Password: '',
		ConfimPassword: '',
	});
	const [isCheckboxChecked, setisCheckboxChecked] = useState(true);

	const toggleCheckBox = () => {
		setisCheckboxChecked(!isCheckboxChecked);
	};

	async function registration() {
		if (isValid) {
			try {
				await authApi.register({
					email: values.Email,
					password: values.Password,
					full_name: 'ФИО',
				});
				const loginData = await authApi.login({
					email: values.Email,
					password: values.Password,
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
		if (values.Password !== values.ConfimPassword) {
			console.log('Пароли не совпадают!');
			return;
		}
		registration();
	};

	return (
		<AuthForm
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
		>
			<AuthInput
				email
				name="Email"
				showLable
				placeholder={text.emailPlaceholder}
				autoComplete="email"
				onChange={handleChange}
				onError={errors.Email}
				min={1}
				required
			/>
			<AuthInput
				password
				name="Password"
				placeholder={text.passPlaceholder}
				hidden
				autoComplete="current-password"
				text={text.passInputHint}
				onChange={handleChange}
				onError={errors.Password}
				min={8}
				required
			/>
			<AuthInput
				password
				name="ConfimPassword"
				placeholder={text.repeatPassPlaceholder}
				hidden
				autoComplete="off"
				onChange={handleChange}
				onError={errors.ConfimPassword}
				min={8}
				required
			/>
		</AuthForm>
	);
}
