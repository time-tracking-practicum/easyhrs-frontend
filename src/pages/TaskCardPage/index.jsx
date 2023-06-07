/* eslint-disable jsx-a11y/label-has-associated-control */
import './TaskCardPage.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TaskCardPage() {
	const [task, setTask] = useState('Дизайн главной страницы'); // стейт значения названия задачи
	const [project, setProject] = useState('Дачи за городом'); // стейт значения проекта

	return (
		<section className="taskcardpage">
			<div className="taskcardpage__title-wrapper">
				<Link to="/" className="taskcardpage__crumb" />
				<h2 className="taskcardpage__title">Задача</h2>
			</div>
			<form className="taskcardpage__form">
				<label className="taskcardpage__label" htmlFor="task">
					Название
					<input
						id="task"
						className="taskcardpage__input-text"
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
					<div className="taskcardpage__input-icon" />
				</label>
				<label className="taskcardpage__label" htmlFor="project">
					Проект
					<input
						id="project"
						className="taskcardpage__input-text"
						value={project}
						onChange={(e) => setProject(e.target.value)}
					/>
					<div className="taskcardpage__input-icon" />
				</label>
				<div className="taskcardpage__calendar-container">
					<label className="taskcardpage__label" htmlFor="project">
						Дата задачи
					</label>
					<label className="taskcardpage__label" htmlFor="project">
						Дедлайн
					</label>
				</div>
			</form>
		</section>
	);
}
