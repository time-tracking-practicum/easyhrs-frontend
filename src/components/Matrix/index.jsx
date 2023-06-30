/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
import React from 'react';
import './Matrix.css';
import MatrixTask from '../MatrixTask';

export default function Matrix({
	tasks,
	title,
	blockColor,
	subtitle,
	subtitleColor,
	handleButtonClick,
}) {
	return (
		<div className="matrix">
			<div className="matrix__container">
				<div className="matrix__title-container">
					<h3 className="matrix__title">{title}</h3>
					<div
						className="matrix__colorblock"
						style={{ backgroundColor: blockColor }}
					></div>
				</div>
				<h4 className="matrix__subtitle" style={{ color: subtitleColor }}>
					{subtitle}
				</h4>
				<button onClick={handleButtonClick} className="matrix__add-btn">
					+
				</button>
				{tasks.length > 0 ? (
					<ul className="matrix__task-list">
						{tasks.map((task) => (
							<MatrixTask
								key={task.id}
								task={task}
								name={task.name}
								emoji={task.emoji}
							/>
						))}
					</ul>
				) : null}
			</div>
		</div>
	);
}
