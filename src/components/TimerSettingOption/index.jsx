import React, { useState } from 'react';
import './TimerSettingOption.css';
import { InputSwitch } from 'primereact/inputswitch';

export default function TimerSettingOption() {
	const [timerReminder, setTimerReminder] = useState(false);

	const handleSwitchChange = () => {
		setTimerReminder((prevState) => !prevState);
	};

	return (
		<section className="timer-setting">
			<div className="timer-setting__option-container">
				<div className="timer-setting__option-text">
					<div className="timer-setting__timer-label">Я не засекаю время</div>
					<span className="timer-setting__time-placeholder">Время</span>
				</div>
				<div className="timer-setting__option-switch-wrapper">
					<InputSwitch
						id="timerReminder"
						className="timer-setting__option-switch"
						checked={timerReminder}
						onChange={handleSwitchChange}
					/>
				</div>
			</div>
		</section>
	);
}
