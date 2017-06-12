const Discord = require('discord.js');

module.exports = (guild, user) => {

  guild.defaultChannel.send(`${user.tag} a fost debanat !`);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Actiunea :** Unban\n**Utilizator :** ${user.tag}\n**Moderator :** ${guild.client.unbanAuth.tag}\n**Cauza :** ${guild.client.unbanReason}`);
  return guild.channels.get(guild.channels.find('name', 'mod-log').id).send({embed});

};
