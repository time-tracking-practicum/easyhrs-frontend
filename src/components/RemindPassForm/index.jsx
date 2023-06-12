import AuthForm from '../AuthForm';
import AuthInput from '../AuthInput';
import * as text from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

export default function RemindPassForm({ onFormChange, isVisible }) {
	const { handleChange, errors } = useFormAndValidation({ Email: '' });

	return (
		<AuthForm
			isVisible={isVisible}
			onFormChange={onFormChange}
			title={text.passFormTitle}
			formHintText={text.passFormInputHint}
			submitBtnText={text.passFormSubmitBtnText}
		>
			<AuthInput
				email
				name="Email"
				placeholder={text.emailPlaceholder}
				showLable
				autoComplete="email"
				onChange={handleChange}
				onError={errors.Email}
				min={1}
				required
			/>
		</AuthForm>
	);
}
