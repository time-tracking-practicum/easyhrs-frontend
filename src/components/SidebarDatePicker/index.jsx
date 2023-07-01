import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import './SidebarDatePicker.css';
import ruPrimeReactLocale from '../../utils/ru-locale';
import SidebarLabel from '../SidebarLabel';
import EditInputButton from '../EditInputButton';

addLocale('ru', ruPrimeReactLocale);

const SidebarDatePicker = ({
	name,
	minDate,
	maxDate,
	placeholder,
	value,
	onChange,
	isEditable,
	required,
	label,
	showTime,
	disabled,
	showButtonBar,
}) => {
	const [isDisabled, setIsDisabled] = useState(true);

	const handleEditButtonClick = () => {
		setIsDisabled(false);
	};

	return (
		<div className="sidebar-date-picker__wrapper">
			<Calendar
				locale="ru"
				name={name}
				value={value}
				dateFormat="dd.mm.yy"
				className="sidebar-date-picker"
				placeholder={placeholder}
				disabled={isEditable ? isDisabled : disabled}
				showButtonBar={showButtonBar}
				showTime={showTime}
				hourFormat="24"
				required={required}
				minDate={minDate}
				maxDate={maxDate}
				onChange={onChange}
			/>
			{label && <SidebarLabel placeholder={placeholder} />}
			{isEditable && isDisabled && (
				<EditInputButton onClick={handleEditButtonClick} />
			)}
		</div>
	);
};

export default SidebarDatePicker;
