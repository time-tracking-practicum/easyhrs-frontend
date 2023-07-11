import React, { useState } from 'react';
import './TimerSetting.css';
import { InputSwitch } from 'primereact/inputswitch';

export default function TimerSetting({notifications}) {
	const [timerReminder, setTimerReminder] = useState(false);
	const [timerTime, setTimerTime] = useState({ hours: 12, minutes: 0 });
	const [editing, setEditing] = useState(false);

	const handleTimerReminderChange = () => {
		setTimerReminder((prevState) => !prevState);
		setEditing((prevState) => !prevState);
	};

	const handleTimerTimeChange = (event) => {
		const { name, value } = event.target;
		setTimerTime((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleCloseClick = () => {
		setEditing(false);
		setTimerReminder(false);
	};

	const renderTimeOptions = (maxValue) => {
		const options = [];
		for (let i = 0; i < maxValue; i += 1) {
			const value = i.toString().padStart(2, '0');
			options.push(
				<option key={value} value={value}>
					{value}
				</option>
			);
		}
		return options;
	};

	const renderTimePicker = () => (
		<div className="timer-setting__time-picker">
			<span className="timer-setting__picker-text">Время</span>
			<div className="timer-setting__time-picker-options">
				<select
					name="hours"
					value={timerTime.hours}
					className="timer-setting__time-picker-select"
					onChange={handleTimerTimeChange}
				>
					{renderTimeOptions(24)}
				</select>
				<span>:</span>
				<select
					name="minutes"
					value={timerTime.minutes}
					className="timer-setting__time-picker-select"
					onChange={handleTimerTimeChange}
				>
					{renderTimeOptions(60)}
				</select>
			</div>
			<button
				className="timer-setting__time-picker-close"
				onClick={handleCloseClick}
			>
				{}
			</button>
		</div>
	);

	return (
		<section className={`timer-setting ${
			!notifications && 'hover'
		}`}>
			<div className="timer-setting__option-container">
				<div className="timer-setting__option-switch-wrapper">
					<InputSwitch
						disabled={!notifications}
						id="timerReminder"
						className="timer-setting__option-switch"
						checked={timerReminder}
						onChange={handleTimerReminderChange}
					/>
				</div>
				<div className="timer-setting__option-text">
					<div className="timer-setting__timer-label">
						Я не запущу таймер до{' '}
					</div>
				</div>
			</div>
			{editing && renderTimePicker()}
		</section>
	);
}
