/* eslint-disable no-underscore-dangle */
class TaskApi {
	constructor(options) {
		this._url = options.url;
	}

	static _checkResult = (res) => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(new Error(`Ошибка: ${res.status}`));
	};

	async getTasks() {
		const token =
			localStorage.getItem('token') || sessionStorage.getItem('token');
		const res = await fetch(`${this._url}/tasks/list_tasks/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Token ${token}`,
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
}

const taskApi = new TaskApi({
	url: 'https://easyhrs.hopto.org/api/v1',
});

export default taskApi;
