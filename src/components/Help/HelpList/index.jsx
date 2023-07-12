import './HelpList.css';

import HelpItem from '../HelpItem';

function HelpList() {
	const name = {
		addTask: 'Как создать задачу? ',
		addProject: 'Как начать новый проект?',
		statistics: 'Как посмотреть статистику проекта?',
		timer: 'Как включить/выключить таймер?',
		matrix: 'Что такое матрица?',
		yandex: 'Есть ли работа после Практикума?',
	};

	const text = {
		addTask: `Возьми магическую палочку, произнеси "Абра-кадабра, добавляй задачу!".
		Если серьезно, перейди на вкладку Главная и наверху нажми кнопку Создать задачу. Введи данные о задаче справа в открытом окне.`,
		addProject:
			'Новый проект начинается при создании задачи. Начни вводить новое название проекта в поле "Проект" и он добавится автоматически.',
		statistics:
			'Перейди на вкладку Статистика. Выбери проект и открой его. Там ты найдешь статистику самого Проекта и список всех его задач.',
		timer:
			'Включить таймер к задаче можно на Главной странице. В конце строки каждой задачи есть кнопка Play/Pause.',
		matrix:
			'Невозможно объяснить, что такое Матрица... Ты должен увидеть это сам. Не поздно отказаться. Потом пути назад не будет. Примешь синюю таблетку — и сказке конец. Ты проснешься в своей постели и поверишь, что это был сон. Примешь красную таблетку — войдешь в страну чудес. Я покажу тебе, насколько глубока кроличья нора',
		yandex: 'Ответа нет, это риторический вопрос.',
	};

	return (
		<div className="help__list">
			<HelpItem infoName={name.addTask} infoText={text.addTask} />
			<HelpItem infoName={name.addProject} infoText={text.addProject} />
			<HelpItem infoName={name.statistics} infoText={text.statistics} />
			<HelpItem infoName={name.timer} infoText={text.timer} />
			<HelpItem infoName={name.matrix} infoText={text.matrix} />
			<HelpItem infoName={name.yandex} infoText={text.yandex} />
		</div>
	);
}

export default HelpList;
