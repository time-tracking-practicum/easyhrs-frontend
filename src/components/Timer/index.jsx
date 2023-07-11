/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import iconPause from '../../images/icon-pause.svg';
import iconComplete from '../../images/icon-complete.svg';
import './Timer.css';

function Timer({
	openTimer,
	setOpenTimer,
	dropTimer,
	setDropTimer,
	pause,
	setPause,
	actualTask,
	hadleUpdateTimeInProgress,
	play,
	setPlay,
	timerTime,
	setTimerTime,
}) {
	const [interv, setInterv] = useState();
	const [startTimer, setStartTimer] = useState();
	const [timeOfPause, setTimeOfPause] = useState();
	
	let timer = {
		h: actualTask.time_in_progress.h,
		m: actualTask.time_in_progress.m,
		s: actualTask.time_in_progress.s,
	};

	const run = () => {
		if (timer.m === 59) {
			timer.h++;
			timer.m = 0;
		}
		if (timer.s === 59) {
			timer.m++;
			timer.s = 0;
		}

		timer.s++;
		return setTimerTime({ h: timer.h, m: timer.m, s: timer.s });
	};

	const stop = () => {
		clearInterval(interv);
		setTimeOfPause(Date.now());
		setPause(true);
		const newTimeInProgress = {
			time_in_progress: timerTime,
		};
		hadleUpdateTimeInProgress(actualTask.id, newTimeInProgress);
		setPlay(false);
	};

	const reset = () => {
		if (play && !pause && openTimer) {
			const newTimeInProgress = {
				time_in_progress: timerTime,
			};
			hadleUpdateTimeInProgress(actualTask.id, newTimeInProgress);
		}
		clearInterval(interv);
		setTimerTime({ h: 0, m: 0, s: 0 });
		setOpenTimer(false);
		setDropTimer(false);
		setPlay(false);
	};
	const start = () => {
		setPlay(true);
		setStartTimer(Date.now());
		setInterv(setInterval(run, 1000));
		if (timeOfPause) {
			console.log((timeOfPause - startTimer) / 1000);
		}
	};
	useEffect(() => {
		if (pause) {
			stop();
		}
	}, [play, pause]);

	useEffect(() => {
		if (play && !pause) {
			start();
		}
		if (play && pause) {
			reset();
			start();
			setOpenTimer(true);
			console.log('double-play');
		}
	}, [openTimer, pause, play]);

	useEffect(() => {
		setTimerTime({
			h: actualTask.time_in_progress.h,
			m: actualTask.time_in_progress.m,
			s: actualTask.time_in_progress.s,
		});
	}, [openTimer, actualTask]);

	const classSpan = dropTimer ? 'timer__span-drop' : 'timer__span';

	function handleStart() {
		setPlay(true);
		setPause(false);
	}

	return (
		<div className={`timer ${dropTimer ? 'timer_drop' : ''}`}>
			{!dropTimer && <Header timer setDropTimer={setDropTimer} />}
			<div
				className={`timer__container ${
					dropTimer ? 'timer__container_drop' : ''
				}`}
			>
				<div className={`timer__block ${dropTimer ? 'timer__block_drop' : ''}`}>
					<span className={classSpan}>
						{timerTime.h >= 10 ? timerTime.h : `0${timerTime.h}`}
					</span>
					<span className={classSpan}>:</span>
					<span className={classSpan}>
						{timerTime.m >= 10 ? timerTime.m : `0${timerTime.m}`}
					</span>
					<span className={classSpan}>:</span>
					<span className={classSpan}>
						{timerTime.s >= 10 ? timerTime.s : `0${timerTime.s}`}
					</span>
					<p className={`timer__name ${dropTimer ? 'timer__name_drop' : ''}`}>
						{actualTask.name}
					</p>
				</div>
				<div className="timer__buttons-container">
					{play ? 
					<button onClick={stop} type="button" className="timer__button">
						<img className="timer__icon" src={iconPause} alt="Икона паузы" />
						Пауза
					</button> 
					:
					<button onClick={handleStart} type="button" className="timer__button">
						<img className="timer__icon" src={iconPause} alt="Икона паузы" />
						Продолжить
					</button> 
					}
					<button onClick={reset} type="button" className="timer__button">
						<img className="timer__icon" src={iconComplete} alt="Икона паузы" />
						Завершить
					</button>
				</div>
			</div>
		</div>
	);
}

export default Timer;
