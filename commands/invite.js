const Command = require('./command')

module.exports = class Invite extends Command {

  static match (message) {
    return message.content.startsWith('!invite')
  }

  static action (message) {
    message.delete()
    message.reply("Invitez dont vos amis :') (https://discord.gg/Vy64Zbr)'")
  }

}
