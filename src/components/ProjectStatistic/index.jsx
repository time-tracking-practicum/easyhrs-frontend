import Header from '../Header';
import ProjectStatusBar from '../ProjectStatusBar';
import ProjectStatisticTask from '../ProjectStatisticTask';
import ProjectStatisticTaskHeader from '../ProjectStatisticTaskHeader';
import './ProjectStatistic.css';

const ProjectStatistic = ({ project, tasks, timeSum }) => {
	const { title } = project;
	return (
		<div>
			<Header branch={title} />
			<div className="projectTask">
				<ProjectStatusBar project={project} tasks={tasks} timeSum={timeSum} />
				<ul className="projectTask__tasks">
					<ProjectStatisticTaskHeader />
					{tasks.map((task) => (
						<ProjectStatisticTask {...task} key={task.id} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProjectStatistic;
