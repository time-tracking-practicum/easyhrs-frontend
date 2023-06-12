import React, { useState } from 'react';
import './RemindersSetting.css';
import { InputSwitch } from 'primereact/inputswitch';

import downArrow from '../../images/icon-down_arrow.svg';
import upArrow from '../../images/icon-up_arrow.svg';

import imageRadioChecked from '../../images/icon-radio.svg';
import imageRadioUnchecked from '../../images/icon-not_radio.svg';

// Компонент для настроек напоминаний
export default function RemindersSetting() {
	const [sendReminder, setSendReminder] = useState(false); // стейт значения "Отправлять напоминание"

	const [showDays, setShowDays] = useState(false); // стейт значения определяющая отображение дней недели
	const [workDays, setWorkDays] = useState([]);

	const handleWorkDayChange = (day, isChecked) => {
		if (isChecked) {
			setWorkDays([...workDays, day]);
		} else {
			setWorkDays(workDays.filter((d) => d !== day));
		}
	};

	const toggleShowDays = () => {
		setShowDays(!showDays);
	};

	return (
		<div className="reminders-setting">
			<h2 className="reminders-setting__title">Напоминания</h2>
			<div className="reminders-setting__container">
				<span className="reminders-setting__label-text">
					Отправлять напоминание
				</span>
				<InputSwitch
					id="sendReminder"
					className="reminders-setting__checkbox"
					checked={sendReminder}
					onChange={(e) => setSendReminder(e.value)}
				/>
			</div>
			<div className="reminders-setting__work-days">
				<h3 className="reminders-setting__subtitle">Мои рабочие дни</h3>
				<button
					className="reminders-setting__toggle-button"
					onClick={toggleShowDays}
				>
					<span className="reminders-setting__text-button">Пн-Пт</span>
					{showDays ? (
						<img
							className="reminders-setting__image-arrow"
							src={upArrow}
							alt="Стрелка вверх"
						/>
					) : (
						<img
							className="reminders-setting__image-arrow"
							src={downArrow}
							alt="Стрелка вниз"
						/>
					)}
				</button>
			</div>
			{showDays && (
				<div className="reminders-setting__day-list-container">
					<ul className="reminders-setting__day-list">
						{[
							'Понедельник',
							'Вторник',
							'Среда',
							'Четверг',
							'Пятница',
							'Суббота',
							'Воскресенье',
						].map((day) => (
							<li key={day} className="reminders-setting__day-item">
								<label htmlFor={day} className="reminders-setting__day-label">
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
			)}
			<div className="reminders-setting__reminder-options">
				<div className="reminders-setting__container">
					<h3 className="reminders-setting__label-text">
						В рабочие дни напоминать, если...
					</h3>
				</div>
			</div>
		</div>
	);
}
