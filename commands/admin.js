const Command = require('./command')

module.exports = class Admin extends Command {

  static match (message) {
    return message.content.startsWith('!admin')
  }

  static action (message) {

if(hasRole(message.member, "Admin")){
        let args = message.content.split(' ')
        if(args[1]){
          if(args[1] === "list"){
            message.delete()
          }
        }else{
          dm(message, "Utilisation de la commande !admin :\n``")
        }
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
function dm(messagedebase, messagesend){
  messagedebase.member.createDM().then(function (channel) {
    return channel.send(messagesend)
  }).catch(console.error)
}
