const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  if(!args[0]) return message.reply({ content: ':x: | Escreva um ID válido.' })

  message.reply({ content: `https://discord.com/api/oauth2/authorize?client_id=${args[0]}&permissions=82671&scope=bot%20applications.commands` })
  //https://discord.com/api/oauth2/authorize?client_id=${args[0]}&permissions=82671&scope=bot%20applications.commands
}