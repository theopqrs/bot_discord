const Command = require('./command')

module.exports = class Mod extends Command {

  static match (message) {
    return message.content.startsWith('!mod')
  }

  static action (message) {
    if(hasRole(message.member, "Modérateur" || !hasRole(message.member, "Admin"))){
      let args = message.content.split(' ')
        if(args[1]){
          if(args[1] === 'kick' && message.mentions.users.size == 1){
            let kickuser = message.guild.member(message.mentions.users.first())
            if(!kickuser){
              dm(message, "Merci de précisez un utilisateur valide")
            }
            kickuser.kick()
          }
          if(args[1] === 'ban' && message.mentions.users.size == 1){
            let kickuser = message.guild.member(message.mentions.users.first())
            if(!kickuser){
              dm(message, "Merci de précisez un utilisateur valide")
            }
            kickuser.ban()
          }
      }else{
        message.member.createDM().then(function (channel) {
          return channel.send(":question: Commandes modérateur: \n`!mod kick <pseudo>`\n`!mod ban <pseudo>`")
        }).catch(console.error)
      }
    }else{
      message.member.createDM().then(function (channel) {
        return channel.send(":rage: Vous n'avez pas la permission !")
      }).catch(console.error)
      message.delete()
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
