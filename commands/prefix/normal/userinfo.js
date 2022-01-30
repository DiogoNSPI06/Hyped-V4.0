const Discord = require('discord.js');
const Disbut = require('discord.js');
const axios = require("axios");
const db = require('quick.db');
const moment = require('moment');

moment.locale('pt-br')

module.exports.run = async (client, message, args, prefix, color, config) => { 
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}userinfo`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}userinfo <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Você também pode usar ID's de usuários!`)
  .setFooter(`© HypedGroupCode`);

  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!member) return message.reply({ embeds: [embd] });

  let serverpoints = db.get(`${message.guild.id}_${member.id}_points`);
  let globalpoints = db.get(`${member.id}_points`);

  const inline = true;

  const status = {
    online: ' <:online:821496127890391050> Online',
    idle: ' <:away:821496127634538546> Away',
    dnd: ' <:dnd:821496127684608051> Do Not Disturb',
    offline: ' <:offline:821496127701385267> Offline'
  }

  //Get User Banner
  const bannerURL = await getUserBannerUrl(member.id, { size: 4096 });

  const embedLeft = new Discord.MessageEmbed()
  .setAuthor(`🔍| Informações do usuário`)
  .setColor(color)
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setDescription('📝 | Aqui estão algumas informações deste usuário')
  .addField('> **#|Nome**', `${member.user.tag}`, inline)
  .addField('**👾|ID**', member.user.id, inline)
  .addField('**📎|Nickname**', `${member.nickname !== null ? `Nickname: ${member.nickname}` : 'Nenhum'}`, true)
  .addField('> **📌|Status**', `${status[member.user.presence.status]}`, inline, true)
  .addField('> **📥|Entrou no Discord em:**', formatDate('DD/MM/YYYY, às HH:mm:ss', member.user.createdAt))
  .addField('📄 | Próxima página:', '️**Clique em ▶️**')
  .setTimestamp()
  .setFooter(`© HypedGroupCode`);

  const embedRight = new Discord.MessageEmbed()
  .setTitle('🔍| Mais Informações do usuário')
  .setDescription('📝 | Aqui estão mais algumas informações deste usuário')
  .setColor(color)
  .addField('> 🏆|Pontos', `-> Pontos no servidor: **${serverpoints}**\n\n -> Pontos globais: **${globalpoints}**`)
  .addField('> Comando solicitado por',`**${message.member.displayName}**`,inline)
  .addField('> **🚪|Entrou aqui em:**', formatDate('DD/MM/YYYY, às HH:mm:ss', member.joinedAt))
  .addField('> **💼|Cargos**', member.roles.cache.array())
  .setImage(bannerURL)
  .addField('📄 | Voltar a Página', '️**Clique em ◀️**')
  .setTimestamp()
  .setFooter(`© HypedGroupCode`);

  const bArrowLeft = new Disbut.MessageButton()
  .setEmoji('◀️')
  .setID(`ArrowLeft_${member.id}_${message.guild.id}`)
  .setStyle('blurple');

  const bArrowLeftDisabled = new Disbut.MessageButton()
  .setEmoji('◀️')
  .setID('ArrowLeftDisabled')
  .setStyle('blurple')
  .setDisabled(true);

  const bArrowRight = new Disbut.MessageButton()
  .setEmoji('▶️')
  .setID(`ArrowRight_${member.id}_${message.guild.id}`)
  .setStyle('blurple');

  const bArrowRightDisabled = new Disbut.MessageButton()
  .setEmoji('▶️')
  .setID('ArrowRightDisabled')
  .setStyle('blurple')
  .setDisabled(true);

  const row1 = new Disbut.MessageActionRow()
  .addComponents(bArrowLeftDisabled, bArrowRight);

  const row2 = new Disbut.MessageActionRow()
  .addComponents(bArrowLeft, bArrowRightDisabled);

  const filter = i => i.user.id === message.author.id

  const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

  message.channel.send({ embeds: [embedLeft], components: [row1] }).then(m => {
    collector.on('collect', async b => {
      if(b.customId === `ArrowLeft_${member.id}_${message.guild.id}`) {
        b.update({ embeds: [embedLeft], components: [row1] })
      }
      if(b.customId === `ArrowRight_${member.id}_${message.guild.id}`) {
        b.update({ embeds: [embedRight], components: [row2] })
      }
    })
  })

  //This code is not Mine, Source: https://stackoverflow.com/questions/68334431/get-user-banner-in-discord-js
  async function getUserBannerUrl(userId, { dynamicFormat = true, defaultFormat = "webp", size = 512 } = {}) {
  if (![16, 32, 64, 128, 256, 512, 1024, 2048, 4096].includes(size)) {
    throw new Error(`The size '${size}' is not supported!`);
  }

  if (!["webp", "png", "jpg", "jpeg"].includes(defaultFormat)) {
    throw new Error(`The format '${defaultFormat}' is not supported as a default format!`);
  }

  const user = await client.api.users(userId).get();
  if (!user.banner) return null;

  const query = `?size=${size}`;
  const baseUrl = `https://cdn.discordapp.com/banners/${userId}/${user.banner}`;

  if (dynamicFormat) {
    const { headers } = await axios.head(baseUrl);
    if (headers && headers.hasOwnProperty("content-type")) {
      return baseUrl + (headers["content-type"] == "image/gif" ? ".gif" : `.${defaultFormat}`) + query;
    }
  }

  return baseUrl + `.${defaultFormat}` + query;
 }
}

function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}
