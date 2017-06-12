exports.run = (client, msg) => {
  const information = `
  • Bot realizat de therealisvan#6449 .
 • Versiune bot : 1.3.8
 • Construit pe baza Discord.js
 • Repo GitHub : https://github.com/andrewmmrnc/Shiromino /// fork me on GitHub .
 • Discord therealisvan#6449 : https://discordapp.com/invite/JTFTvF6
 • Pentru intrebari nu ezitati sa intrati pe discordul meu .
`;
  msg.channel.send(information);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eu',
  description: 'Ofera informatii despre realizatorul bot-ului .',
  usage: 'eu'
};
