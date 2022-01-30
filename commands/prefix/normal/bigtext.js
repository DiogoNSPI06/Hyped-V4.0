const Discord = require('discord.js');
const numConverter = require('number-to-words');

module.exports.run = async (client, message, args, prefix, color, config) => { 
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}bigtext`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}bigtext <texto>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Não use caractéres especiais!`)
  .setFooter(config.footer.hgc);

  let uwu = args.join(" ")

  if(!uwu) return message.reply({ embeds: [embd] })

  let bigtextArray = new Array();

  for(let i = 0; i < uwu.length; i++) {
    let isNumber = await parseInt(uwu[i])
    if(isNumber >= 0 && isNumber <=9) {
      bigtextArray.push(`:${numConverter.toWords(uwu[i])}:`)
    } else {
      if(uwu[i] !== ' ') {
        if(!uwu[i].match(/^[a-zA-Z]+$/)) {
          bigtextArray.push(`:question:`)
        } else {
          bigtextArray.push(`:regional_indicator_${uwu[i].toLowerCase()}:`)
        } 
      } else {
        bigtextArray.push('  ')
      }
    }
  }
  try {
    await message.channel.send({ content: bigtextArray.join('') })

    return message.delete()

  } catch (err) {
    return message.reply({ content: `:x: | Houve um erro ao processar o comando!` })
  }
}