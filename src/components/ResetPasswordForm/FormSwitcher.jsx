import { FORM_STEP as STEP } from '../../utils/constants';
import ForgotFirstStep from './forms/ForgotFirstStep';
import ForgotSecondStep from './forms/ForgotSecondStep';
import ResetFirstStep from './forms/ResetFirstStep';
import ResetSecondStep from './forms/ResetSecondStep';
import ResetThirdStep from './forms/ResetThirdStep';

const FormSwitcher = ({
	currentForm,
	values,
	setCurrentForm,
	resetValues,
	errors,
	handleSidebarClose,
	handleChange,
	isValid,
}) => {
	// Ниже расположена логика сабмита всех форм по порядку
	const handleSubmitResetFirst = () => {
		setCurrentForm(STEP.RESET.SECOND);
		resetValues();
	};

	const handleSubmitResetSecond = () => {
		setCurrentForm(STEP.RESET.THIRD);
		resetValues();
	};

	const handleSubmitResetThird = () => {
		handleSidebarClose();
		resetValues();
	};

	const handleSubmitForgotFirst = () => {
		setCurrentForm(STEP.FORGOT.SECOND);
		resetValues();
	};

	const handleSubmitForgotSecond = () => {
		handleSidebarClose();
		resetValues();
	};

	let form;

	switch (currentForm) {
		case STEP.RESET.FIRST:
			form = (
				<ResetFirstStep
					errors={errors}
					handleChange={handleChange}
					isValid={isValid}
					values={values}
					onSubmit={handleSubmitResetFirst}
					onButtonsClick={[
						() => {
							setCurrentForm(STEP.FORGOT.FIRST);
						},
						handleSidebarClose,
					]}
				/>
			);
			break;
		case STEP.RESET.SECOND:
			form = (
				<ResetSecondStep
					errors={errors}
					handleChange={handleChange}
					isValid={isValid}
					values={values}
					onSubmit={handleSubmitResetSecond}
					onButtonsClick={[handleSidebarClose]}
				/>
			);
			break;
		case STEP.RESET.THIRD:
			form = (
				<ResetThirdStep
					errors={errors}
					handleChange={handleChange}
					isValid={isValid}
					values={values}
					onSubmit={handleSubmitResetThird}
				/>
			);
			break;
		case STEP.FORGOT.FIRST:
			form = (
				<ForgotFirstStep
					errors={errors}
					handleChange={handleChange}
					isValid={isValid}
					values={values}
					onSubmit={handleSubmitForgotFirst}
				/>
			);
			break;
		case STEP.FORGOT.SECOND:
			form = (
				<ForgotSecondStep
					errors={errors}
					handleChange={handleChange}
					isValid={isValid}
					values={values}
					onSubmit={handleSubmitForgotSecond}
				/>
			);
			break;
		default:
			break;
	}
	return form;
};

export default FormSwitcher;
