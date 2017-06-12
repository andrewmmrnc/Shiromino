exports.run = function(client, message, args) {
	  var args = message.content.split(/[ ]+/);
	          function pluck(array) {
	return array.map(function(item) { return item['name']; });
}

        	  function hasRole(mem, role) {
	if(pluck(mem.roles).includes(role)){
		return true;
	} else {
		return false;
	}
}
if(hasRole(message.member, "👓 | MODERATOR") || hasRole(message.member, "👑 | ADMINISTRATOR") || hasRole(message.member, "🎫 | @DEV")){
            if(args.length === 1){
                message.channel.sendMessage('Nu ai pus un argument . Foloseste : `~membru [numele celui care va fi membru]`.');
            } else {
                message.guild.member(message.mentions.users.first()).addRole('252015694756052992');
                message.channel.sendMessage('Bun , <@' + message.author.id + '>' + ' . Tocmai l-ai facut un `💭 | MEMBRU` pe ' + message.mentions.users.first() + '!');
            }
         } else {
                message.channel.sendMessage('Nu esti un `👓 | MODERATOR` .');
         }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'membru',
  description: 'Dai gradul de 💭 | MEMBRU unei persoane .',
  usage: 'membru <nume membru>'
};