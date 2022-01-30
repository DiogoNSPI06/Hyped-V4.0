const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply({ content: config.reply.noperm })

  let membro = message.mentions.users.first()
  if (!membro) return message.reply({ content: `❌| Mencione um bot` })

  let motivo = args.slice(1).join(" ");
  if (!motivo) return message.reply({ content: `❌| Escreva um motivo!` })

  let channel = client.guilds.cache.get("777870393137430589").channels.cache.get("784438579190300702")

  let embed = new Discord.MessageEmbed()
  .setTitle(`${membro.username} foi aprovado por ${message.author.username}!`)
  .setColor('#34ff1d')
  .setDescription(motivo)
  .setTimestamp()
  .setFooter(config.footer.owner)
  channel.send({ embeds: [embed] })
}