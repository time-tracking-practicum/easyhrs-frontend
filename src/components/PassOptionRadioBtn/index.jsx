import './PassOptionRadioBtn.css';

// Title - верхний текст около кнопки
// text - нижкий (мелкий) текст около кнопки
// value - value
// name - ID + name
// checked - состояние

export default function PassOptionRadioBtn({
	title,
	text,
	value,
	name,
	checked,
	onSelect,
}) {
	return (
		<div className="profile__radiobtn-container">
			<input
				type="radio"
				name={name}
				id={name}
				value={value}
				className="profile__radiobtn"
				checked={checked}
				onChange={onSelect}
			/>
			<label className="profile__radiobtn-label" htmlFor={name}>
				<p className="profile__radiobtn__title">{title}</p>
				<p className="profile__radiobtn__text">{text}</p>
			</label>
		</div>
	);
}
