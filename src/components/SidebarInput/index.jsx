import { useState } from 'react';
import './SidebarInput.css';

const SidebarInput = ({
	type,
	name,
	placeholder,
	autoComplete,
	value,
	errText,
	onChange,
	inputRef,
	min,
	max,
	required,
	error,
	isValid,
}) => {
	const [isPassShown, setIsPassShown] = useState(false);
	const isError = !!(!isValid && error);

	const togglePassVisibility = () => {
		setIsPassShown(!isPassShown);
	};

	return (
		<div
			className={`sidebar__input-border ${
				isError && 'sidebar__input-border_red'
			}`}
		>
			<input
				type={isPassShown ? 'text' : type}
				name={name}
				id={name}
				ref={inputRef}
				className={`sidebar__input ${isError && 'sidebar__input_text-red'}`}
				value={value}
				autoComplete={autoComplete}
				onChange={onChange}
				minLength={min}
				maxLength={max}
				required={required}
				placeholder={placeholder}
			/>

			{isError && <span className="sidebar__input-errText">{errText}</span>}

			{isError && <div className="sidebar__errorIcon" />}
			{!isError && type === 'password' && (
				<div
					className="sidebar__togglePassVisibilityBtn"
					onClick={togglePassVisibility}
					aria-hidden="true"
				/>
			)}
		</div>
	);
};

export default SidebarInput;
