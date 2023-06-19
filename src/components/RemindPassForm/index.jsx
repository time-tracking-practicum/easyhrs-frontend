import AuthForm from '../AuthForm';
import AuthInput from '../AuthInput';
import * as text from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

export default function RemindPassForm({
	onFormChange,
	isVisible,
	onCancelButton,
}) {
	const { handleChange, errors } = useFormAndValidation({ email: '' });

	return (
		<AuthForm
			isVisible={isVisible}
			onFormChange={onFormChange}
			title={text.passFormTitle}
			formHintText={text.passFormInputHint}
			submitBtnText={text.passFormSubmitBtnText}
			showCancelButton
			cancelBtnText={text.passFormCancelBtnText}
			onCancelButton={onCancelButton}
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
