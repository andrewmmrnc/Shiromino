exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('nu pot gasi channel-ul potrivit .');
  if (reason.length < 1) return message.reply('trebuie sa specifici si cauza pentru unban .');
  if (message.mentions.users.size < 1) return message.reply('trebuie sa mentionezi pe cineva pentru a primi unban .').catch(console.error);
  message.guild.unban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Debaneaza un utilizator .',
  usage: 'unban [utilizator] [cauza]'
};
