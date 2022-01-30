const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {
  let money = db.get(`money_${message.author.id}`);

  if(!money) money = 0

  const embed = new Discord.MessageEmbed()
  .setTitle('💸| Seu Dinheiro')
  .setDescription(`> Você tem $${money}`)
  .setColor(color)
  .setFooter(config.footer.hpd)
  message.reply({ embeds: [embed] })
}