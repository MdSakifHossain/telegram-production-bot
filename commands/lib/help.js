//  ##################
//  ## help.js
//  ##################

import fs from 'fs';


export const help = (bot) => {
	bot.onText(/\/help/, (msg) => {
		const chatId = msg.chat.id;
		const commandFiles = fs.readdirSync('./commands/lib').filter(files => files.endsWith('.js'));
		const commandsAre = commandFiles.length;
		const helpMessage =
			`
Dumbpool-Bot CMDS
╭─╼━━━━━━━━╾─╮
│    𝙎𝙏𝘼𝙍𝙏
│ • start
╰─╼━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│    𝘼𝙉𝙄𝙈𝙀
│ • animesfw • animensfw
│ • waifuImSfw  • waifuImNsfw
╰─╼━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│    𝙍𝘼𝙉𝘿𝙊𝙈
│ • dog • duck
│ • coffee
╰─╼━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│    𝙄𝙉𝙁𝙊
│ • playstore • justWatch
│ • freeToGame • lexica
╰─╼━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│    𝘾𝙍𝙔𝙋𝙏𝙊𝙂𝙍𝘼𝙋𝙃𝙔
│ • md5
╰─╼━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│    𝙁𝙐𝙉
│ • randomcatass
╰─╼━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│    𝙀𝙓𝙋𝙀𝙍𝙄𝙈𝙀𝙉𝙏𝘼𝙇
│ • openInWhatsApp
╰─╼━━━━━━━━╾─╯
╭─╼━━━━━━━━╾─╮
│    𝙎𝙐𝙋𝙋𝙊𝙍𝙏
│ • help
╰─╼━━━━━━━━╾─╯
╭─────⭔𝘿𝙀𝙏𝘼𝙄𝙇𝙎
│ » Bot has currently ${commandsAre} cmds.
├────────⭔
│ [ Dumbpool-Bot ]
│ [ Made by Md Sakif Hossain ]
╰─────────────────⭓
🌟 Have a great time! 🌟
`

		bot.sendMessage(chatId, helpMessage);

	})
}