// google-play-scrapper

// const gplay = require('google-play-scraper');
import gplay from 'google-play-scraper';

export const playstore = (bot) => {

	bot.onText(/^\/playstore(?:\s+(.+))?$/i, async (msg, match) => {
	const chatId = msg.chat.id;
	const appQuery = match[1];

	if (!appQuery) {
	  bot.sendMessage(chatId, 'Please provide an application name.\n\nExample:\n /Playstore PUBG\nWhat the heck dude.....');
	  return;
	}

	try {
	  const searchResults = await gplay.search({ term: appQuery, num: 1 });

	  if (searchResults.length === 0) {
		bot.sendMessage(chatId, '❌ No results found.');
		return;
	  }

	  const result = searchResults[0];
	  // const appId = result.appId;
	  const appResult = await gplay.app({ appId: result.appId });

	  const appInfo = 
				`•----• PLAYSTORE •----•\n\n` +
		`Name📱 : ${appResult.title}\n` +
		`Genre🎮 : ${appResult.genre}\n` +
		`Developer👤: ${appResult.developer} \n` +
		`Rating🌟: ${appResult.scoreText} out of 5 \n\n` +
		`Install📥 : ${appResult.installs}\n` +
		`Size💾 : ${appResult.size}\n` +
		`Content Rating🎭 : ${appResult.contentRating}\n` +
		`Price💰 : ${appResult.priceText} \n\n` +
		`Recent Changes🔎 : \n${appResult.recentChanges.replace(/<br>/g, '\n')}\n\n` +
		`Version🆕 : ${appResult.version} \n\n` +
		`Description📝 : \n${appResult.summary}\n\n` +
		`🔐 Privacy Policy: ${appResult.privacyPolicy}\n\n` +
		`»»————- ✴️ ————-««\n` +
		`More  : ${appResult.url}`;

	  // const imageResponse = await axios.get(appResult.icon, { responseType: 'arraybuffer' });
	  // const outputBuffer = Buffer.from(imageResponse.data, 'binary');
	  // fs.writeFileSync(`${appId}.png`, outputBuffer);

	  // const stream = fs.createReadStream(`${appId}.png`);
	  await bot.sendPhoto(chatId, appResult.icon, { caption: appInfo });
	  // fs.unlinkSync(`${appId}.png`);
	} catch (error) {
	  bot.sendMessage(chatId, `Error: ${error.message}`);
	}
  });
};


