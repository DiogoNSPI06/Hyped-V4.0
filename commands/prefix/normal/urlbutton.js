const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: config.reply.menoperm })
  }

  message.delete()

  const embedhelp = new Discord.MessageEmbed()
  .setTitle("🔧| Url-Button")
  .setDescription(`<a:HYpositive:763111725510950932> | Como usar: 
  
  ${prefix}urlbutton <mensagem> <titulo-do-botão> <url>`)
  .addField("👍| Observação:", `A url precisa ter "https://"`)
  .setImage("https://cdn.discordapp.com/attachments/777870495390892033/863897862093799434/unknown.png")
  .setColor(color)
  .setTimestamp()
  .setFooter("© HypedGroupCode");

  if(!args[0]) return message.channel.send({ embeds: [embedhelp] });

  if(!args[1]) return message.channel.send({ embeds: [embedhelp] });

  if(!args[2]) return message.channel.send({ embeds: [embedhelp] });

  let button = new Discord.MessageButton()
  .setStyle('LINK')
  .setLabel(`${args[1]}`)
  .setURL(`${args[2]}`);

  let row = new Discord.MessageActionRow()
  .addComponents(button);

  message.channel.send({ content: `${args[0]}`, components: [row] })
  
}