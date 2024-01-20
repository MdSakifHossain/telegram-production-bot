export const start = (bot) => {
	bot.onText(/\/start/, (msg) => {
		const welcomeMessage =
			`
🔰 Hey there, Little Buddy!

🔰 Welcome 🚀


🔰 I'm so excited! 🚀🚀
🔰 Are you sad? 🌧️👉👈
🔰 Don't be sad. 🌈
🔰 Have some poison..!! 🦠
🔰 Give up..!!
🔰 You don't matter 💀

🔰 Type /help to get The list 🎁
`
		bot.sendMessage(msg.chat.id, welcomeMessage)
	})
}