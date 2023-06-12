import React, { useState } from 'react';

import './TimeFormatSetting.css';
import SettingRadioBtn from '../SettingRadioBtn';

// Компонент для выбора времени в формате 12 или 24 часа
export default function TimeFormatSetting() {
	const [timeFormat, setTimeFormat] = useState('12'); // значение по умолчанию - 12 часов

	const handleTimeFormatChange = (event) => {
		setTimeFormat(event.target.value);
	};

	return (
		<div className="time-format-setting">
			<h3 className="time-format-setting__title">Формат времени</h3>
			<div className="time-format-setting__container">
				<div className="time-format-setting__container">
					<SettingRadioBtn
						label="12 часовой"
						value="12"
						checked={timeFormat === '12'}
						onChange={handleTimeFormatChange}
					/>
					<SettingRadioBtn
						label="24 часовой"
						value="24"
						checked={timeFormat === '24'}
						onChange={handleTimeFormatChange}
					/>
				</div>
			</div>
		</div>
	);
}
