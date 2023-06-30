import { useState } from 'react';

const useDatePicker = (initialValue) => {
	const [dates, setDates] = useState(initialValue);

	const handleChange = (e) => {
		const { value, target } = e;
		setDates((prevState) => ({
			...prevState,
			[target.name]: value,
		}));
	};

	return {
		dateValues: dates,
		handleDateChange: handleChange,
		setDates,
	};
};

export default useDatePicker;
