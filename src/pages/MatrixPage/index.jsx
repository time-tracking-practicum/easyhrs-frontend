import './MatrixPage.css';
import React from 'react';
import Matrix from '../../components/Matrix';

export default function MatrixPage({ tasks }) {
	// функция получения важных и срочных задач
	const getUrgImpTasks = () => {
		let urgImp = [];
		for (let i = 0; i < tasks.length; i += 1) {
			if (tasks[i].is_urgent && tasks[i].is_important) {
				urgImp.push(tasks[i]);
			}
		}
		return urgImp;
	};

	// функция получения неважных и срочных задач
	const getUrgTasks = () => {
		let urg = [];
		for (let i = 0; i < tasks.length; i += 1) {
			if (tasks[i].is_urgent && tasks[i].is_important) {
				urg.push(tasks[i]);
			}
		}
		return urg;
	};

	// функция получения важных и несрочных задач
	const getImpTasks = () => {
		let imp = [];
		for (let i = 0; i < tasks.length; i += 1) {
			if (tasks[i].is_urgent && tasks[i].is_important) {
				imp.push(tasks[i]);
			}
		}
		return imp;
	};

	// функция получения неважных и несрочных задач
	const getNotUrgImpTasks = () => {
		let notUrgImp = [];
		for (let i = 0; i < tasks.length; i += 1) {
			if (!tasks[i].is_urgent && !tasks[i].is_important) {
				notUrgImp.push(tasks[i]);
			}
		}
		return notUrgImp;
	};

	return (
		<section className="matrixpage">
			<h2 className="matrixpage__title">Матрица задач</h2>
			<div className="matrixpage__container">
				<Matrix
					title="Важное, срочное"
					blockColor="#FFDEDE"
					subtitle="Сделай это сейчас"
					subtitleColor="#D10000"
					tasks={getUrgImpTasks()}
				/>
				<Matrix
					title="Важное, несрочное"
					blockColor="#C1F199"
					subtitle="Решите , когда это сделать"
					subtitleColor="#337300"
					tasks={getImpTasks()}
				/>
				<Matrix
					title="Срочное, неважное"
					blockColor="#FFEA9F"
					subtitle="Делегируй"
					subtitleColor="#EE7200"
					tasks={getUrgTasks()}
				/>
				<Matrix
					title="Несрочное, неважное"
					blockColor="#BDEBFF"
					subtitle="Сделай это, когда будет не чего делать"
					subtitleColor="#0050C7"
					tasks={getNotUrgImpTasks()}
				/>
			</div>
		</section>
	);
}
