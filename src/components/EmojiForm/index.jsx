import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

export default function EmojiForm() {
	// функция выбора эмодзи в форме
	function chooseEmoji(emoji) {
		return emoji.native;
	}

	return (
		<Picker
			data={data}
			locale="ru"
			onEmojiSelect={(emoji) => chooseEmoji(emoji)}
		/>
	);
}
