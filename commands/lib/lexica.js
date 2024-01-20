// lexica.art scraper
import * as cheerio from 'cheerio';
import axios from 'axios';

export const lexica = (bot) => {
	bot.onText(/^\/lexica(?:\s+(.+))?$/i, async (msg, match) => {
		const chatId = msg.chat.id;
		const url = match[1];

		if (!url) {
			bot.sendMessage(chatId, '‼️ Provide a link ‼️');
			return;
		}

		try {
			const { data } = await axios.get(url);
			const $ = cheerio.load(data);

			const prompt = $(
				"div > div > div.w-full.flex-shrink-0.overflow-hidden.text-base.px-5.flex.flex-col.h-auto > div.mt-6.px-4.py-3.bg-zinc-700.rounded-xl.shadow.bg-opacity-50.font-light.flex.flex-col.space-y-5 > p"
			)
				.text()
				.replace(/[\n\r]+/g, "")
				.trim();

			const img1 = $("div > div > div.flex.flex-wrap.overflow-hidden.flex-1.items-start.justify-start.thin-scrollbar.h-auto.pb-2 > img:nth-child(1)").attr("src");
			const img2 = $("div > div > div.flex.flex-wrap.overflow-hidden.flex-1.items-start.justify-start.thin-scrollbar.h-auto.pb-2 > img:nth-child(2)").attr("src");
			const img3 = $("div > div > div.flex.flex-wrap.overflow-hidden.flex-1.items-start.justify-start.thin-scrollbar.h-auto.pb-2 > img:nth-child(3)").attr("src");
			const img4 = $("div > div > div.flex.flex-wrap.overflow-hidden.flex-1.items-start.justify-start.thin-scrollbar.h-auto.pb-2 > img:nth-child(4)").attr("src");

			// const _ = $("").text().trim();
			// const _ = $("").attr("");

			// bot.sendMessage(chatId, `💬 Prompt:\n\n${prompt}`);

			// you can send upto 10 pictures..
			// with or without captuons.
			// caption is optional.
			const media = [
				{
					type: 'photo',
					media: img1,
					caption: prompt,
				},
				{
					type: 'photo',
					media: img2,
					caption: prompt,
				},
				{
					type: 'photo',
					media: img3,
					caption: prompt,

				},
				{
					type: 'photo',
					media: img4,
					caption: prompt,

				},
			];

			bot.sendMessage(chatId, `💬 Prompt:\n\n${prompt}`);
			bot.sendMediaGroup(chatId, media, { caption: prompt });


		} catch (err) {
			console.error(err);
			bot.sendMessage(chatId, `❌ Sorry, there was an error scraping the website.\n\n${err}`);
		}

	});
};

