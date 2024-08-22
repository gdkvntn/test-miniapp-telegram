const { Bot } = require("grammy");
require("dotenv").config();

const token = process.env.TELEGRAM_TOKEN;

const bot = new Bot(token);

console.log("bot starting");

bot.api.setMyCommands([
  { command: "open_web_app", description: "Open the Web App" },
]);

bot.command("open_web_app", (ctx) => {
  ctx.reply("Click the button below to open the Web App:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Web App",
            web_app: {
              url: "https://54f3-109-236-81-169.ngrok-free.app/",
            },
          },
        ],
      ],
    },
  });
});

bot.start();
