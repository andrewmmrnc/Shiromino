module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.send(`Un ultim ramas bun lui ${member.user.username} , o sa ne lipsesti !`);
};
