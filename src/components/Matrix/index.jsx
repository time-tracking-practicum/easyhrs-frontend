/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React from 'react';
import './Matrix.css';

export default function Matrix({ color, title, subtitle, subtitleColor }) {
	return (
		<div className="matrix" style={{ backgroundColor: color }}>
			<div className="matrix__container">
				<h3 className="matrix__title">{title}</h3>
				<h4 className="matrix__subtitle" style={{ color: subtitleColor }}>
					{subtitle}
				</h4>
				<button className="matrix__add-btn">+</button>
				<ul className="matrix__task-list">
					<li className="matrix__task">
						<div className="matrix__task-emoji"></div>
						<p className="matrix__task-text">
							Закончить правки по проекту загородная дача{' '}
						</p>
					</li>
					<li className="matrix__task">
						<div className="matrix__task-emoji"></div>
						<p className="matrix__task-text">
							Закончить правки по проекту загородная дача{' '}
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
