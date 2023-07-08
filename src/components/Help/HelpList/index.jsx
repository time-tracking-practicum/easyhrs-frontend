import './HelpList.css';

import HelpItem from '../HelpItem';

function HelpList() {
	const name = {
		addTask: 'Как добавить новую задачу?',
		priorityTask: 'Как добавить приоритет для задачи?',
	};

	return (
		<div className="help__list">
			<HelpItem infoName={name.addTask} />
			<HelpItem infoName={name.addTask} />
			<HelpItem infoName={name.priorityTask} />
			<HelpItem infoName={name.addTask} />
			<HelpItem infoName={name.addTask} />
		</div>
	);
}

export default HelpList;
