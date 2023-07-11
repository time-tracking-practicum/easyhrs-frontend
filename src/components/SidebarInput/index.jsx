import { useState } from 'react';
import './SidebarInput.css';
import SidebarLabel from '../SidebarLabel';
import EditInputButton from '../EditInputButton';

const SidebarInput = ({
	type,
	name,
	placeholder,
	autoComplete,
	value,
	errText,
	onChange,
	label,
	inputRef,
	style,
	min,
	disabled,
	className,
	isEditable,
	max,
	required,
	error,
	isValid,
}) => {
	const [isPassShown, setIsPassShown] = useState(false);
	const isError = !!(!isValid && error);
	const [isDisabled, setIsDisabled] = useState(true);

	const handleEditButtonClick = () => {
		setIsDisabled(false);
	};

	const togglePassVisibility = () => {
		setIsPassShown(!isPassShown);
	};

	return (
		<div
			style={style}
			className={`sidebar__input-border ${
				isError && 'sidebar__input-border_red'
			}, ${className}`}
		>
			<input
				type={isPassShown ? 'text' : type}
				name={name}
				placeholder={label ? '' : placeholder}
				id={name}
				ref={inputRef}
				disabled={isEditable ? isDisabled : disabled}
				className={`sidebar__input ${isError && 'sidebar__input_text-red'}`}
				value={value}
				autoComplete={autoComplete}
				onChange={onChange}
				minLength={min}
				maxLength={max}
				required={required}
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
			{label && <SidebarLabel placeholder={placeholder} />}
			{isEditable && isDisabled && (
				<EditInputButton onClick={handleEditButtonClick} />
			)}
		</div>
	);
};

export default SidebarInput;
