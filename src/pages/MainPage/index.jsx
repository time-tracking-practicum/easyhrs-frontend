import './MainPage.css';
import React from 'react';
import Header from '../../components/Header';
import Task from '../../components/Task';
import TasksHeader from '../../components/TasksHeader';

export default function MainPage({ tasks }) {
	return (
		<section className="main">
			<div className="main__animation main__animation_active">
				<Header sectionName="Мои задачи" newtask />
				<TasksHeader />
				<ul className="main__tasks">
					{tasks.map((task) => (
						<Task
							key={task.id}
							name={task.name}
							project={task.project}
							deadline={task.deadline}
							status={task.status}
							emoji={task.emoji}
							urgent={task.is_urgent}
							important={task.is_important}
							task={task}
						/>
					))}
				</ul>
			</div>
		</section>
	);
}
