import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useTime from '../../hooks/useTime';
import ProjectStatistic from '../../components/ProjectStatistic';
import projectApi from '../../utils/ProjectApi';
import { filterTasks } from '../../utils/filterTasks';

export default function ProjectStatisticPage({ tasks }) {
	const { projectId } = useParams();
	const [project, setProjects] = useState(null);
	const { timeSum } = useTime(tasks);
	useEffect(() => {
		if (!projectId) return;
		projectApi
			.getMyOneProjects(projectId)
			.then((res) => setProjects(res))
			.catch((e) => console.log(e));
	}, [projectId]);

	const tasksOfPRoject = filterTasks(projectId, tasks);
	return (
		project && (
			<section className="statpage">
				<ProjectStatistic
					project={project}
					tasks={tasksOfPRoject}
					timeSum={timeSum}
				/>
			</section>
		)
	);
}
