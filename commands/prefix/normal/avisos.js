const Discord = require('discord.js');
const { Permissions } = require('discord.js')
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}avisos`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}avisos <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: `:x: | Eu não tenho a permissão necessária!` })
  }

  const membro = message.mentions.users.first()
  if(!membro) return message.channel.send(embd)

  let warnings = db.get(`warnings_${message.guild.id}_${membro.id}`)
  if(warnings === null) warnings = 0;

  const embed = new Discord.MessageEmbed()
  .setTitle(`⚠️| Avisos de ${membro.username}`)
  .setColor(color)
  .setDescription(`-> | ${membro} Tem **${warnings}** aviso(s)!`)
  .setThumbnail(membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp()
  .setFooter(config.footer.hpd);

  message.reply({ embeds: [embed] })
}