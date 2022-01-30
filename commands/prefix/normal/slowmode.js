const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply({ content: config.reply.noperm })

  if(!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
    return message.reply({ content: config.reply.menoperm })
  }
  const time = parseInt(args.shift()) || 0;

  if (time == 0) {
    await message.channel.setRateLimitPerUser(time);
    return message.reply("**O modo lento foi desativado!!**");
  }

  await message.channel.setRateLimitPerUser(time);
  return message.reply(`**O modo lento foi ativo, o intervalo é de ${time} segundos**!!` + ` __Digite *${prefix}slowmode 0* para desativar!__`);
};