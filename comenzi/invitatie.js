exports.run = (client, msg) => {
    msg.channel.sendMessage('Pentru a o adauga pe `Shiromino#2022` pe serverul tau de discord , te rog sa folosesti aceasta invitatie speciala : `https://discordapp.com/oauth2/authorize?permissions=805555262&scope=bot&client_id=323185139259539456` . O zi buna !');
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invitatie',
  description: 'Afiseaza invitatia pentru bot .',
  usage: 'invitatie'
};