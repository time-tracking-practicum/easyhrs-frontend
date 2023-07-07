import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectStatistic from '../../components/ProjectStatistic';
import projectApi from '../../utils/ProjectApi';

export default function ProjectStatisticPage() {
	const { projectId } = useParams();
	const [project, setProjects] = useState(null);
	useEffect(() => {
		if (!projectId) return;
		projectApi
			.getMyOneProjects(projectId)
			.then((res) => setProjects(res))
			.catch((e) => console.log(e));
	}, [projectId]);
	return (
		project && (
			<section className="statpage">
				<ProjectStatistic project={project} />
			</section>
		)
	);
}
