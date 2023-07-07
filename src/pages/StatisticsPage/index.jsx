import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProjectStatusBar from '../../components/ProjectStatusBar';
import './StatisticsPage.css';

export default function StatisticsPage({ projects, tasks }) {
	const [timeSum, setTimeSum] = useState(0); // стейт времени, затраченного на все проекты вместе

	// функция подсчета итогового времени всех проектов
	useEffect(() => {
		let hours = 0;
		let mins = 0;
		let secs = 0;
		for (let i = 0; i < tasks.length; i + 1) {
			hours += tasks[i].time_in_progress.h;
			mins += tasks[i].time_in_progress.m;
			secs += tasks[i].time_in_progress.s;
		}
		setTimeSum(hours * 3600 + mins * 60 + secs);
	}, [StatisticsPage]);

	// Фильтрует таски по каждому проекту
	function filterTasks(id) {
		const tasksOfProject = tasks.filter((task) => task.project === id);
		return tasksOfProject;
	}

	return (
		<section className="statpage">
			<Header sectionName="Статистика" />
			<div className="statpage__container">
				<h3 className="statpage__title">Проекты</h3>
				<ul className="statpage__projects">
					{projects.map((project) => (
						<ProjectStatusBar
							key={project.id}
							project={project}
							tasks={filterTasks(project.id)}
							timeSum={timeSum}
						/>
					))}
				</ul>
			</div>
		</section>
	);
}
