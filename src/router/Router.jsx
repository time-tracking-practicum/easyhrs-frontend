import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import ProjectStatisticPage from '../pages/ProjectStatisticPage';
import { UserContext } from '../contexts/UserContext';
import ProtectedRoute from '../components/ProtectedRoute';
import SettingsPage from '../pages/SettingsPage';
import HelpPage from '../pages/HelpPage';
import taskApi from '../utils/TaskApi';
import projectApi from '../utils/ProjectApi';
import userApi from '../utils/UserApi';

export default function Router() {
	const [currentUser, setCurrentuser] = useState({
		email: '',
		username: '',
		firstName: '',
		lastName: '',
		id: '',
		photo: '',
	});
	const [tasks, setTasks] = useState([]); // стейт задач
	const [projects, setProjects] = useState({
		selected: null,
		all: [],
	}); // стейт проектов
	const [isLoading, setIsLoading] = useState(false);
	const localToken = localStorage.getItem('token');
	const sessionToken = sessionStorage.getItem('token');
	const nav = useNavigate();
	const location = useLocation();

	// функция загрузки задач текущего пользователя с сервера
	async function setCurrentUserTasks() {
		try {
			const currentUserTasks = await taskApi.getUserTasks();
			setTasks(currentUserTasks);
		} catch (e) {
			console.log(`Ошибка при загрузке задач текущего пользователя: ${e}`);
		}
	}

	// функция загрузки проектов текущего пользователя с сервера
	async function setCurrentUserProjects() {
		try {
			const currentUserProjects = await projectApi.getUserProjects();
			setProjects((prevState) => ({ ...prevState, all: currentUserProjects }));
		} catch (e) {
			console.log(`Ошибка при загрузке проектов текущего пользователя: ${e}`);
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

	// функция загрузки проектов и задач юзера
	useEffect(() => {
		if ((localToken || sessionToken) && currentUser) {
			setCurrentUserProjects();
			if (projects) {
				setCurrentUserTasks();
			}
		}
	}, [currentUser]);

	const updateTimeInProgress = (id, data) => {
		taskApi
			.updateTimeInProgress(id, data)
			.then(() => setCurrentUserTasks())
			.catch((err) => console.error(err));
	};

	// функция проверки токена в памяти браузера
	useEffect(() => {
		if ((localToken || sessionToken) && location.pathname === '/') {
			nav('/main');
		}
	}, []);

	// получение данных юзера и загрузка их в контекст
	const getCurrentUser = async () => {
		try {
			setIsLoading(true);
			const userData = await userApi.getCurrentUser();
			console.log(userData);
			const filterUserData = (data) => data || '';
			setCurrentuser({
				email: filterUserData(userData.email),
				username: filterUserData(userData.username),
				firstName: filterUserData(userData.first_name),
				lastName: filterUserData(userData.last_name),
				id: userData.id,
				photo: filterUserData(userData.photo),
			});
		} catch (error) {
			console.log(error);
		} finally {
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}
	};

	useEffect(() => {
		if (localToken || sessionToken) {
			getCurrentUser();
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
									setCurrentUserProjects={setCurrentUserProjects}
									projects={projects}
									setProjects={setProjects}
									hadleUpdateTimeInProgress={updateTimeInProgress}
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
									projects={projects}
									setProjects={setProjects}
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
								<ProfilePage
									loading={isLoading}
									getCurrentUser={getCurrentUser}
								/>
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
								<StatisticsPage projects={projects.all} tasks={tasks} />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/statistics/:projectId"
						element={
							<ProtectedRoute>
								<ProjectStatisticPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/statistics/:projectId"
						element={
							<ProtectedRoute>
								<ProjectStatisticPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/help"
						element={
							<ProtectedRoute>
								<HelpPage />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</div>
		</UserContext.Provider>
	);
}
