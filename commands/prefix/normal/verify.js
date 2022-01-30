const Discord = require('discord.js');
const db = require('quick.db');
const Jimp = require('jimp');

module.exports.run = async (client, message, args, prefix, color, config) => {
  message.delete()
  let isGuild = db.get(`CaptchaIsEnabled_${message.guild.id}`);
  let beforerole = db.get(`CaptchaRole_${message.guild.id}`);
  let role = message.guild.roles.cache.get(beforerole);
  //let guildMember = client.guilds.cache.get(message.guild.id).users.get(message.author.id)

  if(!isGuild || isGuild === false) {
    return message.channel.send(`:x: | Esta guild não está registrada como ativa! Use \`${prefix}setcaptcha\`!`)
  }

  await message.author.createDM()
  //CAPTCHA
  let captcha = '';
  let dict = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for(var i = 0; i < 6; i++){
    captcha = captcha + dict.charAt(Math.floor(Math.random() * dict.length));
  }

  //JIMP
  Jimp.read(`https://imgur.com/yF4Mbkf.png`, function (err, image) {
    if(err) console.log(err)
    Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (font) {
      image.print(font, 523, 350, captcha, 500)

      image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        const attachment = new Discord.MessageAttachment(buffer, 'captcha.png')

        message.author.send(`${message.author}, Escreva o que está escrito nesta imagem!`, attachment)
      })
    })
  })
  const main = message.author.dmChannel.createMessageCollector(a => a.author.id === message.author.id, {
    time: 100000 * 50,
    max: 1
  })

  main.on('collect', a => {
    if(a.content === captcha) {
      message.author.send(":white_check_mark: | Captcha completo!")
      message.member.roles.add(role)
    }

    if(a.content !== captcha) return message.author.send(":x: | Re-Faça o captcha!")
  })
}