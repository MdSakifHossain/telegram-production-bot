// command: /duck
export const duck = (bot) => {
	bot.onText(/\/duck/, (msg) => {
		fetch('https://random-d.uk/api/random')
			.then(responce => responce.json())
			.then(json => {
				bot.sendPhoto(msg.chat.id, `${json.url}`)
			});
	});
};
