import Header from '../../components/Header';
import ProjectStatusBar from '../../components/ProjectStatusBar';
import './StatisticsPage.css';

export default function StatisticsPage({ projects, tasks }) {
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
							tasks={tasks}
						/>
					))}
				</ul>
			</div>
		</section>
	);
}
