// command: /randomanimensfw

export const animensfw = (bot) => {
	bot.onText(/\/animensfw/, (msg) => {
		const nsfws = [
			'waifu',
			'neko',
			'trap',
			'blowjob'
		];
		const animeTypes = ['sfw', 'nsfw'];
		const baseUrl = 'https://api.waifu.pics';
		const animeType = animeTypes[1];
		const RID = Math.floor(Math.random() * nsfws.length)
		const animeCategory = nsfws[RID];

		fetch(`${baseUrl}/${animeType}/${animeCategory}`)
			.then(response => response.json())
			.then(json => {
				const picUrl = json.url;
				bot.sendMessage(msg.chat.id, `type: ${animeType}\ncategory: ${animeCategory}`);
				bot.sendPhoto(msg.chat.id, `${picUrl}`)
			})
			.catch(error => {
				console.error('Error:', error);
			});

	});
}



