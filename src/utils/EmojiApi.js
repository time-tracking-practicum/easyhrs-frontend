/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
// ключ
// 3ab5c36522ad4a043ef231e0c196dbf84a0b4689

export class EmojiApi {
	constructor(baseUrl, { headers }) {
		this._baseUrl = baseUrl;
		this._headers = headers;
	}

	_checkStatus(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(res.status);
	}

	getEmojis() {
		return fetch(`${this._baseUrl}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(this._checkStatus);
	}
}

const emojiApi = new EmojiApi(
	'https://emoji-api.com/emojis?access_key=3ab5c36522ad4a043ef231e0c196dbf84a0b4689',
	{
		headers: {
			'Content-Type': 'application/json',
		},
	}
);

export default emojiApi;
