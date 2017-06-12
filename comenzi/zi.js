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
                message.channel.sendMessage('Nu ai pus un argument . Foloseste : `~zi [mesajul propus]`.');
            } else {
                message.channel.sendMessage(args.join(" ").substring(4));
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
  name: 'zi',
  description: 'Bot-ul repeta dupa tine .',
  usage: 'zi <cuvant>'
};