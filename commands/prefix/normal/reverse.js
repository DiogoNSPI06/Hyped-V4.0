const Discord = require('discord.js')

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}reverse`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}reverse <mensagem>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);
    try {
      if (!args[0]) return message.channel.send({ embeds: [embd] });
      
      const str = args.join(' ');
      let msg = await message.reply(str.split('').reverse().join(''));
      msg.react('🔁');
    } catch (err) {
      message.reply()
    }
};