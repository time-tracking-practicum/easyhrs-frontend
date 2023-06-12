import React, { useState } from 'react';
import './TimerSetting.css';
import { InputSwitch } from 'primereact/inputswitch';

export default function TimerSetting() {
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
			[name]: parseInt(value, 10),
		}));
	};

	const handleSaveClick = () => {
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
			<div className="timer-setting__time-picker-options">
				<select
					name="hours"
					value={timerTime.hours}
					className="timer-setting__time-picker-select"
					onChange={handleTimerTimeChange}
				>
					{renderTimeOptions(60)}
				</select>
				<select
					name="minutes"
					value={timerTime.minutes}
					className="timer-setting__time-picker-select"
					onChange={handleTimerTimeChange}
				>
					{renderTimeOptions(24)}
				</select>
			</div>
			<button
				className="timer-setting__time-picker-save"
				onClick={handleSaveClick}
			>
				Установить
			</button>
		</div>
	);

	return (
		<section className="timer-setting">
			<div className="timer-setting__option-container">
				<div className="timer-setting__option-text">
					<div className="timer-setting__timer-label">
						Я не запущу таймер до{' '}
					</div>
					{editing ? (
						<span className="timer-setting__time-placeholder">Время</span>
					) : (
						<span className="timer-setting__current-time">
							{`${timerTime.hours
								.toString()
								.padStart(2, '0')}:${timerTime.minutes
								.toString()
								.padStart(2, '0')}`}
						</span>
					)}
				</div>
				<div className="timer-setting__option-switch-wrapper">
					<InputSwitch
						id="timerReminder"
						className="timer-setting__option-switch"
						checked={timerReminder}
						onChange={handleTimerReminderChange}
					/>
				</div>
			</div>
			{editing && renderTimePicker()}
		</section>
	);
}
