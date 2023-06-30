import './MainPage.css';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Task from '../../components/Task';
import Sidebar from '../../components/Sidebar';
import CreateTaskForm from '../../components/CreateTaskForm';
import projectApi from '../../utils/ProjectApi';

export default function MainPage({ handleCreateTask, tasks }) {
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

	return (
		<>
			<section className="main">
				<Header
					sectionName="Мои задачи"
					newtask
					onButtonClick={handleOpenCreateTaskForm}
				/>
				<ul className="main__tasks">
					{tasks?.map((task) => (
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
						/>
					))}
				</ul>
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
