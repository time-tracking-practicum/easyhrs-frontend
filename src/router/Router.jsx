import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './Router.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import 'primereact/resources/primereact.css';

import StartPage from '../pages/StartPage';
import NavTab from '../components/NavTab';
import MainPage from '../pages/MainPage';
import MatrixPage from '../pages/MatrixPage';
import StatisticsPage from '../pages/StatisticsPage';
import TaskCardPage from '../pages/TaskCardPage';
import ProfilePage from '../pages/ProfilePage';
import { UserContext } from '../contexts/UserContext';
import ProtectedRoute from '../components/ProtectedRoute';
import SettingsPage from '../pages/SettingsPage';
import taskApi from '../utils/TaskApi';
import projectApi from '../utils/ProjectApi';

export default function Router() {
	const [currentUser, setCurrentuser] = useState({});
	const [tasks, setTasks] = useState([]); // стейт задач
	const [projects, setProjects] = useState({
		selected: null,
		all: [],
	}); // стейт проектов
	const localToken = localStorage.getItem('token');
	const sessionToken = sessionStorage.getItem('token');
	const nav = useNavigate();

	// функция загрузки задач текущего пользователя с сервера
	async function setCurrentUserTasks() {
		try {
			const currentUserTasks = await taskApi.getUserTasks();
			setTasks(currentUserTasks);
		} catch (e) {
			console.log(`Ошибка при загрузке задач текущего пользователя: ${e}`);
		}
	}

	const createTaskAndUpdate = (task) => {
		taskApi
			.createTask(task)
			.then(() => setCurrentUserTasks())
			.catch((err) => console.error(err));
	};

	const editTaskAndUpdate = (task) => {
		taskApi
			.editTask(task)
			.then(() => setCurrentUserTasks())
			.catch((err) => console.error(err));
	};

	const deleteTaskAndUpdate = (id) => {
		taskApi
			.deleteTask(id)
			.then(() => {
				setCurrentUserTasks();
			})
			.catch((err) => console.error(err));
	};

	// функция загрузки проектов юзера
	useEffect(() => {
		projectApi
			.getMyProjects()
			.then((data) => {
				setProjects((prevState) => ({ ...prevState, all: data }));
			})
			.catch((error) => console.error(error));
	}, []);

	useEffect(() => {
		setCurrentUserTasks();
	}, []);

	// функция проверки токена в памяти браузера
	useEffect(() => {
		if (localToken || sessionToken) {
			nav('/main');
		}
	}, []);

	return (
		<UserContext.Provider value={currentUser}>
			<div className="page">
				{(localToken || sessionToken) && <NavTab />}
				<Routes>
					<Route
						path="/"
						element={<StartPage onSetCurrentUser={setCurrentuser} />}
					/>
					<Route
						path="/main"
						element={
							<ProtectedRoute>
								<MainPage
									handleCreateTask={createTaskAndUpdate}
									handleEditTask={editTaskAndUpdate}
									handleDeleteTask={deleteTaskAndUpdate}
									tasks={tasks}
								/>
							</ProtectedRoute>
						}
					/>
					<Route
						path="/matrix"
						element={
							<ProtectedRoute>
								<MatrixPage
									handleCreateTask={createTaskAndUpdate}
									tasks={tasks}
								/>
							</ProtectedRoute>
						}
					/>
					<Route
						path="/task-card"
						element={
							<ProtectedRoute>
								<TaskCardPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/profile"
						element={
							<ProtectedRoute>
								<ProfilePage onSetCurrentUser={setCurrentuser} />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/settings"
						element={
							<ProtectedRoute>
								<SettingsPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/statistics"
						element={
							<ProtectedRoute>
								<StatisticsPage projects={projects.all} />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</div>
		</UserContext.Provider>
	);
}
