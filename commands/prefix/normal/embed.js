const Discord = require('discord.js')
const { Permissions } = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  await message.delete()
  if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply({ content: config.reply.noperm })

  const embederror = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}embed`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}embed <mensagem>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Use o comando: ${prefix}setcolor para escolher uma cor para seu Embed!`)
  .setFooter(config.footer.hgc);
  

  let mensg = args.join(' ')
  if (!mensg) {
    return message.channel.send({ embeds: [embederror] });
  }

  const embed = new Discord.MessageEmbed()
    .setDescription(`${mensg}`)
    .setColor(color)
    .setTimestamp()
    .setFooter(`Publicado por: ${message.author.username}`)
  message.channel.send({ embeds: [embed] })
}