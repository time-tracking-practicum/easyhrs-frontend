/* eslint-disable jsx-a11y/label-has-associated-control */
import './ProfileInput.css';

import icon from '../../images/icon-inputPencil.svg';

export default function ProfileInput({
	type,
	label,
	name,
	value,
	disabled,
	onEnable,
	onChange,
	required,
}) {
	return (
		<div className="profile__input-container">
			<label htmlFor="password" className="profile__input-label">
				{label}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				disabled={disabled}
				className="profile__input"
				value={value}
				placeholder={label}
				onChange={onChange}
				required={required}
			/>
			{disabled && (
				<img
					src={icon}
					alt="Иконка Стрелочка"
					className="profile__input-icon"
					onClick={onEnable}
					aria-hidden
				/>
			)}
		</div>
	);
}
