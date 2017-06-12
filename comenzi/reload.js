exports.run = (client, message, args) => {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(`Nu pot gasi comanda : ${args[0]}`);
  } else {
    message.channel.send(`Reincarcam : ${command}`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`Comanda a fost reincarcata cu succes: ${command}`);
          })
          .catch(e => {
            m.edit(`Comanda nu a fost reincarcata : ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Reincarca cache-ul comenzii mentionate .',
  usage: 'reload <nume_comanda>'
};
