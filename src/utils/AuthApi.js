/* eslint-disable no-underscore-dangle */
class AuthApi {
	constructor(options) {
		this._url = options.url;
	}

	static _checkResult = (res) => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(new Error(`Ошибка: ${res.status}`));
	};

	async register(data) {
		const res = await fetch(`${this._url}/users/`, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(data),
		});
		return AuthApi._checkResult(res);
	}

	async login(data) {
		const res = await fetch(`${this._url}/auth/token/login/`, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(data),
		});
		return AuthApi._checkResult(res);
	}
}

const authApi = new AuthApi({
	url: 'http://80.87.107.54/api/v1',
});

export default authApi;
