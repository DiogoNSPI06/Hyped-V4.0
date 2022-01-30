const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {
  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: config.reply.menoperm })
  }

  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}setblocker`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}setblocker <on ou off>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  const embed = new Discord.MessageEmbed()
  .setTitle("<a:HYpositive:763111725510950932> | O Sistema de inviteblock foi ativado!")
  .setColor(color)
  .setDescription(`> Eu excluirei todos os convites dos usuários que **não** tem a permissão \`ADMINISTRATOR\`!`)
  .setFooter(config.footer.hgc)
  .setTimestamp();

  let server = message.guild.id

  if(!args[0]) return message.reply({ embeds: [embd] })
  if(args[0] === "on") {
    message.reply({ embeds: [embed] })
    db.set(`InviteBlocker_${message.guild.id}`, server)
    return;
  }
  if(args[0] === "off") {
    message.reply(":x: | O sistema de inviteblock foi desativado!")
    db.delete(`${message.guild.id}_inviteblock`)
    return;
  }
}