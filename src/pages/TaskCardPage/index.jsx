/* eslint-disable jsx-a11y/label-has-associated-control */
import './TaskCardPage.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputSwitch } from 'primereact/inputswitch';
import { addLocale } from 'primereact/api';
import EmojiForm from '../../components/EmojiForm';

export default function TaskCardPage() {
	// TODO: доделать статус (скорее всего будут менять дизайн), привести все элементы в соответствие макету после согласования ментора, прикрутить апи
	const [name, setName] = useState('Дизайн главной страницы'); // стейт значения названия задачи
	const [project, setProject] = useState('Дачи за городом'); // стейт значения проекта
	const [date, setDate] = useState(''); // стейт значения даты задачи
	const [deadline, setDeadline] = useState(''); // стейт значения дедлайна
	const [important, setImportant] = useState(false); // стейт значения "важно"
	const [urgent, setUrgent] = useState(false); // стейт значения "срочно"
	const [isOpenEmoji, setIsOpenEmoji] = useState(false); // стейт открытия модального окна с emoji
	const [emoji, setEmoji] = useState('😛');

	// локализация календаря на русский язык
	addLocale('ru', {
		firstDayOfWeek: 1,
		dayNames: [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота',
		],
		dayNamesShort: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		monthNames: [
			'Январь',
			'Февраль',
			'Март',
			'Апрель',
			'Май',
			'Июнь',
			'Июль',
			'Август',
			'Сентябрь',
			'Октябрь',
			'Ноябрь',
			'Декабрь',
		],
		monthNamesShort: [
			'Янв',
			'Фев',
			'Мар',
			'Апр',
			'Май',
			'Июн',
			'Июл',
			'Авг',
			'Сен',
			'Окт',
			'Ноя',
			'Дек',
		],
		today: 'Сегодня',
		clear: 'Очистить',
	});

	// функция клика на кнопку эмодзи
	function handleClickEmoji(e) {
		e.preventDefault();
		setIsOpenEmoji(!isOpenEmoji);
	}

	// функция выбора эмодзи
	function handleEmojiSelect(em) {
		setEmoji(em.native);
		setIsOpenEmoji(false);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<section className="taskcardpage">
			<div className="taskcardpage__title-wrapper">
				<Link to="/" className="taskcardpage__crumb" />
				<h2 className="taskcardpage__title">Задача</h2>
			</div>
			<form
				className="taskcardpage__form"
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<label className="taskcardpage__label" htmlFor="task">
					Название
					<input
						id="name"
						name="name"
						className="taskcardpage__input-text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<div className="taskcardpage__input-icon" />
				</label>
				<label className="taskcardpage__label" htmlFor="project">
					Проект
					<input
						id="project"
						name="project"
						className="taskcardpage__input-text"
						value={project}
						onChange={(e) => setProject(e.target.value)}
					/>
					<div className="taskcardpage__input-icon" />
				</label>
				<div className="taskcardpage__calendar-container">
					<label className="taskcardpage__label" htmlFor="date">
						Дата задачи
						<input
							type="date"
							value={date}
							onChange={(e) => setDate(e.value)}
							className="taskcardpage__input-date"
							id="date"
							name="date"
						/>
					</label>
					<label className="taskcardpage__label" htmlFor="deadline">
						Дедлайн
						<input
							type="date"
							value={deadline}
							onChange={(e) => setDeadline(e.value)}
							className="taskcardpage__input-date"
							id="deadline"
							name="deadline"
						/>
					</label>
				</div>
				<div className="taskcardpage__priority-container">
					<h3 className="taskcardpage__priority-title">Приоритет</h3>
					<div className="taskcardpage__priority-wrapper">
						<label className="taskcardpage__label-priority">
							Важно
							<InputSwitch
								className="taskcardpage__input-priority"
								checked={important}
								onChange={(e) => setImportant(e.value)}
							/>
						</label>
						<label className="taskcardpage__label-priority">
							Срочно
							<InputSwitch
								className="taskcardpage__input-priority"
								checked={urgent}
								onChange={(e) => setUrgent(e.value)}
							/>
						</label>
						<div className="taskcardpage__emoji-container">
							<h3 className="taskcardpage__emoji-title">Emoji</h3>
							<button
								className="taskcardpage__emoji"
								onClick={handleClickEmoji}
							>
								{emoji}
							</button>
							{isOpenEmoji && (
								<EmojiForm onEmojiSelect={(em) => handleEmojiSelect(em)} />
							)}
						</div>
					</div>
				</div>
				<div className="taskcardpage__btns">
					<button type="submit" className="taskcardpage__submit">
						Сохранить изменения
					</button>
					<button className="taskcardpage__delete">Удалить задачу</button>
				</div>
			</form>
		</section>
	);
}
