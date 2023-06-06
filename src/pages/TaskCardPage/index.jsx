import './TaskCardPage.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function TaskCardPage() {
	return (
		<section className="taskcardpage">
			<div className="taskcardpage__title-wrapper">
				<Link to="/" className="taskcardpage__crumb" />
				<h2 className="taskcardpage__title">Задача</h2>
			</div>
			<form className="taskcardpage__form">Форма</form>
		</section>
	);
}
