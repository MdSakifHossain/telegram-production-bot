export const waifuImNsfw = (bot) => {
	bot.onText(/\/waifuImNsfw/, (msg) => {
		const nsfws = ['ass', 'hentai', 'milf', 'oral', 'paizuri', 'ecchi', 'ero'];
		const RID = Math.floor(Math.random() * nsfws.length);
		const category = nsfws[RID];
		const url = 'https://api.waifu.im/search/?included_tags=';

		fetch(`${url}${category}`)
			.then(response => response.json())
			.then(data => {
				const picUrl = data.images[0].url;
				const picInfo = `Type: nsfw\nCategory: ${category}`;
				bot.sendPhoto(msg.chat.id, `${picUrl}`, { caption: picInfo });
			})
			.catch(error => {
				bot.sendMessage(msg.chat.id, `❌ Some weird shit happend on the server.\nPlaese try again later.`);
			});
		// fetching is done.

	});
};
