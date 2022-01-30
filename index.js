//⚙️| Packages
const express = require('express');
const puppeteer = require('puppeteer');
const localDB = require('quick.db');
const mongoDB = require('mongoose');
const moment = require('moment');
const fs = require('fs');

//⚙️| Archives
const config = require('./config.json')

const TOKEN = process.env.TOKEN
const PORT = process.env.PORT

//npm i express quick.db mongoose moment discord.js@13.2.0 @discordjs/rest discord-api-types/v9 @discordjs/builders

//⚙️| Discord
const Discord = require('discord.js');
const { Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');

const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

/* 
{
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
}
*/

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

//⚙️| Variables
const botconfig = config;
const app = express();
moment()

/* Debug */

client.on('debug', console.log)

//🔧| Registering slash commands
const slashCommands = [];
const slashCommandsFiles = fs.readdirSync('./commands/slash/').filter(file => file.endsWith('.js'));

for (const file of slashCommandsFiles) {
  const sCommand = require(`./commands/slash/${file}`);
  slashCommands.push(sCommand.data.toJSON());
  client.commands.set(sCommand.data.name, sCommand);
}

client.once('ready', () => {
  console.log('✅| Client is Ready!')

  const rest = new REST({ version: '9' }).setToken(TOKEN);
  
  (async () => {
	 try {
		 console.log('⚠️ | Refreshing slash (/) commands.');

		await rest.put(
			Routes.applicationCommands(config.client.id),
			{ body: slashCommands },
		);

		console.log('✅| Successfully reloaded application (/) commands.');
	 } catch (error) {
		console.error(error);
	}
  })();
})

//🔧| Executing Commands
client.on('interactionCreate', async int => {
  //🔧 -> MultiColor
  let colors = JSON.parse(fs.readFileSync("./database/colors.json", "utf8"));
  if(!colors[int.guild.id]) {
    colors[int.guild.id] = {
      color: config.def.color
    }
  }
  let color = colors[int.guild.id].color;

  if(!int.isCommand()) return;

  const command = client.commands.get(int.commandName);

  if(!command) return;

  try {
    await command.execute(int, client, color, config);
  } catch (error) {
    if(error) console.error(error);
    await int.reply({ content: ':x: | Não consegui executar este comando!', ephemeral: true })
  }
})


//⚒️| Message Commands
client.on('messageCreate', async msg => {
  let message = msg
  //🔧 -> MultiPrefix
  let prefixes = JSON.parse(fs.readFileSync("./database/prefixes.json", "utf8"));
  if(msg.channel.type == 'dm') return;
  if(!prefixes[msg.guild.id]) {
    prefixes[msg.guild.id] = {
      prefix: config.def.prefix
    }
  }
  let prefix = prefixes[msg.guild.id].prefix;

  //🔧 -> MultiColor
  let colors = JSON.parse(fs.readFileSync("./database/colors.json", "utf8"));
  if(!colors[msg.guild.id]) {
    colors[msg.guild.id] = {
      color: config.def.color
    }
  }
  let color = colors[msg.guild.id].color;

  //🔧 -> Command Executing System & Message Reader
  if(msg.channel.type == "dm") return;
  if(msg.author.bot) return;

  if(msg.content.startsWith(`<@!${client.user.id}>`||`@${client.username}`)) {
    message.reply(`Olá, tudo bem? Quer Saber Mais Sobre Mim?  Use \`${prefix}help\` e veja meus comandos!`)
  }
  if(!message.content.toLowerCase().startsWith(prefix)) return;

  //🔧 -> Args & Command
  const args = message.content
   .trim().slice(prefix.length)
   .split(/ +/g);
  let command = args.shift().toLowerCase();

  //🔧 -> Botmode
  let botmode = localDB.get(`botmode_${msg.guild.id}`)

  if(botmode === "nsfw" && command === "yiff") {
    const nsfwCommands = require(`./commands/prefix/nsfw/yiff.js`)
    nsfwCommands.run(client, message, args, prefix, color, config)
  }

  if(botmode === "tosco") {
    if(msg.content.startsWith("@everyone")) msg.react('<:ping:798182774292086824>')
    if(msg.content.startsWith("@here")) msg.react('<:ping:798182774292086824>')

    if(msg.content.startsWith("kkkkk")) msg.react('😆')
  }

  //🔧 -> Aliases
  if(command === "warn") command = "aviso"
  if(command === "warns") command = "avisos"
  if(command === "rwarns") command = "clearwarns"
  if(command === "e") command = "eval"
  if(command === "ajuda") command = "help"
  if(command === "limpar") command = "clear"
  if(command === "bal") command = "atm"
  if(command === "weather") command = "tempo"
  if(command === "profile") command = "perfil"
  if(command === "send") command = "chat"
  if(command === "pontos") command = "points"
  if(command === "xp") command = "points"
  if(command === "servermode") command = "setservermode"
  if(command === "hornyjail") command = "jail"

  //✅ -> Error Message
  const embederror = new Discord.MessageEmbed()
  .setTitle(":x: | Erro! ")
  .setDescription(`> Não achei o comando: \`${command}\``)
  .setTimestamp()
  .setColor('RED')
  .setFooter("© HypedGroupCode");

  const embedManutenção = new Discord.MessageEmbed()
  .setTitle(`⚒️ | Manutenção em Andamento!`)
  .setDescription(`> **Porcentagem Completa:** __100%__ \`▉▉▉▉▉▉▉▉▉▉\``)
  .addField(`> <a:BP_alerta_gif:753036518964330531> | Status da Host:`, '[Clique Aqui!](https://stats.uptimerobot.com/1BnoXi6Mgp/790084368)', true)
  .addField(`
  <:BP_github:766277909803171872> | Github`, `[Clique Aqui!](https://github.com/DiogoNSPI06/Hyped-V4.0)`, true)
  .addField(`> Dúvidas?`, ` Contate-me [aqui!](https://discord.com/users/732549418829611098)`)
  .setColor(color)
  .setFooter(config.footer.owner);

  try {
    const commandFile = require(`./commands/prefix/normal/${command}.js`)
    commandFile.run(client, message, args, prefix, color, config);
    console.log(`${message.guild.name}: ${message.author.tag} Usou ${command} no #${message.channel.name}`)
  } catch (err) {
    console.error('❌| Erro:' + err)
    message.reply({ embeds: [embederror] })
  }
})

//✅》Sistema de logs

//Mensagem Atualizada
client.on('messageUpdate', async (oldMessage, newMessage) => {
  let channelID = localDB.get(`LogsChannel_${oldMessage.guild.id}`)
  if (!channelID) return
  let channel = oldMessage.guild.channels.cache.get(channelID)
  if (!channel) return

  const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(":white_check_mark: | Sistema de Logs")
.setDescription(`**Mensagem atualizada**
**Onde Foi**:${oldMessage.channel} 
**Autor Da Mensagem**: ${oldMessage.author}
**Mensagem Antiga**:  \`\`\`${oldMessage.content}\`\`\`
**Nova Mensagem**:  \`\`\` ${newMessage.content}\`\`\`  `)

if (oldMessage.author.bot) return;

  
  channel.send({ embeds: [embed] });  
  
})

//Mensagem apagada
client.on('messageDelete', async (message) => {

  let channelID = localDB.get(`LogsChannel_${message.guild.id}`)
  if (!channelID) return
  let channel = message.guild.channels.cache.get(channelID)
  if (!channel) return

if (message.author.bot) return;
let messageapagada = new Discord.MessageEmbed()
.setColor(`RANDOM`) 
.setTitle(`:white_check_mark: | Sistema de Logs`)
.setDescription(`**Mensagem apagada!**
**Autor Da Mensagem**: ${message.author}
**Onde Foi**: <#${message.channel.id}> 
**A Mensagem**: \`\`\` ${message.content}\`\`\`  `)


channel.send({ embeds: [messageapagada] });
});

//✅》Level-System
client.on('messageCreate', message => {
  if(message.author.bot) return; 
  if(message.channel.type === "dm") return;
  
  localDB.add(`${message.guild.id}_${message.author.id}_points`, 1)
  localDB.add(`${message.author.id}_points`, 1)
})

//✅》Welcome
client.on('guildMemberAdd', (member, guild) => {
  let welcomec = localDB.get(`${member.guild.id}_welcomecanal`)
  if(!welcomec) return;
  let channelw = member.guild.channels.cache.get(welcomec)
  if(!channelw) return;

  const welcomeembed = new Discord.MessageEmbed()
  .setTitle(`🚪 | Bem Vindo a **${member.guild.name}**`)
  .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })}`)
  .setDescription(`Seja Bem Vindo <@${member.id}>! Divirta-se! \n \n Agora temos ${member.guild.members.cache.size} membros nesse servidor!`)
  .setColor("RANDOM")
  channelw.send({ embeds: [welcomeembed] })
})

//goodbye
client.on('guildMemberRemove', (member, guild) => {
  let welcomeca = localDB.get(`${member.guild.id}_welcomecanal`)
  if(!welcomeca) return;
  let channelwl = member.guild.channels.cache.get(welcomeca)
  if(!channelwl) return;

  const awelcomeembed = new Discord.MessageEmbed()
  .setTitle(`🚪 | Tchau `)
  .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })}`)
  .setDescription(`Adeus <@${member.id}>!  \n \n Agora temos ${member.guild.members.cache.size} membros nesse servidor!`)
  .setColor("RANDOM")
  channelwl.send({ embeds: [awelcomeembed] })
})

