const Discord = require('discord.js');
const { Permissions } = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, prefix, color, config) => {
  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: config.reply.menoperm })
  }
  
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}setcaptcha`)
  .setImage('https://cdn.discordapp.com/attachments/777870529704493106/891103708191006750/unknown.png')
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}setcaptcha <on || off> <id do cargo>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Use **on** para ativar o comando e **off** para desativar.`)
  .setFooter(`© HypedGroupCode`);
   
  if(!args[0]) return message.reply({ embeds: [embd] })
  if(!args[1]) return message.reply({ embeds: [embd] })

  if(args[0] === "off") {
    message.reply(`:x: | Eu desativei o captcha!`)
    db.set(`CapchaIsEnabled_${message.guild.id}`, false)
    return;
  }
  if(args[0] === "on") db.set(`CaptchaIsEnabled_${message.guild.id}`, true)
  
  db.set(`CaptchaRole_${message.guild.id}`, args[1])
  message.reply({ content: `:white_check_mark: | Captcha ativado! Eu vou adicionar o cargo quando alguém completar o captcha! \n \n :thumbsup: - Para realizar o captcha digite **${prefix}verify**` })
}