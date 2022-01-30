const Discord = require('discord.js');
const jimp = require("jimp");

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}qrcode`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}qrcode <link ou texto>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  //member.displayAvatarURL({ dynamic: false, format: 'png' })

  const text = args.slice(0).join(" ")
  if(!text) return message.reply({ embeds: [embd] })

  let image = `https://api.qrserver.com/v1/create-qr-code/?size=1024x1024&data=${encodeURIComponent(text)}&color=${options.color.replace("#", "")}&bgcolor=${options.background.replace("#", "")}`;

  image = await jimp.read(image);
  let raw = await image.getBufferAsync("image/png");

  let attachment = new Discord.MessageAttachment(raw, "blur.png")

  await message.reply({ files: [attachment] });
}