//✅》Invite Blocker
client.on("messageCreate", async message => {
  const regex =  /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  
  let inviteblockid = localDB.get(`InviteBlocker_${message.guild.id}`)

  if(!inviteblockid) return;
  
  if (!message.member.hasPermission("ADMINISTRATOR")) {  
        if (regex.exec(message.content)) {
           await message.channel.send(
              `${message.author} **Você não pode postar link de outros servidores!**`
           )
           await message.delete(regex);
           console.log('Mensagem Limpa!')
        }
    } 
})

//✅》ATIVIDADE DO BOT!
client.on("ready", () => {
  let activities = [
      `📣 - Utilize ${config.def.prefix}help`,
      `${client.guilds.cache.size} servidores! 😎`,
      `⚒️ - Slash commands em Desenvolvimento!`,
      `${client.users.cache.size} usuários! 😎`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        //type: "WATCHING",
        type: "STREAMING", url: "https://twitch.tv/diogo06221"
      }), 3500 * 60); 
  client.user
      .setStatus("online")
console.log("✅| My Rich Presence Is Online!")
});

client.on("ready", () => {
  let activities = [
    //`⚒️ - EM MANUTENÇÃO`
      `📣 - Utilize ${config.def.prefix}help`,
      `${client.guilds.cache.size} servidores! 😎`,
      `⚒️ - Slash commands em Desenvolvimento!`,
      `${client.users.cache.size} usuários! 😎`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING",
      }), 5000 * 60); 
  client.user
      .setStatus("online")
