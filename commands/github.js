const Command = require('./command')

module.exports = class Github extends Command {

  static match (message) {
    return message.content.startsWith('!github')
  }

  static action (message) {
    message.reply("Actuellement sur Github, il y a :\n Le site de jarvis (https://github.com/homejarvis/jarvis-website)\net son api en php (https://github.com/homejarvis/jarvis-api)\nLe code source de Jarvis en lui même n'est pas encore disponible   ")
  }

}
