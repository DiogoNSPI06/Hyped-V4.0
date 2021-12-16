const Discord = require('discord.js');

var fortunes = [
  "Sim",
  "Não",
  "Talvez",
  "Eu não sei, tente de novo",
  "Quem sabe?",
  "Esqueci a resposta!",
  "Isso é um mistério",
  "Não posso te contar",
  "Meu informante disse que não",
  "Provavelmente",
  "Acho que sim",
  "Acho que não.",
  "Provavelmente Sim",
  "N U N C A   C O N T A R E I",
  "Me pergunte mais tarde!",
  "Claro que não!",
  "Claro que sim",
  "Não conte comigo para isso",
  "Dúvido muito"
];
module.exports.run = (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}8Ball`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}8ball <Pergunta>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(`© HypedGroupCode`);

  if(!args[0]) return message.reply({ embeds: [embd] })

  let ball = fortunes[Math.floor(Math.random() * fortunes.length)];

  message.reply({ content: ball });
}