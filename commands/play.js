const Command = require('./command')
const YoutubeStream = require('ytdl-core')
module.exports = class Play extends Command {

  static match (message) {
    return message.content.startsWith('!play')
  }

  static action (message) {

    if(hasRole(message.member, "Musicien")){
      let voiceChannel = message.guild.channels
        .filter(function (channel) { return channel.type === 'voice' })
        .first()
      let args = message.content.split(' ')
      if(!args[1]){
        message.reply(':rage: Merci de me donner un lien de musique !')
        return;
      }
      voiceChannel
        .join()
        .then(function (connection) {
          message.delete()
          let stream = YoutubeStream(args[1])
          stream.on('error', function () {
            message.reply(" :interrobang: Je n'ai pas réussi à lire cette vidéo :(")
            connection.disconnect()
          })
          message.delete()
          connection
            .playStream(stream)
            .on('end', function () {
              connection.disconnect()
              message.channel.send(':musical_note: La music est finis ! :musical_note: ')
            })
        })
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
