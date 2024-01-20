// ######################
// ## importing packages
// ######################

import TelegramBot from 'node-telegram-bot-api'
import express from 'express';
const token = process.env['telegram-bot-token'];
const bot = new TelegramBot(token, { polling: true });
const app = express();
const port = process.env.PPRT || 3000;





// ######################
// ## importing commands
// ######################

import {
	start,
	help,
	animensfw,
	animesfw,
	randomcatass,
	coffee,
	dog,
	duck,
	freeToGame,
	lexica,
	playstore,
	waifuImNsfw,
	waifuImSfw,
	justWatch,
	md5,
	// openInWhatsApp,
} from './commands/index.js';





// ########################
// ## calling the commands
// ########################

start(bot);
help(bot);
animensfw(bot);
animesfw(bot);
randomcatass(bot);
coffee(bot);
dog(bot);
duck(bot);
freeToGame(bot);
lexica(bot);
playstore(bot);
waifuImNsfw(bot);
waifuImSfw(bot);
justWatch(bot);
md5(bot);
// openInWhatsApp(bot);





// ##################
// ## express server
// ##################

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, () => {
	console.log(`It's alive on port ${port}! ⚡🥴😅🤯🥲🤨😌🤩🤩😘😊😮⚔️🦥😒🥱💤❤️🫂😄🌞👆🧐👾🔥🔥💥💥🌟🌟🚀🚀💎💎🤘🤘🧻🧻🧻🧻🧻🧻🧻🧻🧻
#FuckingExitingMoment`);
})
