const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Ping = require('./commands/ping')
const Play = require('./commands/play')
const ClearChat = require('./commands/clearChat')
const Github = require('./commands/github')
const Mod = require('./commands/mod')
const Admin = require('./commands/admin')
const Help = require('./commands/help')
const Invite = require('./commands/invite')


bot.on('ready', function () {
  // bot.user.setAvatar('./avatar.png').catch(console.error)
   bot.user.setGame('Bonjour Monsieur').catch(console.error)
  console.log('ready');
})

bot.on('guildMemberAdd', function (member) {
  member.createDM().then(function (channel) {
    return channel.send(' :stuck_out_tongue_winking_eye: Bienvenue sur le channel ' + member.displayName)
  }).catch(console.error)
})

bot.on('message', function (message) {
  let commandUsed =
    Ping.parse(message) ||
    Play.parse(message) ||
    Google.parse(message) ||
    ClearChat.parse(message) ||
    Github.parse(message) ||
    Mod.parse(message) ||
    Admin.parse(message) ||
    Help.parse(message) ||
    Invite.parse(message)
})

bot.login('')
