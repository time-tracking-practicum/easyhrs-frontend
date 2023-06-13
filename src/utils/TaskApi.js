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
		const res = await fetch(`${this._url}/tasks/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
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
}

const taskApi = new TaskApi({
	url: 'http://80.87.107.54/api/v1',
});

export default taskApi;
