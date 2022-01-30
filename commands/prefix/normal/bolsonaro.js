const Discord = require('discord.js');
const Jimp = require('jimp');
const Canvas = require('canvas');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}bolsonaro`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}bolsonaro <texto ou avatar> <membro>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Escreva texto para escrever algo para o bolsonaro dizer ou mencione alguém para exibir o avatar do usuário.`)
  .setFooter(config.footer.hgc);

  if(!args[0]) return message.reply({ embeds: [embd] })

  const member = message.mentions.users.first()

  if(args[0] === "texto") {
    if(args.slice(1).join(' ').length > 50) {
      return message.reply({ content: `:x: | Máximo de 50 caractéres!` })
    } 
    message.channel.send('<a:loading:785559393449017394> | Processando...').then(m => {
      Jimp.read(`https://imgur.com/askQIQ0.png`, function (err, image) {
        if(err) return message.reply({ content: config.error.IMG_600 })

        Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (font) {
         image.print(font, 523, 350, args.slice(1).join(' '), 500)

         image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
           const attachment1 = new Discord.MessageAttachment(buffer, 'bolsonaro_text.png')

            message.reply({ files: [attachment1] }).then(l => {
              m.delete()
            })
          })
        })
      })
    })
  }
  if(args[0] === "avatar") {
    const canvas = Canvas.createCanvas(400, 230)
    const ctx = canvas.getContext("2d")

    let bolsonaro = await Canvas.loadImage('https://i.imgur.com/CVewCJn.png')
    let img = await Canvas.loadImage(member.displayAvatarURL({ dynamic: false, format: 'png' }))

    ctx.drawImage(img, 108, 10, 276, 158)
    ctx.drawImage(bolsonaro, 0, 0, 400, 230)

    let buffer = canvas.toBuffer()

    const attachment2 = new Discord.MessageAttachment(buffer, 'bolsonaro_avatar.png');

    message.reply({ files: [attachment2] })
  }
}