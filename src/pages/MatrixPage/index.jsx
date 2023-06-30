import './MatrixPage.css';
import React, { useEffect, useState } from 'react';
import Matrix from '../../components/Matrix';

export default function MatrixPage({ tasks }) {
	const [urgimp, setUrgimp] = useState([]); // стейт задач Важное, срочное
	const [urg, setUrg] = useState([]); // стейт задач Срочное, неважное
	const [imp, setImp] = useState([]); // стейт задач Важное, несрочное
	const [notUrgimp, setNotUrgimp] = useState([]); // стейт задач Несрочное, неважное

	useEffect(() => {
		// eslint-disable-next-line no-plusplus
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].is_urgent && tasks[i].is_important) {
				setUrgimp((prev) => [...prev, tasks[i]]);
			} else if (tasks[i].is_urgent && !tasks[i].is_important) {
				setUrg((prev) => [...prev, tasks[i]]);
			} else if (!tasks[i].is_urgent && tasks[i].is_important) {
				setImp((prev) => [...prev, tasks[i]]);
			} else if (!tasks[i].is_urgent && !tasks[i].is_important) {
				setNotUrgimp((prev) => [...prev, tasks[i]]);
			}
		}
	}, [MatrixPage]);

	return (
		<section className="matrixpage">
			<h2 className="matrixpage__title">Матрица задач</h2>
			<div className="matrixpage__container">
				<Matrix
					title="Важное, срочное"
					blockColor="#FFDEDE"
					subtitle="Сделай это сейчас"
					subtitleColor="#D10000"
					tasks={urgimp}
				/>
				<Matrix
					title="Важное, несрочное"
					blockColor="#C1F199"
					subtitle="Решите , когда это сделать"
					subtitleColor="#337300"
					tasks={urg}
				/>
				<Matrix
					title="Срочное, неважное"
					blockColor="#FFEA9F"
					subtitle="Делегируй"
					subtitleColor="#EE7200"
					tasks={imp}
				/>
				<Matrix
					title="Несрочное, неважное"
					blockColor="#BDEBFF"
					subtitle="Сделай это, когда будет не чего делать"
					subtitleColor="#0050C7"
					tasks={notUrgimp}
				/>
			</div>
		</section>
	);
}
