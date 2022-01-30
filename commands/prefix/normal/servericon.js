const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const avtButtons = new Discord.MessageButton()
  .setURL(message.guild.iconURL())
  .setLabel("Abrir avatar no navegador")
  .setStyle("LINK")

  const rows = new Discord.MessageActionRow()
  .addComponents(avtButtons);

  let embed = new Discord.MessageEmbed()
  .setColor(color)
  .setTitle('🖼️| Icone do Servidor')
  .setImage(message.guild.iconURL());
  message.reply({ embeds: [embed], components: [rows] })
}