import './MainPage.css';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Task from '../../components/Task';

import Timer from '../../components/Timer';

export default function MainPage({ tasks }) {
	const [playTimer, setPlayTimer] = useState(false);
	const [dropTimer, setDropTimer] = useState(false);
	const [pause, setPause] = useState(false);

	return (
		<section className="main">
			<Header sectionName="Мои задачи" newtask /><ul className="main__tasks">
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
						setPlayTimer={setPlayTimer}
						setPause={setPause} />
				))}
			</ul>
			{playTimer && <Timer 
				playTimer={playTimer}
				setPlayTimer={setPlayTimer} 
				dropTimer={dropTimer} 
				setDropTimer={setDropTimer} 
				pause={pause} 
				setPause={setPause}
			/>}
		</section>
	);
}
