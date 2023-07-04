import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm';
import AuthInput from '../AuthInput';
import * as text from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import userApi from '../../utils/UserApi';

export default function RemindPassForm({
	onFormChange,
	isVisible,
	onCancelButton,
}) {
	const { handleChange, errors, values, resetForm, isValid, setIsValid } =
		useFormAndValidation({ email: '' });
	const nav = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsValid(false);
			const result = await userApi.remindUserPassword(values.email);
			if (result.status === 204) {
				nav('/');
				resetForm();
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<AuthForm
			onSubmit={onSubmit}
			isVisible={isVisible}
			onFormChange={onFormChange}
			title={text.passFormTitle}
			formHintText={text.passFormInputHint}
			submitBtnText={text.passFormSubmitBtnText}
			showCancelButton
			cancelBtnText={text.passFormCancelBtnText}
			onCancelButton={onCancelButton}
			isValid={isValid}
		>
			<AuthInput
				email
				name="email"
				placeholder={text.emailPlaceholder}
				showLable
				autoComplete="email"
				onChange={handleChange}
				onError={errors.email}
				min={1}
				required
			/>
		</AuthForm>
	);
}
