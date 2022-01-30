const Discord = require('discord.js');
const { Permissions } = require('discord.js')

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}clear`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}clear <Número>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Forneça um número de **1 a 99.**`)
  .setFooter(config.footer.hgc);

  if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
    return message.reply({ content: config.reply.menoperm })
  }

  let deleteCount = parseInt(args[0], 10);

  if(!deleteCount || deleteCount < 1 || deleteCount > 99) {
    return message.reply({ embeds: [embd] })
  }

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });

  message.channel.bulkDelete(fetched);

  message.channel.send(`> **${args[0]} mensagens limpas nesse chat!**`).then(m => {
    m.delete({ timeout: 1500 })
  }).catch(err => {
    console.log(`Não consegui deletar as mensagens!`)
    message.channel.send(config.error.HPD_503)
  })
}