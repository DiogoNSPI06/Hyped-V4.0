const Discord = require('discord.js');
const { Permissions } = require('discord.js')

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}clearwarns`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}clearwarns <membro>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
    return message.reply({ content: config.reply.menoperm })
  }

  const member = message.mentions.users.first()
  if(!member) return message.reply({ embeds: [embd] })

  db.set(`warnings_${message.guild.id}_${member.id}`, 0)

  const embed = new Discord.MessageEmbed()
  .setTitle(":thumbsup: | Warns removidos!")
  .setDescription(`Os warns de ${member.username} foram removidos!`)
  .setColor(color)
  .setTimestamp()
  .setFooter(config.footer.hpd);

  message.reply({ embeds: [embed] })
}