console.log("✅| My Second Rich Presence Is Online!")
});

//✅》Console Físico
client.on("ready", () => {
  console.log("✅| Its all OK");
})

//✅》Porta do express
app.get("/", (request, response) => {
  const ping = new Date();
  response.send(`<html><head><style>
    body {
        background-color: #2C2F33;
        font-family: 'Roboto', sans-serif;
    }
    .outer-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #23272A;
        box-shadow: 0px 0px 10px #1B1E21;
        border-radius: 50px;
        width: 45%;
    }
    .plasma {
        color: #ffffff;
        font-size: 70px;
        margin: 0;
        font-weight: 400;
        text-align: center;
    }
    .ends {
        color: #ffffff;
        font-size: 35px;
        margin: 0;
        text-align: center;
    }
    .date {
        color: #99AAB5;
        font-size: 25px;
        margin: 0;
        padding-bottom: 50px;
        text-align: center;
    }
    .logo {
        max-width: 100%;
        height: auto;
        width: auto;
        margin: 0;
    }
</style>
<link href="https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap" rel="stylesheet">
<link rel="shortcut icon" type="image/x-icon" href="https://static.wixstatic.com/media/a926b2_cfc2b507c19546d88a6a2231b832b022%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/a926b2_cfc2b507c19546d88a6a2231b832b022%7Emv2.png">
<title>Status Do Hyped</title>
</head><body><div class="outer-container" wfd-id="0">
    <div class="container" wfd-id="1">
        <img src="https://botlist.hypeds.com/img/logo.png" class="logo">
        <p class="plasma">Status Do Hyped</p>
        <p class="ends" id="ends">Status Da Host: Online</p>
        <p class="date" id="date">Status Do Site: Online</p>
    </div>
</div>
</body></html>`)
  ping.setHours(ping.getHours() -3 );
  console.log(`⚠️ | Ping recived at ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
})
app.listen(PORT)

//Código de ! Diogo06🐾#1337 Não Disturbe
client.login(TOKEN)