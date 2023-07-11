import React, { useState, useEffect } from 'react';
import './RemindersSetting.css';
import { InputSwitch } from 'primereact/inputswitch';

import imageRadioChecked from '../../images/icon-radio.svg';
import imageRadioUnchecked from '../../images/icon-not_radio.svg';

// Компонент для настроек напоминаний
export default function RemindersSetting({ notifications, setNotifications }) {
	const [sendReminder, setSendReminder] = useState(false);
	const [workDays, setWorkDays] = useState([]);

	const handleWorkDayChange = (day, isChecked) => {
		if (isChecked) {
			setWorkDays([...workDays, day]);
		} else {
			setWorkDays(workDays.filter((d) => d !== day));
		}
	};
	useEffect(() => {
		if (sendReminder) {
			setNotifications(true);
		} else setNotifications(false);
	}, [sendReminder]);

	return (
		<div className="reminders-setting">
			<h2 className="reminders-setting__title">Напоминания</h2>
			<div className="reminders-setting__container">
				<InputSwitch
					id="sendReminder"
					className="reminders-setting__checkbox"
					checked={sendReminder}
					onChange={(e) => setSendReminder(e.value)}
				/>
				<span className="reminders-setting__label-text">
					Отправлять напоминание
				</span>
			</div>
			<div
				className={`reminders-setting__work-days ${!notifications && 'hover'}`}
			>
				<h3 className="reminders-setting__subtitle">Мои рабочие дни</h3>
			</div>
			<div className="reminders-setting__day-list-container">
				<ul className="reminders-setting__day-list">
					{['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map((day) => (
						<li
							key={day}
							className={`reminders-setting__day-item ${
								!notifications && 'hover'
							}`}>
								<label htmlFor={day} className="reminders-setting__day-label" >
									{workDays.includes(day) ? (
										<img
											src={imageRadioChecked}
											alt="Checked"
											className="reminders-setting__checkbox-icon"
										/>
									) : (
										<img
											src={imageRadioUnchecked}
											alt="Unchecked"
											className="reminders-setting__checkbox-icon"
										/>
									)}
									<input
										disabled={!notifications}
										id={day}
										type="checkbox"
										className="reminders-setting__day-checkbox"
										checked={workDays.includes(day)}
										onChange={(event) =>
											handleWorkDayChange(day, event.target.checked)
										}
									/>
									<span className="reminders-setting__day-text">{day}</span>
								</label>
							</li>
						))}
					</ul>
				</div>
			<div className={`reminders-setting__reminder-options ${
					!notifications && 'hover'
				}`}
			>
				<div className="reminders-setting__container-days">
					<h3 className="reminders-setting__label-title">
						В рабочие дни напоминать, если...
					</h3>
				</div>
			</div>
		</div>
	);
}
