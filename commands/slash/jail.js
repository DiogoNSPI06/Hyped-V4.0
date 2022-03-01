const { SlashCommandBuilder } = require('@discordjs/builders');
const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('jail')
  .setDescription('[📷] Prende um usuário com o avatar do mesmo.')
  .addUserOption(option => option.setName('usuario').setDescription('Selecione um usuário!')),
  async execute(int, client, color, config) {
    let numero = Math.floor(Math.random() * 100) + 0;

    let member = int.options.getUser('usuario');

    if(!member) member = int.user;

    let img = await Canvas.loadImage(member.displayAvatarURL({ dynamic: false, format: 'png' }))
    let canvas = Canvas.createCanvas(img.width, img.height);
    let ctx = canvas.getContext('2d')

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, img.width, img.height);
    ctx.drawImage(img, 0, 0, img.width, img.height);

    let layer = await Canvas.loadImage("https://i.imgur.com/t4hZySW.png");
    ctx.drawImage(layer, 0, 0, img.width, img.height);

    let raw = canvas.toBuffer();

    const attachment = new Discord.MessageAttachment(raw, 'jail.png')

    int.reply({ files: [attachment] })
  },
};