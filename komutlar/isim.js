const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
const client = new Discord.Client();
exports.run = async(client, message, args) => {
      let d = ayarlar.prefix
      let yetkili = ayarlar.yetkilirol
      let tag = ayarlar.tag 
     const member = message.mentions.members.first();

 
 

if (!member) return message.channel.send(new Discord.MessageEmbed().setColor('PURPLE').setDescription(`İsim Değiştireceğin Kullanıcıyı Belirtmelisin! \n\n **Örnek Kullanım:** ${d}isim @kullanıcı <isim> <yaş>`)).then(x => x.delete({timeout:5000}))
let isim = args[1] 
if (!isim) return message.channel.send(new Discord.MessageEmbed().setColor('PURPLE').setDescription(`İsmini Belirtmelisin! \n\n **Örnek Kullanım:** ${d}isim @kullanıcı <isim> <yaş>`)).then(x => x.delete({timeout:5000}))
let yaş = args[2] 
if (!yaş) return message.channel.send(new Discord.MessageEmbed().setColor('PURPLE').setDescription(`Yaşını Belirtmelisin! \n\n **Örnek Kullanım:** ${d}isim @kullanıcı <isim> <yaş>`)).then(x => x.delete({timeout:5000}))
  member.setNickname(`${isim}`)
  

  client.channels.cache.get("818580490835591200").send(new Discord.MessageEmbed()
.setColor('PURPLE')
.setDescription(`**${member}  Kullanıcısının ismi  \` ${isim} \` olarak güncellendi.**`)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
  )
  
  

}
exports.conf = {
  enabled: true,
  guildonly: false, 
  aliases: ['i'],
  permlevel: 0
}
exports.help = {
  name: 'isimm',
  description: 'erkek olarak kayıt eder',
  usage: 'İsim Değiştirmeye yarar'
}