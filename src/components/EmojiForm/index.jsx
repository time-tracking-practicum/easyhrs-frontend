import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

export default function EmojiForm({ onEmojiSelect }) {
	return <Picker data={data} locale="ru" onEmojiSelect={onEmojiSelect} />;
}
