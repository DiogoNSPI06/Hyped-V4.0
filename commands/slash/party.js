const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('party')
  .setDescription('[⚙️] Cria uma party com as pessoas na chamada em que você está!')
  .addStringOption(option => 
  option.setName('tipo')
  .setDescription("Selecione o tipo da party")
  .setRequired(true)
  .addChoice('Watch Together', 'youtube')
  .addChoice('Poker', 'poker')
  .addChoice('Xadrez', 'chess')),
  async execute(int, client, color, config) {
    if(!int.member.voice.channel) {
      return int.reply(":x: | Você precisa estar em um canal de voz!")
    }

    const args = int.options.getString('tipo');

    client.discordTogether.createTogetherCode(int.member.voice.channel.id, args).then(async invite => {

      //`${invite.code}`
      const embed = new Discord.MessageEmbed()
      .setTitle(`:thumbsup: | Sua party foi criada!`)
      .setDescription(`> Clique no botão abaixo e incie a party.`)
      .setColor(color)
      .setTimestamp();

      const button = new Discord.MessageButton()
      .setStyle("LINK")
      .setLabel("Clique aqui!")
      .setURL(invite.code);

      const row = new Discord.MessageActionRow()
      .setComponents(button);

      return int.reply({ embeds: [embed], components: [row] });
    });

  },
};