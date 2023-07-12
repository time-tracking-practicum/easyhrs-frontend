import { useState } from 'react';
import './ResetPasswordForm.css';
import {
	PASSWORD_FROMS_TEXT as TEXT,
	FORM_STEP as STEP,
	INITIAL_FORM_STATE as INIT_STATE,
} from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import FormSwitcher from './FormSwitcher';

const currenHeadingText = (currentForm) =>
	currentForm === STEP.RESET.FIRST ||
	currentForm === STEP.RESET.SECOND ||
	currentForm === STEP.RESET.THIRD
		? TEXT.RESET.HEADING
		: TEXT.FORGOT.HEADING;

export default function ResetPasswordForm({ handleSidebarClose }) {
	const { values, handleChange, isValid, errors, setValues } =
		useFormAndValidation(INIT_STATE);

	const [currentForm, setCurrentForm] = useState(STEP.RESET.FIRST);

	const resetValues = () => {
		setValues(INIT_STATE);
	};

	return (
		<div className="resetForm">
			<h1 className="resetForm__title">{currenHeadingText(currentForm)}</h1>

			<FormSwitcher
				setCurrentForm={setCurrentForm}
				currentForm={currentForm}
				setValues={setValues}
				errors={errors}
				resetValues={resetValues}
				handleChange={handleChange}
				isValid={isValid}
				values={values}
				handleSidebarClose={handleSidebarClose}
			/>
		</div>
	);
}
