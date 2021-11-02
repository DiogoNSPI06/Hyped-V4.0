const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Envia o Ping do Bot'),
  async execute(int) {
    int.reply({ content: 'Pong' })
  },
};