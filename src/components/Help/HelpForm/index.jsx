import './HelpForm.css';

function HelpForm() {
	return (
		<form className="help__form">
			<h3 className="help__form-question">Остались вопросы ?</h3>
			<div className="help__input-container">
				<input
					className="help__input"
					type="email"
					placeholder="E-mail для связи"
					required
				/>
				<span className="help__feedback">На этот e-mail мы пришлем ответ</span>
			</div>
			<textarea
				className="help__textarea"
				type="text"
				placeholder="Описание проблемы"
				required
			/>
			<button className="help__button-submit">Отправить</button>
		</form>
	);
}

export default HelpForm;
