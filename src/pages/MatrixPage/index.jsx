/* eslint-disable react/destructuring-assignment */
import './MatrixPage.css';
import React, { useEffect, useState } from 'react';
import Matrix from '../../components/Matrix';
import Sidebar from '../../components/Sidebar';
import CreateTaskForm from '../../components/CreateTaskForm';
import Header from '../../components/Header';

export default function MatrixPage({
	tasks,
	projects,
	setProjects,
	handleCreateTask,
}) {
	const [urgimp, setUrgImp] = useState([]); // стейт задач Важное, срочное
	const [urg, setUrg] = useState([]); // стейт задач Срочное, неважное
	const [imp, setImp] = useState([]); // стейт задач Важное, несрочное
	const [notUrgimp, setNotUrgImp] = useState([]); // стейт задач Несрочное, неважное

	const [isCreateTaskFormOpen, setIsCreateTaskFormOpen] = useState(false);
	const [isTaskImportant, setIsTaskImportant] = useState(false);
	const [isTaskUrgent, setIsTaskUrgent] = useState(false);

	const handleOpenCreateTaskForm = ({ isImportant, isUrgent }) => {
		setIsCreateTaskFormOpen(true);
		if (isImportant) {
			setIsTaskImportant(true);
		} else {
			setIsTaskImportant(false);
		}
		if (isUrgent) {
			setIsTaskUrgent(true);
		} else {
			setIsTaskUrgent(false);
		}
	};

	const handleCloseCreateTaskForm = () => {
		setIsCreateTaskFormOpen(false);
	};

	useEffect(() => {
		let urgAndImpArr = [];
		let urgArr = [];
		let impArr = [];
		let notUrgAndNotImpArr = [];
		tasks.forEach((task) => {
			if (task.is_urgent && task.is_important) {
				urgAndImpArr.push(task);
			} else if (task.is_urgent && !task.is_important) {
				urgArr.push(task);
			} else if (!task.is_urgent && task.is_important) {
				impArr.push(task);
			} else if (!task.is_urgent && !task.is_important) {
				notUrgAndNotImpArr.push(task);
			}
		});
		setUrgImp([...urgAndImpArr]);
		setUrg([...urgArr]);
		setImp([...impArr]);
		setNotUrgImp([...notUrgAndNotImpArr]);
	}, [tasks]);

	return (
		<>
			<section className="matrixpage">
				<Header sectionName="Матрица задач" />
				<div className="matrixpage__container">
					<Matrix
						title="Важное, срочное"
						blockColor="#FFDEDE"
						subtitle="Сделай это сейчас"
						subtitleColor="#D10000"
						tasks={urgimp}
						handleButtonClick={() => {
							handleOpenCreateTaskForm({ isImportant: true, isUrgent: true });
						}}
					/>
					<Matrix
						title="Важное, несрочное"
						blockColor="#C1F199"
						subtitle="Решите, когда это сделать"
						subtitleColor="#337300"
						tasks={urg}
						handleButtonClick={() => {
							handleOpenCreateTaskForm({ isImportant: true, isUrgent: false });
						}}
					/>
					<Matrix
						title="Срочное, неважное"
						blockColor="#FFEA9F"
						subtitle="Делегируй"
						subtitleColor="#EE7200"
						tasks={imp}
						handleButtonClick={() => {
							handleOpenCreateTaskForm({ isImportant: false, isUrgent: true });
						}}
					/>
					<Matrix
						title="Несрочное, неважное"
						blockColor="#BDEBFF"
						subtitle="Сделай это, когда будет нечего делать"
						subtitleColor="#0050C7"
						tasks={notUrgimp}
						handleButtonClick={() => {
							handleOpenCreateTaskForm({ isImportant: false, isUrgent: false });
						}}
					/>
				</div>
			</section>
			<Sidebar
				isOpen={isCreateTaskFormOpen}
				handleClose={handleCloseCreateTaskForm}
			>
				<CreateTaskForm
					projectList={projects}
					setProjectList={setProjects}
					handleCreateTask={handleCreateTask}
					setIsCreateTaskFormOpen={setIsCreateTaskFormOpen}
					isImportant={isTaskImportant}
					isUrgent={isTaskUrgent}
				/>
			</Sidebar>
		</>
	);
}
