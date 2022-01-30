const Discord = require('discord.js');
const Canvas = require("canvas");

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

  let img = await Canvas.loadImage(member.displayAvatarURL({ dynamic: false, format: 'png' }))
  let canvas = Canvas.createCanvas(img.width, img.height);
  let ctx = canvas.getContext('2d')

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, img.width, img.height);
  ctx.drawImage(img, 0, 0, img.width, img.height);

  let layer = await Canvas.loadImage("https://i.imgur.com/t4hZySW.png");
  ctx.drawImage(layer, 0, 0, img.width, img.height);

  let raw = await canvas.toBuffer();

  let attachment = new Discord.MessageAttachment(raw, "blur.png")

  await message.reply({ files: [attachment] });
}