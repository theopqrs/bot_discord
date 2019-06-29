const Command = require('./command')

module.exports = class Help extends Command {

  static match (message) {
    return message.content.startsWith('!help')
  }

  static action (message) {
    message.delete()
    dm(message, "***Commandes disponible***\n\n`!github => Pour suivre l'évolution du développement`\n\n`!google <recherche> => Vous renvoie un lien de recherche`\n\n`!ping => Vous renvoie votre ping`\n\n`!play <lien_streaming> => Permet de lancer une musique dans le channel ***Musique*** (Uniquement disponible pour les Musicien)`")
  }

}
function dm(messagedebase, messagesend){
  messagedebase.member.createDM().then(function (channel) {
    return channel.send(messagesend)
  }).catch(console.error)
}
