const Discord = require("discord.js")

module.exports.run = async (client, message, args, prefix, color, config) => {
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}hackear`)
  .setColor(color)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}hackear <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(config.footer.hgc);

  let membro = message.mentions.users.first()
  if (!membro) return message.reply({ embeds: [embd] })

  let hackeado = message.mentions.users.first(); 
  let m = await message.channel.send(` <a:loading:785559393449017394> **Tentando hackear** ${hackeado.username}... `) 
  let truefalse = Math.floor(Math.random() * 2) + 1;
  let arrayip = [
        "19.85.546.178",
        "45.52.164.523",
        "27.23.123.456",
        "953.41.254.355",
        "192.468.293.812",
    ]
  var iprandom = await arrayip[Math.floor(Math.random() * arrayip.length)]

  let arraynomes = [
    "Bernardo Pietro Cauê da Cunha",
    "Erick Ruan Souza",
    "Marcos Nicolas Carvalho",
    "Julio Vinicius Thales Aragão",
    "Ryan Iago Gustavo da Rocha",
    "Cauã Severino Pinto",
    "Ricardo Joaquim Corte Real",
    "Marli Raimunda Agatha Monteiro", 
    "Gabriela Amanda da Rocha", 
    "Luciana Pietra Lopes",
    "Don iqui",
    "Ricardo Solaris",
    "Henry Cordeiro Sant'Anna Rutkowski",
    "Rafael Campagnucci Pereira Junior",
    "Lucas Ramadan Boscolo",
    "Victor Lourenço Mourão",
    "Walt Diney Werd International Game Show",
    "Kim Kataguiri",
    "Carlos Eduardo",
    "Thomas Turbano",
    "Tokodi Arreia",
    "Yamate Kudasai",
    "Marlene Mariana Costa"
    ]
  const nomerandom = arraynomes[Math.floor(Math.random() * arraynomes.length)]

  let emailnome = [
      "robertogarcia@gmail.com",
      "tilambocano@outlook.com",
      "todepintoduro@gmail.com",
      "diogo@hypeds.com",
      "tomasturbando@outlook.com",
      "RicardoPinto@gmail.com",
      "Marlene@gov.com.br",
      "dep.kimkataguiri@camara.leg.br"
    ]
  const emails = emailnome[Math.floor(Math.random() * emailnome.length)]

  let senha = [
      "lembrar123",
      "discord123456",
      "qmleuegay",
      "aaaaa12345",
      "neymargostoso",
      "kimkataguiri",
      "12discord34"
    ]

  const senhas = senha[Math.floor(Math.random() * senha.length)]

  const hackembed = new Discord.MessageEmbed() 
    .setTitle(`<a:HACKER:785568296773615637>|Dados de ${hackeado.username}`) 
    .addField(`📧|E-mail:`, emails)
    .addField(`🔐|Senha:`, senhas)
    .addField("🙂|Nome:", nomerandom) 
    .addField("<a:botedit:783866898227789824>|Ip:", iprandom) 
    .setColor("RANDOM") 
    .setTimestamp() 
    .setFooter("Ae Discord é Tudo Brincadeirinha ta?!")

    if (truefalse === 1) {
        setTimeout(() => {m.edit(`**Vish... Não foi dessa vez, ${hackeado.username} tem um firewall muito bom!! Acho melhor se preocupar com o FBI!**`)}, 2500)
    } else {
        setTimeout(() => {m.edit("<:HYhacker:756119669047427172> Usuário Hackeado!") && message.channel.send({ embeds: [hackembed] })}, 3200)   
    }


}