const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  msg.channel.sendCode("asciidoc", `= STATUS SHIROMINO BOT =
  
• Memorie folosita  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Timpul online     :: ${duration}
• Utilizatori       :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Servere           :: ${client.guilds.size.toLocaleString()}
• Canale            :: ${client.channels.size.toLocaleString()}
• Discord.js        :: v${Discord.version}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'status',
  description: 'Afiseaza informatiile despre bot .',
  usage: 'status'
};