import { useState, useEffect, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { isEmail } from 'validator';

export function useFormAndValidation(inputValues) {
	const [values, setValues] = useState(inputValues);
	const [errors, setErrors] = useState(inputValues);
	const [isValid, setIsValid] = useState(true);
	const [validEmail, setValidEmail] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		
		setValues({ ...values, [name]: value });
		setErrors({ ...errors, [name]: e.target.validationMessage });
		setIsValid(e.target.closest('form').checkValidity());
		if ((e.target.name === 'email')) {
            setErrors({ ...errors, [name]: (!isEmail(value)) ? (e.target.validationMessage || 'Некорректный Email') : '' });
            setValidEmail(isEmail(value));
            setIsValid(isEmail(value) && e.target.closest('form').checkValidity());
        }
		
		if ((e.target.name === 'confimPassword')) {
			if ((values.password !== e.target.value) && values.password) {
				setErrors({ ...errors, [name]: ((values.password !== e.target.value)) ? (e.target.validationMessage || 'Введенные пароли не совпадают') : '' });
				setIsValid(false);
			} 
		}
		if ((e.target.name === 'password')) {
			if ((values.confimPassword !== e.target.value) && values.confimPassword) {
				setErrors({ ...errors, [name]: ((values.confimPassword !== e.target.value)) ? (e.target.validationMessage || 'Введенные пароли не совпадают') : '' });
				setIsValid(false);
			} 
		}
	};

	useEffect(() => {
		 if (!validEmail) {
            setIsValid(false);
        }

    }, [handleChange]);

	const resetForm = useCallback(
		(newValues = inputValues, newErrors = inputValues, newIsValid = false) => {
			setValues(newValues);
			setErrors(newErrors);
			setIsValid(newIsValid);
		},
		[setValues, setErrors, setIsValid, inputValues]
	);

	return {
		values,
		handleChange,
		errors,
		isValid,
		resetForm,
		setValues,
		setIsValid,
	};
}
