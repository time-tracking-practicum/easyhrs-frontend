export function formateDate(data) {
	const date = new Date(data);
	return date.toLocaleDateString();
}
