import React from 'react';
import { Link } from 'react-router-dom';

import './Task.css';

export default function Task() {
	return (
		<Link to="/task-card" className="task">
			<div className="task__container">
				<div className="task__name-container">
					<div className="task__emoji" />
					<p className="task__name">Дизайн главной страницы</p>
				</div>
				<p className="task__project">Дачи за городом</p>
				<ul className="task__matrix-wrapper">
					<li className="task__matrix-colorblock" />
					<li className="task__matrix-item">Срочно</li>
					<li className="task__matrix-item">Важно</li>
				</ul>
				<p className="task__deadline">31.05.2023</p>
				<ul className="task__timer-wrapper">
					<li className="task__timer-status">В работе</li>
					<li className="task__timer-time">02:13:57</li>
				</ul>
				<Link to="/timer" className="task__btn">
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
				</Link>
			</div>
		</Link>
	);
}
