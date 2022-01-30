const Discord = require('discord.js')
const { Permissions } = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}fakemsg`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}fakemsg <usuário> <mensagem>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: config.reply.menoperm })
  }

  message.delete();
  try {
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if(args[0]) {
      user = client.users.get(args[0]);
    }
    let botmessage = args.slice(1).join(' ')

    if (args[0] == null) {return message.channel.send({ embeds: [embd] })}

    if (args[1] == null) {return message.channel.send({ embeds: [embd] })}
  
    
    let webhook = await message.channel.createWebhook(user.username, { avatar: user.displayAvatarURL() })
    await webhook.send(`${botmessage}`);
    webhook.delete();

  } catch (err) {
    message.channel.send(`:x: | Mencione um Membro!`)
  }
}