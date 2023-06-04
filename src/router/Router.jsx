import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Router.css';

import StartPage from '../pages/StartPage';
import MainPage from '../pages/MainPage';
import MatrixPage from '../pages/MatrixPage';
import TaskCardPage from '../pages/TaskCardPage';

export default function Router() {
	return (
		// TODO: Добавить protectedRoute и вынести в отдельный компонент
		// компонент необходим для защиты страниц с авторизацией
		<div className="page">
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="/main" element={<MainPage />} />
				<Route path="/matrix" element={<MatrixPage />} />
				<Route path="/task-card" element={<TaskCardPage />} />
			</Routes>
		</div>
	);
}
