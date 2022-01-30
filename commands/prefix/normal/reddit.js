const reddit = require('random-reddit');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let redditArray = [
    "memes",
    "HolUp",
    "orochinho"
  ]

  let reddita = redditArray[Math.floor(Math.random() * redditArray.length)]

  const img = await reddit.getImage(`${reddita}`);

  const embed = new Discord.MessageEmbed()
  .setTitle("😆| Meme do Reddit")
  .setDescription(`Reddit: r/${reddita}`)
  .setColor("#ce3700")
  .setImage(img)
  .setFooter("© HypedGroupCode")
  .setTimestamp();

  const button = new Discord.MessageButton()
  .setLabel(`Novo Meme`)
  .setCustomId(`btnRefresh_${message.channel.id}_${message.author.id}`)
  .setStyle(`PRIMARY`);

  const button2 = new Discord.MessageButton()
  .setLabel(`Outro Reddit`)
  .setCustomId(`otrReddit_${message.channel.id}_${message.author.id}`)
  .setStyle(`PRIMARY`);

  const row1 = new Discord.MessageActionRow()
  .addComponents(button, button2);

  const filter = i => i.user.id === message.author.id

  const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

  message.reply({ embeds: [embed], components: [row1] }).then(m => {
    collector.on("collect", async b => {
      if(b.customId === `btnRefresh_${message.channel.id}_${message.author.id}`) {
        let redditImg2 = await reddit.getImage(reddita)

        const embed2 = new Discord.MessageEmbed()
        .setTitle("😆| Meme do Reddit")
        .setDescription(`Reddit: r/${reddita}`)
        .setColor("#ce3700")
        .setImage(redditImg2)
        .setFooter("© HypedGroupCode")
        .setTimestamp();

        b.update({ embeds: [embed2] })
      }

      if(b.customId === `otrReddit_${message.channel.id}_${message.author.id}`) {
        let otrReddit = redditArray[Math.floor(Math.random() * redditArray.length)]

        let redditImg3 = await reddit.getImage(otrReddit)

        const embed3 = new Discord.MessageEmbed()
        .setTitle("😆| Meme do Reddit")
        .setDescription(`Reddit: r/${otrReddit}`)
        .setColor("#ce3700")
        .setImage(redditImg3)
        .setFooter("© HypedGroupCode")
        .setTimestamp();

        b.update({ embeds: [embed3] })
      }
    })
  })
}