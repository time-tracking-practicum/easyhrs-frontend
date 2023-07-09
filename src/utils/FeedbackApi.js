/* eslint-disable no-underscore-dangle */
class FeedbackApi {
	constructor(options) {
		this._url = options.url;
	}

	static _checkResult = (res) => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(new Error(`Ошибка: ${res.status}`));
	};

	async postFeedback(data) {
		const token =
			localStorage.getItem('token') || sessionStorage.getItem('token');
		const res = await fetch(`${this._url}/feedback/`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				authorization: `Token ${token}`,
			},
			body: JSON.stringify(data),
		});
		return FeedbackApi._checkResult(res);
	}
}

const feedbackApi = new FeedbackApi({
	url: 'https://easyhrs.hopto.org/api/v1',
});

export default feedbackApi;
