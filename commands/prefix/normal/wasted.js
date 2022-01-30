const Discord = require('discord.js');
const Canvas = require("canvas");
const jimp = require("jimp");

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}jail`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}jail <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  //member.displayAvatarURL({ dynamic: false, format: 'png' })

  const member = message.mentions.users.first()
  if(!member) return message.reply({ embeds: [embd] })

  let image = member.displayAvatarURL({ dynamic: false, format: 'png' })

  let images = await jimp.read(image);
  images.greyscale();

  let raws = await images.getBufferAsync("image/png");
  let effect = await Canvas.loadImage(raws);
  let bg = await Canvas.loadImage("https://i.imgur.com/hI1Q8ej.png");
  let img = await Canvas.loadImage(image);

  const canvas = Canvas.createCanvas(img.width, img.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(img, 0, 0, img.width, img.height);
  ctx.drawImage(effect, 0, 0, img.width, img.height);
  ctx.drawImage(bg, 0, 0, img.width, img.height);

  let raw = canvas.toBuffer();

  let attachment = new Discord.MessageAttachment(raw, "wasted.png")

  await message.reply({ files: [attachment] });
}