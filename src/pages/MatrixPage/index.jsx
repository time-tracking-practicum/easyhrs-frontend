import './MatrixPage.css';
import React from 'react';
import Matrix from '../../components/Matrix';

export default function MatrixPage() {
	return (
		<section className="matrixpage">
			<h2 className="matrixpage__title">Матрица задач</h2>
			<div className="matrixpage__container">
				<Matrix
					color="#FFE1E1"
					title="Важно и срочно"
					subtitle="Сделай это сейчас"
					subtitleColor="#D10000"
				/>
				<Matrix
					color="#D5FFB0"
					title="Важно, но не срочно"
					subtitle="Решите , когда это сделать"
					subtitleColor="#337300"
				/>
				<Matrix
					color="#FFEA9F"
					title="Не важно, но срочно"
					subtitle="Делегируй"
					subtitleColor="#EE7200"
				/>
				<Matrix
					color="#BDEBFF"
					title="Не важно и не срочно"
					subtitle="Сделай это, когда будет не чего делать"
					subtitleColor="#0050C7"
				/>
			</div>
		</section>
	);
}
