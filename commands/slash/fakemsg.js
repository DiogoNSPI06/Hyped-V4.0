const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('fakemsg')
  .setDescription('[😆] Faça uma mensagem usando o avatar do usuário selecionado!') 
  .addUserOption(option => option.setName('usuário').setDescription('Selecione um usuário!').setRequired(true))
  .addStringOption(option => option.setName('mensagem').setDescription('Escreva o conteudo da mensagem').setRequired(true)),
  async execute(int, client, color, config) {

    const member = int.options.getUser('usuário');

    const args = int.options.getString('mensagem');

    try {
      let user = member;
    
      let webhook = await int.channel.createWebhook(user.username, { avatar: user.displayAvatarURL() })
      await webhook.send(`${args}`);
      webhook.delete();

      int.reply({ content: "<a:HYpositive:763111725510950932> | Sucesso!", ephemeral: true })

    } catch (err) {
      int.reply(config.error.HPD_505)
    }
  },
};