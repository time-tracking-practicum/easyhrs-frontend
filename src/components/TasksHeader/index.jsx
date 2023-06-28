import './TasksHeader.css';
import { useEffect, useState } from 'react';

const TasksHeader = ({ sortTasksByName }) => {
	const [state, setState] = useState(null);
	const handleClick = () => {
		setState(!state);
	};

	useEffect(() => {
		if (state === null) return;
		sortTasksByName(state);
	}, [state]);

	return (
		<div className="task tasksHeader">
			<div className="task__container tasksHeader__container">
				<button
					className="task__name-container tasksHeader__name-container"
					onClick={handleClick}
				>
					Название
					{state ? (
						<svg
							width="8"
							height="15"
							viewBox="0 0 14 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 0L7 7L14 0H0Z"
								fill="#000"
							/>
						</svg>
					) : (
						<svg
							width="8"
							height="15"
							transform="rotate(180)"
							viewBox="0 0 14 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 0L7 7L14 0H0Z"
								fill="#000"
							/>
						</svg>
					)}
				</button>
				<span className="task__project">Проект</span>
				<span className="task__matrix-wrapper">Приоритет</span>
				<span className="task__deadline">Дедлайн</span>
				<span className="task__timer-wrapper">Статус</span>
			</div>
			<span className="tasksHeader__timer">Таймер</span>
		</div>
	);
};

export default TasksHeader;
