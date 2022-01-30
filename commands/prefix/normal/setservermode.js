const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

//Refazer saporra toda
//Comandos NSFW não vão ter e nem Musica

module.exports.run = async (client, message, args, prefix, color, config) => {

  if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply({ content: config.reply.noperm })

  const embed = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Defina o modo do Servidor!`)
  .setDescription(`> Clique nos botões abaixo para definir um modo.`)
  .setFooter(config.footer.hpd)
  .setColor(color);

  const embed2 = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Modo definido!`)
  .setDescription(`> Você já pode iguinorar esta mensagem!`)
  .setFooter(config.footer.hpd)
  .setColor(color);

  const btn1 = new Discord.MessageButton()
  .setCustomId(`servermodebtn1_${message.channel.id}_${message.author.id}`)
  .setLabel("NSFW")
  .setEmoji("🔞")
  .setStyle("PRIMARY");

  const btn2 = new Discord.MessageButton()
  .setCustomId(`servermodebtn2_${message.channel.id}_${message.author.id}`)
  .setLabel("Tosco")
  .setEmoji("🤪")
  .setStyle("PRIMARY")

  const btn4 = new Discord.MessageButton()
  .setCustomId(`servermodebtn4_${message.channel.id}_${message.author.id}`)
  .setLabel("Musica")
  .setEmoji("🔊")
  .setStyle("PRIMARY")

  const btn1Off = new Discord.MessageButton()
  .setCustomId(`servermodebtn1_Off_${message.channel.id}_${message.author.id}`)
  .setLabel("NSFW")
  .setEmoji("🔞")
  .setStyle("PRIMARY")
  .setDisabled(true);

  const btn2Off = new Discord.MessageButton()
  .setCustomId(`servermodebtn2_Off_${message.channel.id}_${message.author.id}`)
  .setLabel("Tosco")
  .setEmoji("🤪")
  .setStyle("PRIMARY")
  .setDisabled(true);

  const btn3Off = new Discord.MessageButton()
  .setCustomId(`servermodebtn3_Off_${message.channel.id}_${message.author.id}`)
  .setLabel("Normal")
  .setEmoji("🙂")
  .setStyle("SECONDARY")
  .setDisabled(true);

  const btn4Off = new Discord.MessageButton()
  .setCustomId(`servermodebtn4_Off_${message.channel.id}_${message.author.id}`)
  .setLabel("Musica")
  .setEmoji("🔊")
  .setStyle("PRIMARY")
  .setDisabled(true);

  const btn3 = new Discord.MessageButton()
  .setCustomId(`servermodebtn3_${message.channel.id}_${message.author.id}`)
  .setLabel("Normal")
  .setEmoji("🙂")
  .setStyle("SECONDARY");

  const row = new Discord.MessageActionRow()
  .addComponents(btn1, btn2, btn3);

  const row1 = new Discord.MessageActionRow()
  .addComponents(btn1Off, btn2Off, btn3);

  const row2 = new Discord.MessageActionRow()
  .addComponents(btn1Off, btn2Off, btn3Off);

  const filter = i => i.user.id === message.author.id

  const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

  message.reply({ embeds: [embed], components: [row] }).then(m => {
    collector.on('collect', async b => {
      if(b.customId === `servermodebtn1_${message.channel.id}_${message.author.id}`) {

        db.set(`botmode_${message.guild.id}`, "nsfw")

        await b.update({ embeds: [embed2], components: [row1] })
      }

      if(b.customId === `servermodebtn2_${message.channel.id}_${message.author.id}`) {

        db.set(`botmode_${message.guild.id}`, "tosco")

        await b.update({ embeds: [embed2], components: [row1] })
      }

      if(b.customId === `servermodebtn3_${message.channel.id}_${message.author.id}`) {

        db.delete(`botmode_${message.guild.id}`)

        await b.update({ embeds: [embed2], components: [row2] })
      }

      if(b.customId === `servermodebtn4_${message.channel.id}_${message.author.id}`) {

        db.set(`botmode_${message.guild.id}`, "music")

        await b.update({ embeds: [embed2], components: [row2] })
      }
    })
  })
}

