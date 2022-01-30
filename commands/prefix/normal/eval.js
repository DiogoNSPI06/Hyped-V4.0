const Discord = require('discord.js');
const beautify = require('beautify');
const token = process.env.TOKEN

module.exports.run = async (client, message, args, prefix, color, config) => {
  if (message.author.id !== config.owner.id) {
    return message.reply(":x:|**Apenas o Meu Dono Pode Rodar Este Comando**").then(m => m.delete(5000))
  }

  if(!args[0]) {
    return message.reply(":x:| Escreva um comando em JavaScript.").then(m => m.delete(5000))
  }

  try {
    if (args.join(" ").toLowerCase().includes("token")) {
      return;
    }
    const toEval = args.join(" ");
    const evaluated = eval(toEval);

    let embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTimestamp()
    .setTitle("<:HYdev:756119645215260753> | Comando de Eval")
    .addField("> Comando Pedido:", `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
    .addField("> Resultado:", evaluated)
    message.channel.send({ embeds: [embed] });

  } catch (err) {
   let embed2 = new Discord.MessageEmbed()
   .setColor("RED")
   .setTitle("`❌ | Erro!`")
   .setDescription("❌ | " + err)
   .setTimestamp();

   message.channel.send({ embeds: [embed2] })

  }
}