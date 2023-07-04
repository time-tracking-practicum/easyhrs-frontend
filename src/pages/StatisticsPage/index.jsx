import Header from '../../components/Header';
import ProjectStatusBar from '../../components/ProjectStatusBar';
import './StatisticsPage.css';

export default function StatisticsPage({ projects }) {
	return (
		<section className="statpage">
			<Header sectionName="Статистика" />
			<div className="statpage__container">
				<h3 className="statpage__title">Проекты</h3>
				<ul className="statpage__projects">
					{projects.map((project) => (
						<ProjectStatusBar title={project.title} />
					))}
				</ul>
			</div>
		</section>
	);
}
