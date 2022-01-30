const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`<:HYhyped2:756119647748620309>| Meu servidor!`)
    .setDescription(`[Clique Aqui!](${config.URL.discord})`)
    .setColor(color)
    .setTimestamp()
  message.channel.send({ embeds: [embed] });
};