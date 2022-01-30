const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}aviso`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}aviso <usuário> <motivo>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm });

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: config.reply.menoperm })
  }

  let membro = message.mentions.users.first()
  if(!membro) return message.reply({ embeds: [embd] })

  let motivo = args.slice(1).join(" ");
  if(!motivo) return message.channel.send({ embeds: [embd] });

  db.add(`warnings_${message.guild.id}_${membro.id}`, 1)

  let embed = new Discord.MessageEmbed()
  .setTitle(`⚠️| ${membro.username} Você recebeu um warn!`)
  .setDescription(`**Motivo**: \n ${motivo}`)
  .setFooter(`🔧 | Staff responsável: ${message.author.username}`)
  .setColor(color);

  membro.send({ embeds: [embed] });
  message.reply({ content: `:thumbsup: | Membro avisado! Agora <@${membro.id}> tem ${db.get(`warnings_${message.guild.id}_${membro.id}`)} avisos!` });
}