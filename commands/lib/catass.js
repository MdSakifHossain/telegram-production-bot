// command: /randomcatass
export const randomcatass = (bot) => {
	bot.onText(/\/randomcatass/, (msg) => {
		const url = `https://cataas.com/cat`;
		bot.sendPhoto(msg.chat.id, `${url}`)
	});
};