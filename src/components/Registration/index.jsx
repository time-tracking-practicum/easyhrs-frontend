import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm';
import AuthInput from '../AuthInput';
import * as text from '../../utils/constants';

export default function Registration({ onFormChange, isVisible }) {
	const nav = useNavigate();

	function onSubmit(e) {
		e.preventDefault();
		nav('/main');
	}

	return (
		<AuthForm
			onSubmit={(e) => onSubmit(e)}
			isVisible={isVisible}
			onFormChange={onFormChange}
			title={text.regFormTitle}
			formHintText={text.regFormInputHint}
			formHintButtonText={text.regFormHitnButtonText}
			submitBtnText={text.regFormSubmitBtnText}
			showCheckBox
		>
			<AuthInput name="Email" showLable autoComplete="email" />
			<AuthInput
				name="Password"
				hidden
				autoComplete="current-password"
				text={text.passInputHint}
			/>
			<AuthInput name="OneMorePass" hidden autoComplete="off" />
		</AuthForm>
	);
}
