import React from 'react';
import './SettingRadioBtn.css';

import imageRadioChecked from '../../images/icon-radio.svg';
import imageRadioUnchecked from '../../images/icon-not_radio.svg';

export default function SettingRadioBtn({ label, value, checked, onChange }) {
	const inputId = label.replace(/\s+/g, '-').toLowerCase(); // Генерация уникального id из текста метки

	return (
		<label className="setting-radio-btn" htmlFor={inputId}>
			<input
				type="radio"
				id={inputId}
				value={value}
				checked={checked}
				onChange={onChange}
				className="setting-radio-btn__input"
			/>
			<img
				src={checked ? imageRadioChecked : imageRadioUnchecked}
				alt="Изображение"
				className="setting-radio-btn__image"
			/>
			<span className="setting-radio-btn__label">{label}</span>
		</label>
	);
}
