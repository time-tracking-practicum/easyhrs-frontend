import { createContext, useState } from 'react';
import taskApi from '../utils/TaskApi';

export const TasksContext = createContext();

export const useTasks = () => {
	const [tasks, setTasks] = useState([]); // стейт задач

	async function setCurrentUserTasks() {
		try {
			const currentUserTasks = await taskApi.getUserTasks();
			setTasks(currentUserTasks);
		} catch (e) {
			console.log(`Ошибка при загрузке задач текущего пользователя: ${e}`);
		}
	}

	const createTaskAndUpdate = (task) => {
		taskApi
			.createTask(task)
			.then(() => setCurrentUserTasks())
			.catch((e) => console.error(`Ошибка при создании новой задачи: ${e}`));
	};

	const editTaskAndUpdate = (task) => {
		taskApi
			.editTask(task)
			.then(() => setCurrentUserTasks())
			.catch((e) => `Ошибка при изменении задачи: ${e}`);
	};

	const deleteTaskAndUpdate = (id) => {
		taskApi
			.deleteTask(id)
			.then(() => {
				setCurrentUserTasks();
			})
			.catch((e) => `Ошибка при удалении задачи: ${e}`);
	};

	const TasksProvider = ({ children }) => (
		<TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
	);

	return {
		setCurrentUserTasks,
		createTaskAndUpdate,
		editTaskAndUpdate,
		deleteTaskAndUpdate,
		TasksProvider,
	};
};
