exports.run = (client, msg) => {
  msg.channel.sendMessage("Adorm ...")
  msg.channel.sendMessage("M-am trezit ...")
    .then(() => {
      process.exit();
    })
    .catch((e) => {
      console.error(e);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'restart',
  description: 'Restarteaza bot-ul .',
  usage: 'restart'
};
