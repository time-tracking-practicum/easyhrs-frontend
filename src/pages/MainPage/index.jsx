import './MainPage.css';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Task from '../../components/Task';
import TasksHeader from '../../components/TasksHeader';
import Timer from '../../components/Timer';
import Sidebar from '../../components/Sidebar';
import CreateTaskForm from '../../components/CreateTaskForm';
import projectApi from '../../utils/ProjectApi';

export default function MainPage({ handleCreateTask, tasks }) {
	const [tasksList, setTasksList] = useState(tasks);

	const [isCreateTaskFormOpen, setIsCreateTaskFormOpen] = useState(false);

	const [projests, setProjects] = useState({
		selected: null,
		all: [],
	});

	const handleOpenCreateTaskForm = () => {
		projectApi
			.getMyProjects()
			.then((data) => {
				setProjects((prevState) => ({ ...prevState, all: data }));
			})
			.catch((error) => console.error(error));
		setIsCreateTaskFormOpen(true);
	};

	const handleCloseCreateTaskForm = () => {
		setIsCreateTaskFormOpen(false);
	};

	const sortTasksByName = (flag) => {
		const newTasksList = tasksList.sort((a, b) =>
			flag ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
		);
		setTasksList([...newTasksList]);
	};

	useEffect(() => setTasksList(tasks), [tasks]);

	const [playTimer, setPlayTimer] = useState(false);
	const [dropTimer, setDropTimer] = useState(false);
	const [pause, setPause] = useState(false);

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
								project={task.project}
								deadline={task.deadline}
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
		</>
	);
}
