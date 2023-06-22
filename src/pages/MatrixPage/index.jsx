import './MatrixPage.css';
import React from 'react';
import Matrix from '../../components/Matrix';

export default function MatrixPage() {
	return (
		<section className="matrixpage">
			<h2 className="matrixpage__title">Матрица задач</h2>
			<div className="matrixpage__container">
				<Matrix
					title="Важное, срочное"
					blockColor="#FFDEDE"
					subtitle="Сделай это сейчас"
					subtitleColor="#D10000"
				/>
				<Matrix
					title="Важное, несрочное"
					blockColor="#C1F199"
					subtitle="Решите , когда это сделать"
					subtitleColor="#337300"
				/>
				<Matrix
					title="Срочное, неважное"
					blockColor="#FFEA9F"
					subtitle="Делегируй"
					subtitleColor="#EE7200"
				/>
				<Matrix
					title="Несрочное, неважное"
					blockColor="#BDEBFF"
					subtitle="Сделай это, когда будет не чего делать"
					subtitleColor="#0050C7"
				/>
			</div>
		</section>
	);
}
