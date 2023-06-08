import Header from '../Header';

import iconPause from '../../images/icon-pause.svg';
import iconComplete from '../../images/icon-complete.svg';
import './Timer.css';

function Timer() {
	return (
		<div className="timer">
			<Header timer />
			<div className="timer__container">
				<div className="timer__block">
					<span className="timer__span">00</span>
					<span className="timer__span">:</span>
					<span className="timer__span">00</span>
					<span className="timer__span">:</span>
					<span className="timer__span">01</span>
				</div>
				<p className="timer__name">Дизайн главной страницы (Дачи за городом)</p>
				<div className="timer__buttons-container">
					<button className="timer__button">
						<img className="timer__icon" src={iconPause} alt="Икона паузы" />
						Пауза
					</button>
					<button className="timer__button">
						<img className="timer__icon" src={iconComplete} alt="Икона паузы" />
						Завершить
					</button>
				</div>
			</div>
		</div>
	);
}

export default Timer;
