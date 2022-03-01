const { SlashCommandBuilder } = require('@discordjs/builders');
const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('gay')
  .setDescription('[📷] Faz o avatar do usuário ter a bandeira LGBT.')
  .addUserOption(option => option.setName('usuario').setDescription('Selecione um usuário!')),
  async execute(int, client, color, config) {
    let numero = Math.floor(Math.random() * 100) + 0;

    let member = int.options.getUser('usuario');

    if(!member) member = int.user;

    let bg = await Canvas.loadImage("https://i.imgur.com/vBCTgtQ.png");
    let img = await Canvas.loadImage(member.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }));

    const canvas = Canvas.createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
  
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.drawImage(bg, 0, 0, img.width, img.height);

    let raw = canvas.toBuffer();

    const attachment = new Discord.MessageAttachment(raw, 'gay.png')

    int.reply({ files: [attachment] })
  },
};