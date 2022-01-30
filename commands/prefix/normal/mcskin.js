const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  let nick = args.slice(0).join(" ")
  if(nick.length < 1) return message.reply(":x: | Escreva um nick de Minecraft(original)")

  const embed = new Discord.MessageEmbed()
  .setTitle(`<a:HYminecraft:756119646578671638> | Skin de **${args[0]}**`)
  .setImage(`https://mc-heads.net/skin/${args[0]}`)
  .setFooter(config.footer.hpd)
  .setColor(color)
  .setTimestamp()

  message.reply({ embeds: [embed] })
}