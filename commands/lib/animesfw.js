// command: /animesfw
export const animesfw = (bot) => {
	bot.onText(/\/animesfw/, (msg) => {
		const sfws = [
			'waifu',
			'neko',
			'shinobu',
			'megumin',
			'bully',
			'cuddle',
			'cry',
			'hug',
			'awoo',
			'kiss',
			'lick',
			'pat',
			'smug',
			'bonk',
			'yeet',
			'blush',
			'smile',
			'wave',
			'highfive',
			'handhold',
			'nom',
			'bite',
			'glomp',
			'slap',
			'kill',
			'kick',
			'happy',
			'wink',
			'poke',
			'dance',
			'cringe'
		];
		const animeTypes = ['sfw', 'nsfw'];
		const baseUrl = 'https://api.waifu.pics';
		const animeType = animeTypes[0];
		const RID = Math.floor(Math.random() * sfws.length);
		const animeCategory = sfws[RID];


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