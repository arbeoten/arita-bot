require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const messageCreate = require("./src/messageCreate.js");

// client.on + messageCreate -> 유저가 메시지를 보낼때 감지해서 callback 실행
client.on("messageCreate", (message) => messageCreate.execute(message, client));

client.once("ready", () => {
  console.log(`✅ 로그인 성공! 봇 이름: ${client.user.tag}`);
});

// 메시지 생성
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content === "+테스트") {
    message.channel.send("테스트트");
  }
});

client.login(process.env.DISCORD_TOKEN);
