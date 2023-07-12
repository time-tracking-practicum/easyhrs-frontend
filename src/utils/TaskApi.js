/* eslint-disable no-underscore-dangle */
class TaskApi {
	constructor(options) {
		this._url = options.url;
	}

	static _checkResult = (res) => {
		if (res.status === 204) {
			return res;
		}
		if (res.ok) {
			return res.json();
		}

		return Promise.reject(new Error(`Ошибка: ${res}`));
	};

	static getToken = () =>
		localStorage.getItem('token') || sessionStorage.getItem('token');

	async getUserTasks() {
		const token = TaskApi.getToken();
		const res = await fetch(`${this._url}/tasks/list_tasks/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Token ${token}`,
			},
		});
		return TaskApi._checkResult(res);
	}

	async getTasks() {
		const res = await fetch(`${this._url}/tasks/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				// authorization: `Token ${token}`,
			},
		});
		return TaskApi._checkResult(res);
	}

	async getTaskById(id) {
		const res = await fetch(`${this._url}/tasks/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return TaskApi._checkResult(res);
	}

	async createTask(task) {
		const token =
			localStorage.getItem('token') || sessionStorage.getItem('token');
		const res = await fetch(`${this._url}/tasks/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Token ${token}`,
			},
			body: JSON.stringify(task),
		});
		return TaskApi._checkResult(res);
	}

	async editTask(task) {
		const token =
			localStorage.getItem('token') || sessionStorage.getItem('token');
		const res = await fetch(`${this._url}/tasks/${task.id}/`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Token ${token}`,
			},
			body: JSON.stringify(task),
		});
		return TaskApi._checkResult(res);
	}

	async deleteTask(id) {
		const token =
			localStorage.getItem('token') || sessionStorage.getItem('token');
		const res = await fetch(`${this._url}/tasks/${id}/`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Token ${token}`,
			},
		});
		return TaskApi._checkResult(res);
	}

	async updateTimeInProgress(id, data) {
		const token =
			localStorage.getItem('token') || sessionStorage.getItem('token');
		const res = await fetch(`${this._url}/tasks/${id}/`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Token ${token}`,
			},
			body: JSON.stringify(data),
		});
		return TaskApi._checkResult(res);
	}
}

const taskApi = new TaskApi({
	url: 'https://easyhrs.hopto.org/api/v1',
});

export default taskApi;
