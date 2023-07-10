import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import ProjectStatusBar from '../../components/ProjectStatusBar';
import { filterTasks } from '../../utils/filterTasks';
import useTime from '../../hooks/useTime';
import './StatisticsPage.css';

export default function StatisticsPage({ projects, tasks }) {
	const { timeSum } = useTime(tasks);

	return (
		<section className="statpage">
			<Header sectionName="Статистика" />
			<div className="statpage__container">
				<h3 className="statpage__title">Проекты</h3>
				<ul className="statpage__projects">
					{projects &&
						projects.map((project) => (
							<Link key={project.id} to={`/statistics/${project.id}`}>
								<ProjectStatusBar
									key={project.id}
									project={project}
									tasks={filterTasks(project.id, tasks)}
									timeSum={timeSum}
								/>
							</Link>
						))}
				</ul>
			</div>
		</section>
	);
}
