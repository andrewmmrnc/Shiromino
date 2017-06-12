const settings = require('../setari.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.sendCode('asciidoc', `= Lista de comenzi a bot-ului =\n\n[Folosire : ${settings.prefix}ajutor <nume comanda> pentru detalii]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nFolosire: ${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['a', 'ajutor'],
  permLevel: 0
};

exports.help = {
  name: 'ajutor',
  description: 'Afiseaza toate comenzile pentru permisiunea ta .',
  usage: 'ajutor [comanda]'
};