// command: /coffee
export const coffee = (bot) => {
	bot.onText(/\/coffee/, (msg) => {
		const url = 'https://coffee.alexflipnote.dev/random.json'
		bot.sendPhoto(msg.chat.id, url);

		fetch(url)
			.then(responce => responce.json())
			.then(json => {
				bot.sendPhoto(msg.chat.id, `${json.file}`);
			})
			.catch(error => {
				bot.sendMessage(msg.chat.id, `❌ error.\nSome weird shut happend on the server.`)
			})

	});
};
