const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: config.reply.menoperm })
  }

  let membro = message.mentions.users.first()
  if (!membro) return message.reply(`❌|Mencione um bot`)

  let motivo = args.slice(1).join(" ");
  if (!motivo) return message.reply(`❌|Escreva um motivo`)

  let channel = client.guilds.cache.get("777870393137430589").channels.cache.get("784438579190300702")

  let embed = new Discord.MessageEmbed()
  .setTitle(`${membro.username} foi reprovado por ${message.author.username}!`)
  .setColor('#ef1717')
  .setDescription(motivo)
  .setTimestamp()
  .setFooter(config.footer.owner)
  channel.send({ embeds: [embed] })
}