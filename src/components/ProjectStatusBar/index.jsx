import './ProjectStatusBar.css';
import { useEffect, useState } from 'react';

export default function ProjectStatusBar({ project, tasks, timeSum }) {
	const [barColor, setBarColor] = useState(''); // цвет фона прогресс бара
	const [progressColor, setProgressColor] = useState(''); // цвет заполняемости прогресс бара
	const [timeOfProject, setTimeOfProject] = useState(0); // время,  потраченное на проект
	const [progressWidth, setProgressWidth] = useState(''); // стейт ширины прогресс бара в зависимости от времени, потраченного на проект

	// Считает сумму времени, потраченного на каждый проект
	useEffect(() => {
		let hours = 0;
		let mins = 0;
		let secs = 0;
		for (let i = 0; i < tasks.length; i += 1) {
			hours += tasks[i].time_in_progress.h;
			mins += tasks[i].time_in_progress.m;
			secs += tasks[i].time_in_progress.s;
		}
		setTimeOfProject(hours * 3600 + mins * 60 + secs);
	}, [project]);

	// Форматирует секунды проекта в формат n час m мин
	function formateTimeOfProject() {
		let hours = Math.round((timeOfProject / 3600) % 24);
		let minutes = Math.round((timeOfProject / 60) % 60);
		let time = `${hours} час ${minutes} мин`;
		if (timeOfProject < 60) {
			hours = 0;
			minutes = 0;
		}
		return time;
	}

	// Подсчитывает ширину ползунка в процентах
	useEffect(() => {
		if (timeOfProject && timeOfProject !== 0) {
			setProgressWidth(`${(timeOfProject / timeSum) * 100}%`);
		}
	}, [timeOfProject]);

	useEffect(() => {
		if (project.id % 4 === 0) {
			setBarColor('#FFF5CC');
			setProgressColor('#FFB200');
		} else if (project.id % 3 === 0) {
			setBarColor('#D5FDEA');
			setProgressColor('#2BF494');
		} else if (project.id % 2 === 0) {
			setBarColor('#EAD6FF');
			setProgressColor('#9730FF');
		} else if (project.id % 1 === 0) {
			setBarColor('#FFE4CC');
			setProgressColor('#FF6B00');
		}
	}, [ProjectStatusBar]);

	return (
		<li className="projectstatus">
			<div className="projectstatus__info">
				<div className="projectstatus__info-wrapper">
					<h4 className="projectstatus__info-name">{project.title}</h4>
					<button className="projectstatus__info-btn">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M10 17L15 12L10 7V17Z" fill="black" />
						</svg>
					</button>
				</div>
				<p className="projectstatus__info-time">{formateTimeOfProject()}</p>
			</div>
			<div className="projectstatus__bar" style={{ backgroundColor: barColor }}>
				<span
					className="projectstatus__progress"
					style={{ backgroundColor: progressColor, width: progressWidth }}
				/>
			</div>
		</li>
	);
}
