// Require the necessary discord.js classes (從discord.js套件裡面拿出前面3個來作使用)
import { Client, Events, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
	console.log(`online ${c.user.tag}`);
});

client.login(process.env.TOKEN);