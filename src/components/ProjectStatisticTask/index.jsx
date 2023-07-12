/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */

import { formateDate } from '../../utils/formateDate';
import './ProjectStatisticTask.css';

const ProjectStatisticTask = ({
	emoji,
	name,
	is_urgent: isUrgent,
	status,
	is_important: isImportant,
	deadline,
	created_at: creatAt,
	time_in_progress: timeInProgress,
}) => (
	<div className="projStatisticTask">
		<div className="projStatisticTask__container">
			<div className="task__name-container projStatisticTask__name-container ">
				<div className="task__emoji">{emoji}</div>
				<p className="task__name">{name}</p>
			</div>
			<ul className="task__matrix-wrapper">
				<li
					className={
						isUrgent
							? 'task__matrix-colorblock_urgent'
							: isImportant
							? 'task__matrix-colorblock'
							: 'task__matrix-colorblock_nor-urgent-important'
					}
				/>
				<li className="task__matrix-item">{isUrgent ? 'Срочно' : ''}</li>
				<li className="task__matrix-item">{isImportant ? 'Важно' : ''}</li>
			</ul>
			<p className="task__deadline">{formateDate(creatAt)}</p>
			<p className="task__deadline">{formateDate(deadline)}</p>
			<ul className="task__timer-wrapper">
				<li className="task__timer-status">
					{status === 'in_progress' ? 'В работе' : 'Пауза'}
				</li>
				{status === 'in_progress' && (
					<li className="task__timer-time">
						{timeInProgress.h}:{timeInProgress.m}:{timeInProgress.s}
					</li>
				)}
			</ul>
		</div>
	</div>
);

export default ProjectStatisticTask;
