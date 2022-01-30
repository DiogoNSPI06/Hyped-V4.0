const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: config.reply.menoperm })
  }

  let channel;

  try {
    channel = await client.channels.fetch(args[0]);
  } catch {
    channel = message.mentions.channels.fisrt() || message.channel;
  }

  channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: true }).then(() => {
    message.reply({ content: `**🔒 | Este canal foi trancado! Agora ninguém pode enviar mensagens!! Caso queira destrancar este canal basta digitar \`${prefix}unlock\`**` })
  }).catch((err) => {
    console.log(config.error.HPD_504 + err)
    message.reply(config.error.HPD_504)
  })
};