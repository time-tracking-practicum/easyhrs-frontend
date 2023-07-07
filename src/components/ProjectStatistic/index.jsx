import Header from '../Header';
import ProjectStatusBar from '../ProjectStatusBar';
import ProjectStatisticTask from '../ProjectStatisticTask';
import ProjectStatisticTaskHeader from '../ProjectStatisticTaskHeader';
import useTime from '../../hooks/useTime';
import './ProjectStatistic.css';

const ProjectStatistic = ({ project }) => {
	const { title, tasks } = project;
	const { timeSum } = useTime(tasks);
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
