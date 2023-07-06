/* eslint-disable no-underscore-dangle */
class ProjectApi {
	constructor(options) {
		this._url = options.url;
	}

	_token = localStorage.getItem('token') || sessionStorage.getItem('token');

	static _checkResult = (res) => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(new Error(`Ошибка: ${res}`));
	};

	async createProject(project) {
		const token =
			localStorage.getItem('token') || sessionStorage.getItem('token');
		const res = await fetch(`${this._url}/projects/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Token ${token}`,
			},
			body: JSON.stringify(project),
		});
		return ProjectApi._checkResult(res);
	}

	async getUserProjects() {
		const token =
			localStorage.getItem('token') || sessionStorage.getItem('token');
		const res = await fetch(`${this._url}/projects/list_projects/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Token ${token}`,
			},
		});
		return ProjectApi._checkResult(res);
	}
}

const projectApi = new ProjectApi({
	url: 'https://easyhrs.hopto.org/api/v1',
});

export default projectApi;
