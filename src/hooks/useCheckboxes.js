import { useState } from 'react';

const useCheckboxes = (initialValue) => {
	const [checkboxesValue, setValue] = useState(initialValue);

	const handleChange = (e) => {
		const { name, checked } = e.target;
		setValue((prevState) => ({ ...prevState, [name]: checked }));
	};

	return {
		checkboxesValue,
		handleCheckboxChange: handleChange,
		setCheckboxValue: setValue,
	};
};

export default useCheckboxes;
