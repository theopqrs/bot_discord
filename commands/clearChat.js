const Command = require('./command')

module.exports = class ClearChat extends Command {

  static match (message) {
    return message.content.startsWith('!clear')
  }

  static action (message) {

if(hasRole(message.member, "Modérateur" || hasRole(message.member, "Admin"))){
  message.channel.fetchMessages(50).then(messages => message.channel.bulkDelete(messages));
  message.channel.send('Un petit peu de proprété !')
}else{
  return;
}

}
}
function hasRole(meme, role){
  if(pluck(meme.roles).includes(role)){
    return true;
  }else{
    return false;
  }
}
function pluck(array){
  return array.map(function(item) {return item["name"];})
}
