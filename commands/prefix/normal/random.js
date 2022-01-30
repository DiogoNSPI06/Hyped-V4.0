const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}random`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}random <min> <máx>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(`© HypedGroupCode`);

    let minimum = await parseInt(args[0]);
    let maximum = await parseInt(args[1]);

    if (!args[0])
        return message.reply(`-> | Seu numero é **${Math.floor(Math.random() * 100 + 1)}**`);

    if (minimum < 1 || !minimum)
        return message.channel.send({ embeds: [embd] })

    if (!maximum)
        return message.reply(`seu numero é **${Math.floor(Math.random() * minimum + 1)}**`);
    else
        return message.reply(`seu numero é **${Math.floor(Math.random() * (maximum - minimum + 1)) + minimum}**`);
}
