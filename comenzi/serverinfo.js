const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setColor(3447003)
  .setDescription(`Detinator : ${message.guild.owner.user.tag} (${message.guild.owner.id})`)
  .addField('Numar membrii', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} boti)`, true)
  .addField('Locatia serverului', message.guild.region, true)
  .addField('Data crearii', message.guild.createdAt.toLocaleString(), true)
  .addField('Numar roluri', message.guild.roles.size, true)
  .addField('AFK Timeout', `${message.guild.afkTimeout / 60} minute`, true)
  .addBlankField(true)
  .setTimestamp()
  .setFooter(client.user.username, client.user.avatarURL);
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Ofera informatii despre server .',
  usage: 'serverinfo'
};