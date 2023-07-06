/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */

import './ProjectStatisticTaskHeader.css';
import { useState } from 'react';

const ProjectStatisticTaskHeader = () => {
	const [isSort, setIsSort] = useState(false);
	const [state, setState] = useState(true);
	const handleClick = () => {
		if (!isSort) setIsSort(true);
		setState(!state);
	};
	return (
		<div className="projStatisticTask projStatisticTaskHeader tasksHeader">
			<div className="projStatisticTask__container">
				<div
					className="task__name-container projStatisticTask__name-container projStatisticTaskHeader__name-container"
					onClick={handleClick}
					onKeyDown={handleClick}
				>
					<p className="task__name projStatisticTaskHeader__name">
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
					</p>
				</div>
				<p className="task__matrix-wrapper projStatisticTaskHeader___cell">
					Приоритет
				</p>
				<p className="task__deadline projStatisticTaskHeader___cell">Старт</p>
				<p className="task__deadline projStatisticTaskHeader___cell">Дедлайн</p>
				<ul className="task__timer-wrapper">
					<li className="task__timer-status projStatisticTaskHeader___cell">
						Статус
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectStatisticTaskHeader;
