import './MainPage.css';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Task from '../../components/Task';
import TasksHeader from '../../components/TasksHeader';
import Timer from '../../components/Timer';
import Sidebar from '../../components/Sidebar';
import CreateTaskForm from '../../components/CreateTaskForm';
import projectApi from '../../utils/ProjectApi';
import EditTaskForm from '../../components/EditTaskForm';

export default function MainPage({
	handleCreateTask,
	handleEditTask,
	handleDeleteTask,
	tasks,
}) {
	const [playTimer, setPlayTimer] = useState(false);
	const [dropTimer, setDropTimer] = useState(false);
	const [pause, setPause] = useState(false);
	const [tasksList, setTasksList] = useState(tasks);
	const [isCreateTaskFormOpen, setIsCreateTaskFormOpen] = useState(false);
	const [isEditFormOpen, setIsEditTaskFormOpen] = useState(false);
	const [projests, setProjects] = useState({
		selected: null,
		all: [],
	});
	const [currentTask, setCurrentTask] = useState(null);

	const handleOpenCreateTaskForm = () => {
		setIsCreateTaskFormOpen(true);
	};

	const handleOpenEditTaskForm = (task) => {
		setCurrentTask(task);
		setProjects((prevState) => ({
			...prevState,
			selected: prevState.all.find((item) => item.id === task.project),
		}));
		setIsEditTaskFormOpen(true);
	};

	const handleCloseCreateTaskForm = () => {
		setIsCreateTaskFormOpen(false);
	};

	const handleCloseEditTaskForm = () => {
		setIsEditTaskFormOpen(false);
	};

	const sortTasksByName = (flag) => {
		const newTasksList = tasksList.sort((a, b) =>
			flag ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
		);
		setTasksList([...newTasksList]);
	};

	useEffect(() => {
		setTasksList(tasks);
		projectApi
			.getMyProjects()
			.then((data) => {
				setProjects((prevState) => ({ ...prevState, all: data }));
			})
			.catch((error) => console.error(error));
	}, [tasks]);

	return (
		<>
			<section className="main">
				<div className="main__animation main__animation_active">
					<Header
						sectionName="Мои задачи"
						newtask
						onButtonClick={handleOpenCreateTaskForm}
					/>
					<TasksHeader sortTasksByName={sortTasksByName} />
					<ul className="main__tasks">
						{tasksList.map((task) => (
							<Task
								key={task.id}
								name={task.name}
								project={
									projests.all.find((item) => item.id === task.project)?.title
								}
								deadline={task.deadline}
								handleOpenEditTaskForm={handleOpenEditTaskForm}
								status={task.status}
								emoji={task.emoji}
								urgent={task.is_urgent}
								important={task.is_important}
								task={task}
								setPlayTimer={setPlayTimer}
								setPause={setPause}
							/>
						))}
					</ul>
					{playTimer && (
						<Timer
							playTimer={playTimer}
							setPlayTimer={setPlayTimer}
							dropTimer={dropTimer}
							setDropTimer={setDropTimer}
							pause={pause}
							setPause={setPause}
						/>
					)}
				</div>
			</section>
			<Sidebar
				isOpen={isCreateTaskFormOpen}
				handleClose={handleCloseCreateTaskForm}
			>
				<CreateTaskForm
					projectList={projests}
					setProjectList={setProjects}
					handleCreateTask={handleCreateTask}
					setIsCreateTaskFormOpen={setIsCreateTaskFormOpen}
				/>
			</Sidebar>
			<Sidebar isOpen={isEditFormOpen} handleClose={handleCloseEditTaskForm}>
				<EditTaskForm
					task={currentTask}
					projectList={projests}
					setProjectList={setProjects}
					handleDeleteTask={handleDeleteTask}
					handleEditTask={handleEditTask}
					setIsEditTaskFormOpen={setIsEditTaskFormOpen}
				/>
			</Sidebar>
		</>
	);
}
