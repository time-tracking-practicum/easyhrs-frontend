/* eslint-disable no-plusplus */
import React, {useState} from 'react';
import Header from '../Header';
import iconPause from '../../images/icon-pause.svg';
import iconComplete from '../../images/icon-complete.svg';
import './Timer.css';

function Timer() {
	const [time, setTime] = useState({ s:0, m:0, h:0});
	const [interv, setInterv] = useState();
	const [startTimer, setStartTimer] = useState();
	const [pause, setPause] = useState();
	const [dropTimer, setDropTimer] = useState(false);

	let updatedS = time.s; let updatedM = time.m; let updatedH = time.h;
	
	const run = () => {
		if(updatedM === 60){
		updatedH++;
		updatedM = 0;
		}
		if(updatedS === 60){
		updatedM++;
		updatedS = 0;
		}
		
		updatedS++;
		return setTime({ s:updatedS, m:updatedM, h:updatedH});
	};

	const start = () => {
		run();
		setStartTimer(Date.now());
		setInterv(setInterval(run, 1000));
		if (pause) {
			console.log((pause - startTimer)/1000);
		}
	};


	const stop = () => {
		clearInterval(interv);
		setPause(Date.now());
	};

	const reset = () => {
		clearInterval(interv);
		setTime({s:0, m:0, h:0})
	};
	// const resume = () => start();
	const classSpan = dropTimer ? 'timer__span-drop' : 'timer__span';

	return (
		<div className="timer">
			{!dropTimer && <Header timer setDropTimer={setDropTimer}/>}
			<div className={`timer__container ${dropTimer ? 'timer__container_drop' : ''}`}>
				<div className={`timer__block ${dropTimer ? 'timer__block_drop' : ''}`}>
					<span className={classSpan}>{(time.m >= 10)? time.h : `0${ time.h}`}</span>
					<span className={classSpan}>:</span>
					<span className={classSpan}>{(time.m >= 10)? time.m : `0${ time.m}`}</span>
					<span className={classSpan}>:</span>
					<span className={classSpan}>{(time.s >= 10)? time.s : `0${ time.s}`}</span>
					<p className={`timer__name ${dropTimer ? 'timer__name_drop' : ''}`}>Дизайн главной страницы (Дачи за городом)</p>

				</div>
				<div className="timer__buttons-container">
					<button onClick={start} type='button' className="timer__button">
						<img className="timer__icon" src={iconPause} alt="Икона паузы" />
						Старт
					</button>
					<button onClick={stop} type='button' className="timer__button">
						<img className="timer__icon" src={iconPause} alt="Икона паузы" />
						Пауза
					</button>
					{dropTimer && <button onClick={reset} type='button' className="timer__button">
						<img className="timer__icon" src={iconComplete} alt="Икона паузы" />
						Завершить
					</button>}
					
				</div>
			</div>
		</div>
	);
}

export default Timer;
