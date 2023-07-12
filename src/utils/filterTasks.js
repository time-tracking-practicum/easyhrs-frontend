export function filterTasks(id, tasks = []) {
	const tasksOfProject = tasks.filter((task) => task.project === id);
	return tasksOfProject;
}
