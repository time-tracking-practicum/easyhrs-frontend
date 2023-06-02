import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import MatrixPage from '../pages/MatrixPage';

export default function Router() {
	return (
		// TODO: Добавить protectedRoute и вынести в отдельный компонент
		// компонент необходим для защиты страниц с авторизацией
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/matrix" element={<MatrixPage />} />
		</Routes>
	);
}
