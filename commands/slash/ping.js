const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Envia o Ping do Bot'),
  async execute(int, client, color, config) {

    const embed = new Discord.MessageEmbed()
    .setTitle(`⚙️| Latência do Bot`)
    .setDescription(`> **API:** <a:network:888962796019138571>\`${Math.round(client.ws.ping)}ms\` \n \n > **Instabilidades?** Veja o nosso [status](${config.URL.statusPage})`)
    .setColor(color)
    .setTimestamp();

    int.reply({ embeds: [embed] })
  },
};