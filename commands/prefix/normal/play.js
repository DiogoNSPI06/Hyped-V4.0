const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  console.log("Play Executed!")
  message.reply(`:x: | **Eu Não Posso Tocar Musicas!** Mas o meu Irmão \`Hyped|Music\` pode! Caso vc não tenha ele adicionado, adicione no nosso site: https://www.hypeds.com/hypedmusic. \n E Caso Vc já o tenha, use \`hy!play\`.`)
}