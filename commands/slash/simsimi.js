const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js')
const request = require('https')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('simsimi')
  .setDescription('Converse com o simsimi!')
  .addStringOption(option => option.setName('mensagem').setDescription('Escreva o que quer falar.')),
  async execute(int, client, color, config) {

    const string = int.options.getString('mensagem');

    if(!string) return int.reply({ content: config.reply.noMsg })

    try {
      let image = (`https://imgur.com/4p2m765.png`)
      //let webhook = await int.channel.createWebhook('Simsimi', {avatar: image})

      let apis = [
        `https://api-sv2.simsimi.net/v2/?text=${string}&lc=pt&cf=false`
      ]

      let yn = [
        "yes",
        "no",
        "no",
        "no",
        "no",
        "no",
        "no"
      ]

      var note = await yn[Math.floor(Math.random() * yn.length)]

      var svrandom = await apis[Math.floor(Math.random() * apis.length)]

      request.get(svrandom, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        })

        resp.on('end', async () => {
          console.log(JSON.parse(data).success)
          if(JSON.parse(data).success === "Eu não resposta. Por favor me ensine.") {
            return int.reply(config.reply.simsimi)
          }
          await int.reply(`<@${int.user.id}> | ` + JSON.parse(data).success)
        });
    }).on("error", (error) => {
      console.log(error)
    })
   } catch(err) {
    console.log(err)
    int.reply(config.error.HPD_402)
  }
  },
};