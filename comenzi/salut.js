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
        message.channel.sendMessage('Salut si tie , <@' + message.author.id + '> .');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'salut',
  description: 'Bot-ul te saluta inapoi .',
  usage: 'salut'
};