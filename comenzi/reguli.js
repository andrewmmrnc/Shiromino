exports.run = (client, msg) => {
  const information = `
  == REGULI DISCORD ==

 • Fara injurii /// se pedepseste cu warn .
 • Fara continut NSFW pe server , inafara de channelul special "nsfw" /// se pedepseste cu warn .
 • Fara spam excesiv /// se pedepseste cu warn .
 • Orice fel de continut se pune in text-channelul corespunzator . /// se pedepseste cu warn .
 • Comenzile botilor se pun in text channelul "comenzi_boti" . /// se pedepseste cu warn .
 • Fara reclame la alte servere . /// se pedepseste cu warn sau kick .
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
  name: 'reguli',
  description: 'Ofera informatii despre regulile serverului .',
  usage: 'reguli'
};