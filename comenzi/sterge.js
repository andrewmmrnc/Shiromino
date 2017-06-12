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
                message.channel.sendMessage('Nu ai pus un argument . Foloseste : `~sterge [numarul mesajelor care trebuie sterse]`.');
            } else {
                var msg;
                if(args.length === 1){
                    msg=2;
                } else {
                    msg=parseInt(args[1]) + 1;
                }
                message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
                message.channel.sendMessage('Bun , <@' + message.author.id + '>' + ' . Au fost sterse mesajele cu succes !');
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
  name: 'sterge',
  description: 'Sterge x mesaje .',
  usage: 'sterge x'
};