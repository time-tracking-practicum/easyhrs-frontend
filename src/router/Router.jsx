import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './Router.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import 'primereact/resources/primereact.css';

import StartPage from '../pages/StartPage';
import NavTab from '../components/NavTab';
import MainPage from '../pages/MainPage';
import MatrixPage from '../pages/MatrixPage';
import TaskCardPage from '../pages/TaskCardPage';
import ProfilePage from '../pages/ProfilePage';
import { UserContext } from '../contexts/UserContext';
import ProtectedRoute from '../components/ProtectedRoute';
import SettingsPage from '../pages/SettingsPage';
import taskApi from '../utils/TaskApi';

export default function Router() {
	const [currentUser, setCurrentuser] = useState({});
	const [tasks, setTasks] = useState([]); // стейт задач
	const localToken = localStorage.getItem('token');
	const sessionToken = sessionStorage.getItem('token');
	const nav = useNavigate();

	// функция загрузки задач с сервера
	const getTasks = () => {
		taskApi
			.getTasks()
			.then((data) => setTasks(data))
			.catch((error) => console.log(error));
	};

	const createTaskAndUpdate = (task) => {
		taskApi
			.createTask(task)
			.then(() => getTasks())
			.catch((err) => console.error(err));
	};

	const editTaskAndUpdate = (task) => {
		taskApi
			.editTask(task)
			.then(() => getTasks())
			.catch((err) => console.error(err));
	};

	const deleteTaskAndUpdate = (id) => {
		taskApi
			.deleteTask(id)
			.then(() => {
				getTasks();
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		getTasks();
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
				</Routes>
			</div>
		</UserContext.Provider>
	);
}
