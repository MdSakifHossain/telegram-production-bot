// Listen for the /freeToGame command

export const freeToGame = (bot) => {
	bot.onText(/\/freeToGame/, (msg) => {
		const baseUrl = 'https://www.freetogame.com/api/game?id=';
		const RID = Math.floor(Math.random() * 540) + 1;

		const url = `${baseUrl}${RID}`;

		fetch(url)
			.then(response => response.json())
			.then(data => {

				const gameInfo =
					`
Id: ${data.id}

Title: ${data.title}

Status: ${data.status}

Short Description: ${data.short_description}

Game url: ${data.game_url}

Genre: ${data.genre}

Platform: ${data.platform}

Publisher: ${data.publisher}

Developer: ${data.developer}

Release Date: ${data.release_date}

Freetogame Profile Url: ${data.freetogame_profile_url}
`;
				// bot.sendMessage(msg.chat.id, gameInfo);
				bot.sendPhoto(msg.chat.id, `${data.thumbnail}`, { caption: gameInfo });
			})
			.catch(error => {
				bot.sendMessage(msg.chat.id, `Something went wrong.\nTry again later.`);
			});
	});
};


