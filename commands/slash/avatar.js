const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('avatar')
  .setDescription('Envia o avatar de um usuário!')
  .addUserOption(option => option.setName('target').setDescription('Selecione um usuário!')),
  async execute(int, client, color, config) {

    const member = int.options.getUser('target');

    if(!member) {
      const avtButtons = new Discord.MessageButton()
      .setURL(int.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setLabel("Abrir avatar no navegador")
      .setStyle("LINK")

      const rows = new Discord.MessageActionRow()
      .addComponents(avtButtons);

      const embeds = new Discord.MessageEmbed()
      .setTitle(`🖼️| Avatar de: ${int.user.tag}`)
      .setImage(int.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setColor(color)
      .setTimestamp();

      return int.reply({ embeds: [embeds], components: [rows] })
    }

    const avtButton = new Discord.MessageButton()
    .setURL(member.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setLabel("Abrir avatar no navegador")
    .setStyle("LINK")

    const row = new Discord.MessageActionRow()
    .addComponents(avtButton);

    const embed = new Discord.MessageEmbed()
    .setTitle(`🖼️| Avatar de: ${member.tag}`)
    .setImage(member.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setColor(color)
    .setTimestamp();

    int.reply({ embeds: [embed], components: [row] })
  },
};