/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import iconPause from '../../images/icon-pause.svg';
import iconComplete from '../../images/icon-complete.svg';
import './Timer.css';

function Timer({
	playTimer,
	setPlayTimer,
	dropTimer,
	setDropTimer,
	pause,
	setPause,
	actualTask,
	hadleUpdateTimeInProgress,

}) {
	const [timerTime, setTimerTime] = useState(actualTask.time_in_progress ||{h: 0, m: 0, s: 0 });
	const [interv, setInterv] = useState();
	const [startTimer, setStartTimer] = useState();
	const [timeOfPause, setTimeOfPause] = useState();

	// let updatedS = timerTime.s; let updatedM = timerTime.m; let updatedH = timerTime.h;

	const run = () => {
		if (timerTime.m === 60) {
			timerTime.h++;
			timerTime.m = 0;
		}
		if (timerTime.s === 60) {
			timerTime.m++;
			timerTime.s = 0;
		}

		timerTime.s++;
		return setTimerTime({ h: timerTime.h, m: timerTime.m, s: timerTime.s});
	};

	const stop = () => {
		clearInterval(interv);
		setTimeOfPause(Date.now());
		setPause(true);
		const newTimeInProgress = {
			time_in_progress: timerTime,
		};
		console.log(newTimeInProgress);
		hadleUpdateTimeInProgress(actualTask.id, newTimeInProgress);
	};

	const reset = () => {
		clearInterval(interv);
		setTimerTime({h: 0, m: 0, s: 0 });
		setPlayTimer(false);
		setDropTimer(false);
	};

	const start = () => {
		setStartTimer(Date.now());
		setInterv(setInterval(run, 1000));
		if (timeOfPause) {
			console.log((timeOfPause - startTimer) / 1000);
		}
	};
	useEffect(() => {
		if (pause) {
			console.log('остановка');
		}
	}, [pause]);

	useEffect(() => {
		if (playTimer && !pause) {
			start();
		}		

	}, [playTimer, pause]);



	useEffect(() => {
		setTimerTime({ h: actualTask.time_in_progress.h, m: actualTask.time_in_progress.m,  s: actualTask.time_in_progress.s });

	}, [playTimer, actualTask]);

	const classSpan = dropTimer ? 'timer__span-drop' : 'timer__span';

	return (
		<div className="timer">
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
					<button onClick={stop} type="button" className="timer__button">
						<img className="timer__icon" src={iconPause} alt="Икона паузы" />
						Пауза
					</button>
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
