import { useEffect, useState } from 'react';

const useTime = (tasks) => {
	const [state, setTasks] = useState([]);
	const [timeSum, setTimeSum] = useState(0);

	useEffect(() => {
		setTasks([...tasks]);
	}, [tasks]);

	useEffect(() => {
		let hours = 0;
		let mins = 0;
		let secs = 0;
		for (let i = 0; i < state.length; i += 1) {
			hours += state[i].time_in_progress.h;
			mins += state[i].time_in_progress.m;
			secs += state[i].time_in_progress.s;
		}
		setTimeSum(hours * 3600 + mins * 60 + secs);
	}, [state]);

	return { timeSum, setTasks };
};

export default useTime;
