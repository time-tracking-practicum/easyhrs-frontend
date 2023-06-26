import React from 'react';
import './MatrixTask.css';

export default function MatrixTask({ name, emoji }) {
	return (
		<li className="matrix__task">
			<div className="matrix__task-emoji">{emoji}</div>
			<p className="matrix__task-text">{name}</p>
		</li>
	);
}
