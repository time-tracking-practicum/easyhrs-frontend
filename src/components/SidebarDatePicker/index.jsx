import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import './SidebarDatePicker.css';
import ruPrimeReactLocale from '../../utils/ru-locale';

addLocale('ru', ruPrimeReactLocale);

const SidebarDatePicker = ({
	name,
	minDate,
	maxDate,
	placeholder,
	value,
	onChange,
	required,
	showTime,
	disabled,
	showButtonBar,
}) => (
	<Calendar
		locale="ru"
		name={name}
		value={value}
		dateFormat="dd/mm/yy"
		className="sidebar-date-picker"
		placeholder={placeholder}
		disabled={disabled}
		showButtonBar={showButtonBar}
		showTime={showTime}
		hourFormat="24"
		required={required}
		minDate={minDate}
		maxDate={maxDate}
		onChange={onChange}
	/>
);

export default SidebarDatePicker;
