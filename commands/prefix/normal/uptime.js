const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix, color, config) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `${days.toFixed()} dias  ${hours.toFixed()} horas  ${minutes.toFixed()} minutos ${seconds.toFixed()} segundos`;

  message.channel.send(`🗓️|**<@${message.author.id}>, Estou acordado à ${uptime}**`)
};