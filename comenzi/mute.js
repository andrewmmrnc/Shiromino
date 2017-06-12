const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'muted');
  if (!modlog) return message.reply('nu pot gasi channel-ul potrivit .');
  if (reason.length < 1) return message.reply('trebuie sa specifici si cauza pentru mute .');
  if (message.mentions.users.size < 1) return message.reply('trebuie sa mentionezi pe cineva pentru a primi mute .').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Actiune :** Un/mute\n**Utilizator :** ${user.tag}\n**Moderator :** ${message.author.tag}\n**Cauza :** ${reason}`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('nu am permisiunile necesare .').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unmute'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Da un/mute unui utilizator mentionat .',
  usage: 'un/mute [utilizator] [cauza]'
};
