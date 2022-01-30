const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}say`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}say <mensagem>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(`© HypedGroupCode`);

  const sayMessage = args.join(' ');
  if(!sayMessage) return message.channel.send({ embeds: [embd] })
  message.delete().catch(O_o => {});
  message.channel.send(`${sayMessage} \n *${message.author} me fez falar isso!*`);
};