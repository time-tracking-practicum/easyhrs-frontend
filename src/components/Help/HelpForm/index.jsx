import { useState, useContext } from 'react';

import './HelpForm.css';

import { UserContext } from '../../../contexts/UserContext';

function HelpForm({ handleFeedback }) {
	const currentUser = useContext(UserContext);

	const [formValue, setFormValue] = useState({
		email: '',
		message: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormValue({
			...formValue,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// eslint-disable-next-line react/destructuring-assignment
		const user = currentUser.id;
		const { email, message } = formValue;
		handleFeedback({ user, email, message });
	};

	const handleOnDisableButton = () => !formValue.email || !formValue.message;

	return (
		<form className="help__form" onSubmit={handleSubmit}>
			<h3 className="help__form-question">Остались вопросы ?</h3>
			<div className="help__input-container">
				<input
					className="help__input"
					type="email"
					placeholder="E-mail для связи"
					name="email"
					onChange={handleChange}
					required
				/>
				<span className="help__feedback">На этот e-mail мы пришлем ответ</span>
			</div>
			<textarea
				className="help__textarea"
				type="text"
				placeholder="Описание проблемы"
				name="message"
				onChange={handleChange}
				required
			/>
			<button
				className={`help__button-submit ${
					!handleOnDisableButton() ? 'help__button-submit_active' : ''
				}`}
			>
				Отправить
			</button>
		</form>
	);
}

export default HelpForm;
