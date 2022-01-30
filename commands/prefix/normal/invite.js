const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embed = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Adicione o HYPED`)
  .setDescription(`> Clique [Aqui](${config.websiteURL})`)
  .setFooter(`© Hyped Group Code`)
  .setColor(color);

  message.reply({ embeds: [embed] })
};