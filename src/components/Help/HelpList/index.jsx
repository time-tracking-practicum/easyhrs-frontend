import './HelpList.css';

import HelpItem from '../HelpItem';

function HelpList() {
	const name = {
		addTask: 'Как добавить новую задачу?',
		priorityTask: 'Как добавить приоритет для задачи?',
	};

	const text = {
		addTask: `
			Задать дедлайн для задачи можно непосредственно при
			ее создании выбрав нужную дату в поле “Дедлайн”.
			Если задача уже создана, то для того, чтобы
			добавить срок выполнения нужно зайти в параметры задачи
			и ввести нужную дату в поле “Дедлайн”.
		`,
		nothing: 'Никак',
		plug: 'Может ты подумаешь сам?',
	};

	return (
		<div className="help__list">
			<HelpItem infoName={name.addTask} infoText={text.nothing} />
			<HelpItem infoName={name.addTask} infoText={text.addTask} />
			<HelpItem infoName={name.priorityTask} infoText={text.nothing} />
			<HelpItem infoName={name.addTask} infoText={text.nothing} />
			<HelpItem infoName={name.addTask} infoText={text.plug} />
		</div>
	);
}

export default HelpList;
