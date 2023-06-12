import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Router.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import 'primereact/resources/primereact.css';

import StartPage from '../pages/StartPage';
import MainPage from '../pages/MainPage';
import MatrixPage from '../pages/MatrixPage';
import TaskCardPage from '../pages/TaskCardPage';
import ProfilePage from '../pages/ProfilePage';
import { UserContext } from '../contexts/UserContext';
import ProtectedRoute from '../components/ProtectedRoute';
import SettingsPage from '../pages/SettingsPage';

export default function Router() {
	const [currentUser, setCurrentuser] = useState({ name: '', email: '' });

	return (
		// TODO: Добавить protectedRoute и вынести в отдельный компонент
		// компонент необходим для защиты страниц с авторизацией
		<UserContext.Provider value={currentUser}>
			<div className="page">
				<Routes>
					<Route
						path="/"
						element={<StartPage onSetCurrentUser={setCurrentuser} />}
					/>
					<Route
						path="/main"
						element={
							<ProtectedRoute>
								<MainPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/matrix"
						element={
							<ProtectedRoute>
								<MatrixPage />
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
								<ProfilePage />
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
