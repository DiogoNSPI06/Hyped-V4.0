const Discord = require('discord.js');
const Canvas = require("canvas");
const GIFEncoder = require('gifencoder');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}triggered`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}triggered <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  //member.displayAvatarURL({ dynamic: false, format: 'png' })

  const member = message.mentions.users.first()
  if(!member) return message.reply({ embeds: [embd] })

  const image = member.displayAvatarURL({ dynamic: false, format: 'png' })

  const base   = await Canvas.loadImage("https://i.imgur.com/qOlbrFj.png");
  const img    = await Canvas.loadImage(image);

  const GIF    = new GIFEncoder(256, 310)
  const canvas = Canvas.createCanvas(256, 310);
  const ctx    = canvas.getContext('2d');

  GIF.start();
  GIF.setRepeat(0);
  GIF.setDelay(15);

  const BR = 20;
  const LR = 10;
  
  let i = 0;
  while (i < 9) {
    ctx.clearRect(0, 0, 256, 310);
    ctx.drawImage(img, Math.floor(Math.random() * BR) - BR, Math.floor(Math.random() * BR) - BR, 256 + BR, 310 - 54 + BR);
    ctx.fillStyle = '#FF000033';
    ctx.fillRect(0, 0, 256, 310);
    ctx.drawImage(base, Math.floor(Math.random() * LR) - LR, 310 - 54 + Math.floor(Math.random() * LR) - LR, 256 + LR, 54 + LR);
    GIF.addFrame(ctx);
    i++
  };
  GIF.finish();
  let raw = GIF.out.getData();

  let attachment = new Discord.MessageAttachment(raw, "triggered.gif")

  await message.reply({ files: [attachment] });
}