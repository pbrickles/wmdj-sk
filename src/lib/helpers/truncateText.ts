export const truncateText = (text: string, length = 50) => {
	// if the truncated string ends in a full stop then do not add ellipses

	if (text.length > length) {
		let truncatedText = text.slice(0, length);
		// remove spaces and special characters from the end of the string
		while (truncatedText.slice(-1).match(/[^a-zA-Z0-9]/)) {
			truncatedText = truncatedText.slice(0, -1);
		}
		return `${truncatedText}...`;
	}
	return text;
};
