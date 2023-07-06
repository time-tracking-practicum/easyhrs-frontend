import './ProjectStatusBar.css';
import { useEffect, useState } from 'react';

export default function ProjectStatusBar({ project }) {
	const [barColor, setBarColor] = useState(''); // цвет фона прогресс бара
	const [progressColor, setProgressColor] = useState(''); // цвет заполняемости прогресс бара

	console.log(project.id % 4 === 0);
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
				<p className="projectstatus__info-time">1 час 56 мин</p>
			</div>
			<div className="projectstatus__bar" style={{ backgroundColor: barColor }}>
				<span
					className="projectstatus__progress"
					style={{ backgroundColor: progressColor }}
				/>
			</div>
		</li>
	);
}
