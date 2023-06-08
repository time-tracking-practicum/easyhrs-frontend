import AuthForm from '../AuthForm';
import AuthInput from '../AuthInput';
import * as text from '../../utils/constants';

export default function RemindPassForm({ onFormChange, isVisible }) {
	return (
		<AuthForm
			isVisible={isVisible}
			onFormChange={onFormChange}
			title={text.passFormTitle}
			formHintText={text.passFormInputHint}
			submitBtnText={text.passFormSubmitBtnText}
		>
			<AuthInput name="Email" showLable autoComplete="email" />
		</AuthForm>
	);
}
