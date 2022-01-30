const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");//2.1.0

module.exports.run = async (client, message, args, prefix, color, config) => {
  let user = message.author
  let timeout = 86400000

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);
  let amount = Math.floor(Math.random() * 10000) + 5000;
  let time = ms(timeout - (Date.now() - daily));

  const embed = new Discord.MessageEmbed()
  .setTitle(`:dollar: | Colete seu Daily!`)
  .setDescription(`> Clique no botão abaixo e colete seu daily!`)
  .setColor(color)
  .setFooter(`HYPED ${config.client.version}`)
  .setTimestamp();

  const embed2 = new Discord.MessageEmbed()
  .setTitle(`:x: | Você já coletou o daily!`)
  .setDescription(`> Você já recebeu sua recompensa diária!\n\nColete novamente daqui a **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
  .setColor(color)
  .setFooter(`HYPED ${config.client.version}`)
  .setTimestamp();

  const embedSuccess = new Discord.MessageEmbed()
  .setTitle(`:dollar: | Você resgatou o seu daily!`)
  .setDescription(`> Você resgatou **$ ${amount}**`)
  .setColor(color)
  .setFooter(`HYPED ${config.client.version}`)
  .setTimestamp();

  const botao = new Discord.MessageButton()
  .setStyle("SUCCESS")
  .setLabel("Resgatar")
  .setEmoji("🎁")
  .setCustomId(`claimDaily_${message.channel.id}_${message.author.id}`);

  const botaoDisabled = new Discord.MessageButton()
  .setStyle("SUCCESS")
  .setLabel("Resgatar")
  .setCustomId('claimDailyOff')
  .setEmoji("🎁")
  .setDisabled(true);

  const row1 = new Discord.MessageActionRow()
  .addComponents(botao);

  const row2 = new Discord.MessageActionRow()
  .addComponents(botaoDisabled);

  const filter = i => i.user.id === message.author.id

  const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

  message.reply({ embeds: [embed], components: [row1] }).then(m => {
    collector.on('collect', async b => {
      if(b.customId === `claimDaily_${message.channel.id}_${message.author.id}`) {
        if(daily !== null && timeout - (Date.now() - daily) > 0) {

          await b.update({ embeds: [embed2], components: [row2] })
        } else {
          b.update({ embeds: [embedSuccess], components: [row2] })

          db.add(`money_${user.id}`, amount);
          db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
        }
      }
    })
  })
}