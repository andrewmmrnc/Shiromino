exports.run = function(client, message, args) {
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
	if(hasRole(message.member, "💭 | MEMBRU")){
            message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
	}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Iti arata pingul bot-ului .',
  usage: 'ping'
};
