import Header from '../Header';
import ProjectStatusBar from '../ProjectStatusBar';
import ProjectStatisticTask from '../ProjectStatisticTask';
import ProjectStatisticTaskHeader from '../ProjectStatisticTaskHeader';
import './ProjectStatistic.css';

const ProjectStatistic = ({ project }) => (
	<div>
		<Header branch={project?.title} />
		<div className="projectTask">
			<ProjectStatusBar title={project?.title} />
			<ul className="projectTask__tasks">
				<ProjectStatisticTaskHeader />
				{project.taks?.map((task) => (
					<ProjectStatisticTask {...task} key={task.id} />
				))}
			</ul>
		</div>
	</div>
);

export default ProjectStatistic;
