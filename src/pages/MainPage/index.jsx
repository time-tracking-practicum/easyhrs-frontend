import './MainPage.css';
import React from 'react';
import Header from '../../components/Header';
import Task from '../../components/Task';

export default function MainPage({ tasks }) {
	return (
		<div className="main page__main">
			<div className="main__menu">
				<h3 className="main__menu-title">EasyHrs</h3>
			</div>
			<div className="main__container">
				<Header sectionName="Мои задачи" newtask />
				<ul className="main__tasks">
					{tasks.map((task) => (
						<Task
							key={task.id}
							name={task.name}
							project={task.project}
							deadline={task.deadline}
							status={task.status}
							task={task}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}
