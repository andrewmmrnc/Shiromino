const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('nu pot gasi channel-ul potrivit .');
  if (reason.length < 1) return message.reply('trebuie sa specifici si cauza pentru kick .');
  if (message.mentions.users.size < 1) return message.reply('trebuie sa mentionezi pe cineva pentru a primi kick .').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('nu pot sa dau afara pe acest membru .');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Actiune :** Kick\n**Utilizator :** ${user.tag}\n**Moderator :** ${message.author.tag}\n**Cauza :** ${reason}`);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Da kick utilizatorului mentionat .',
  usage: 'kick [utilizator] [cauza]'
};
