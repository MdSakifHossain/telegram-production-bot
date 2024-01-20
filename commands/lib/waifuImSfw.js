export const waifuImSfw = (bot) => {
	bot.onText(/\/waifuImSfw/, (msg) => {
		const sfws = ['maid', 'waifu', 'marin-kitagawa', 'mori-calliope', 'raiden-shogun', 'oppai', 'selfies', 'uniform'];
		const RID = Math.floor(Math.random() * sfws.length);
		const category = sfws[RID];
		const url = 'https://api.waifu.im/search/?included_tags=';

		fetch(`${url}${category}`)
			.then(response => response.json())
			.then(data => {
				const picUrl = data.images[0].url;
				const picInfo = `Type: sfw\nCategory: ${category}`;
				bot.sendPhoto(msg.chat.id, `${picUrl}`, { caption: picInfo });
			})
			.catch(error => {
				bot.sendMessage(msg.chat.id, `❌ Some weird shit happend on the server.\nPlaese try again later.`);
			});
		// fetching is done.

	});
};
