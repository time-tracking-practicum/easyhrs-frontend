/* eslint-disable react/self-closing-comp */
import { Link } from 'react-router-dom';
import './Task.css';
import React from 'react';

export default function Task() {
	// TODO привязать backgroundColor к элементам матрицы задач
	return (
		<Link
			to="/task-card"
			className="task"
			style={{ backgroundColor: '#FFE1E1' }}
		>
			<div className="task__container">
				<div className="task__emodji"></div>
				<p className="task__name">Дизайн главной страницы</p>
				<p className="task__project">Дачи за городом</p>
				<ul className="task__matrix-wrapper">
					<li className="task__matrix-item">Срочно</li>
					<li className="task__matrix-item">Важно</li>
				</ul>
				<p className="task__deadline">31.05.2023</p>
				<ul className="task__timer-wrapper">
					<li className="task__timer-status">В работе</li>
					<li className="task__timer-time">02:13:57</li>
				</ul>
				<Link to="/taskcard" className="task__btn">
					<svg
						width="14"
						height="20"
						viewBox="0 0 14 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0.45571 0.117193C0.73665 -0.0507933 1.07892 -0.037366 1.34816 0.152205L13.5982 8.7772C13.8486 8.95354 14 9.25725 14 9.58333C14 9.90942 13.8486 10.2131 13.5982 10.3895L1.34816 19.0145C1.07892 19.204 0.73665 19.2175 0.45571 19.0495C0.174771 18.8815 0 18.5589 0 18.2083V0.958334C0 0.607769 0.174771 0.28518 0.45571 0.117193ZM1.75 2.71368V16.453L11.5069 9.58333L1.75 2.71368Z"
							fill="white"
						/>
					</svg>
				</Link>
			</div>
		</Link>
	);
}
