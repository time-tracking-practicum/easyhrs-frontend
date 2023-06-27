/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';

import './Task.css';

export default function Task({
	name,
	project,
	deadline,
	status,
	emoji,
	urgent,
	important,
	task,
}) {
	// функция форматирования входящей строки в дату формата dd.mm.yyyy
	function formateDate(data) {
		const date = new Date(data);
		return date.toLocaleDateString();
	}

	return (
		<div className="task">
			<Link to="/task-card" className="task__link" task={task}>
				<div className="task__container">
					<div className="task__name-container">
						<div className="task__emoji">{emoji}</div>
						<p className="task__name">{name}</p>
					</div>
					<p className="task__project">{project}</p>
					<ul className="task__matrix-wrapper">
						<li
							className={
								urgent
									? 'task__matrix-colorblock_urgent'
									: important
									? 'task__matrix-colorblock'
									: 'task__matrix-colorblock_nor-urgent-important'
							}
						/>
						<li className="task__matrix-item">{urgent ? 'Срочно' : ''}</li>
						<li className="task__matrix-item">{important ? 'Важно' : ''}</li>
					</ul>
					<p className="task__deadline">{formateDate(deadline)}</p>
					<ul className="task__timer-wrapper">
						<li className="task__timer-status">
							{status === 'in_progress' ? 'В работе' : 'Пауза'}
						</li>
						<li className="task__timer-time">02:13:57</li>
					</ul>
				</div>
			</Link>
			<div className="task__btn-wrapper">
				<button className="task__btn">
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0_1138_1005)">
							<rect width="40" height="40" rx="20" fill="#6750A4" />
							<path
								d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M18 16L24 20L18 24V16Z"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1138_1005">
								<rect width="40" height="40" rx="20" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
		</div>
	);
}
