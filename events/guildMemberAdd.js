module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.send(`Va rog sa il/o primiti pe ${member.user.username} in acest server !`);
};
