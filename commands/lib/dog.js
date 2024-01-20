// command: /randomdog
export const dog = (bot) => {
	bot.onText(/\/dog/, (msg) => {
		fetch('https://dog.ceo/api/breeds/image/random')
			.then(responce => responce.json())
			.then(json => {
				bot.sendPhoto(msg.chat.id, `${json.message}`)
			});
	});
};
