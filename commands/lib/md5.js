import crypto from 'crypto';

export const md5 = (bot) => {
	bot.onText(/^\/md5(?:\s+(.+))?$/i, (msg, match) => {
		const chatId = msg.chat.id;
		const text = match[1];

		if (!text) {
			bot.sendMessage(chatId,
				`❌ Please provide some text after the command to encrypt.

Usage:
/md5 <text>
`
			);
			return;
		}


		const md5Hash = crypto.createHash('md5')
			.update(text)
			.digest('hex');

		bot.sendMessage(chatId, md5Hash);
	});

};