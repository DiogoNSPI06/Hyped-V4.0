const Discord = require('discord.js');
const Canvas = require("canvas");

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}comunism`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}comunism <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  const member = message.mentions.users.first()
  if(!member) return message.reply({ embeds: [embd] })

  let bg = await Canvas.loadImage("https://i.imgur.com/vBCTgtQ.png");
  let img = await Canvas.loadImage(member.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }));

  const canvas = Canvas.createCanvas(img.width, img.height);
  const ctx = canvas.getContext("2d");
  
  ctx.drawImage(img, 0, 0, img.width, img.height);
  ctx.drawImage(bg, 0, 0, img.width, img.height);

  let raw = canvas.toBuffer();

  let attachment = new Discord.MessageAttachment(raw, "gay.png")

  await message.reply({ files: [attachment] });
}