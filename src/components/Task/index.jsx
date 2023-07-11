/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import './Task.css';
import { formateDate } from '../../utils/formateDate';

export default function Task({
	name,
	project,
	deadline,
	// status,
	emoji,
	urgent,
	important,
	task,
	openTimer,
	setOpenTimer,
	setPause,
	handleOpenEditTaskForm,
	timeInProgress,
	setActualTask,
	play,
	setPlay,
	pause,
	actualTask,
	timerTime,
	hadleUpdateTimeInProgress,
}) {
	function handleStart() {
		if (play && !pause) {
			setPause(true);
			const newTimeInProgress = {
				time_in_progress: timerTime,
			};
			hadleUpdateTimeInProgress(actualTask.id, newTimeInProgress);
			setActualTask(task);
			console.log('second play');
		}
		if (play && pause && openTimer) {
			console.log('third play');
			setPause(true);
			const newTimeInProgress = {
				time_in_progress: timerTime,
			};
			hadleUpdateTimeInProgress(actualTask.id, newTimeInProgress);
			setActualTask(task);
		}
		if (!play) {
			console.log('ne dubl');
			setPlay(true);
			setActualTask(task);
			setOpenTimer(true);
			setPause(false);
		}
	}

	return (
		<div className="task">
			<div
				className="task__container"
				onClick={() => handleOpenEditTaskForm(task)}
			>
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
						{timeInProgress.h === 0 &&
						timeInProgress.m === 0 &&
						timeInProgress.s === 0 &&
						!play
							? 'Не начато'
							: actualTask.name === name && play
							? 'В работе'
							: 'Пауза'}
					</li>
					{actualTask.name === name && play ? (
						<li className="task__timer-time">
							{timerTime.h >= 10 ? timerTime.h : `0${timerTime.h}`}:
							{timerTime.m >= 10 ? timerTime.m : `0${timerTime.m}`}:
							{timerTime.s >= 10 ? timerTime.s : `0${timerTime.s}`}
						</li>
					) : (
						<li className="task__timer-time">
							{timeInProgress.h >= 10
								? timeInProgress.h
								: `0${timeInProgress.h}`}
							:
							{timeInProgress.m >= 10
								? timeInProgress.m
								: `0${timeInProgress.m}`}
							:
							{timeInProgress.s >= 10
								? timeInProgress.s
								: `0${timeInProgress.s}`}
						</li>
					)}
				</ul>
			</div>
			<div className="task__btn-wrapper">
				<button
					onClick={handleStart}
					className={`task__btn ${play && 'task__btn_disabled'}`}
					disabled={play}
				>
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
