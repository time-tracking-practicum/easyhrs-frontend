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

export default function Router() {
	const [currentUser, setCurrentuser] = useState({ name: '', email: '' });

	return (
		// TODO: Добавить protectedRoute и вынести в отдельный компонент
		// компонент необходим для защиты страниц с авторизацией
		<div className="page">
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/main" element={<MainPage />} />
				<Route path="/matrix" element={<MatrixPage />} />
				<Route path="/task-card" element={<TaskCardPage />} />
				<Route path="/profile" element={<ProfilePage />} />
			</Routes>
		</div>
	);
}
