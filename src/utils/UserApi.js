/* eslint-disable no-underscore-dangle */
class UserApi {
	constructor(options) {
		this._url = options.url;
	}

	static _checkResult = (res) => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(new Error(`Ошибка: ${res.status}`));
	};

	async getCurrentUser() {
		const token =
			localStorage.getItem('token') || sessionStorage.getItem('token');
		const res = await fetch(`${this._url}/users/me/`, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				authorization: `Token ${token}`,
			},
		});
		return UserApi._checkResult(res);
	}

	async changeUserData(data, userId) {
		const token =
			localStorage.getItem('token') || sessionStorage.getItem('token');
		const res = await fetch(`${this._url}/users/${userId}/`, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json',
				authorization: `Token ${token}`,
			},
			body: JSON.stringify(data),
		});
		return UserApi._checkResult(res);
	}

	async changeUserPassword(data) {
		const token =
			localStorage.getItem('token') || sessionStorage.getItem('token');
		const res = await fetch(`${this._url}/users/set_password/`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				authorization: `Token ${token}`,
			},
			body: JSON.stringify(data),
		});
		return res;
	}

	async remindUserPassword(userEmail) {
		const res = await fetch(`${this._url}/users/reset_password/`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				email: userEmail,
			}),
		});
		return res;
	}
}

const userApi = new UserApi({
	url: 'https://easyhrs.hopto.org/api/v1',
});

export default userApi;
