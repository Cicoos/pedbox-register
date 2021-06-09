const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

if(!message.member.roles.cache.some(r => [(ayarlar.yetkilirol)].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))return message.reply(`Bu komutu sadece yetkililer kullanabilir!!!`).then(x => x.delete({timeout:5000}))
 
 let kullanıcı = message.mentions.users.first()
    
 
if(!kullanıcı) {

let üye = db.fetch(`yetkili.${message.author.id}.erkek`);
let kayıtlar = db.fetch(`yetkili.${message.author.id}.toplam`); 
if(üye === null) üye = "0"  
if(üye === undefined) üye = "0"
if(kayıtlar === null) kayıtlar = "0"
if(kayıtlar === undefined) kayıtlar = "0"
  
const sorgu1 = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL ({ dynamic: true}))
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`˃ Toplam Kayıtların: \`${kayıtlar}\`
˃ Toplam üye Kayıtların: \`${üye}\``)
.setColor('PURPLE')
 return message.channel.send(sorgu1)
};
  
if(kullanıcı) {  
let üye1 = db.fetch(`yetkili.${kullanıcı.id}.erkek`);
let kayıtlar1 = db.fetch(`yetkili.${kullanıcı.id}.toplam`); 
if(üye1 === null) üye1 = "0"  
if(üye1 === undefined) üye1 = "0"
if(kayıtlar1 === null) kayıtlar1 = "0"
if(kayıtlar1 === undefined) kayıtlar1 = "0"
  
const sorgu2 = new Discord.MessageEmbed()
.setThumbnail(kullanıcı.avatarURL ({ dynamic: true})) 
.setAuthor(`${kullanıcı.username}`)
.setDescription(`<a:kalp:834184939221811240> Toplam Kayıtların: \`${kayıtlar1}\`
<a:kalp:834184939221811240>Toplam üye Kayıtların: \`${üye1}\``)
.setColor('PURPLE')
 return message.channel.send(sorgu2)
  
};
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["stat", "kayıtlar", "kayıt-kontrol"],
    permLvl: 0,
}
  
exports.help = {  
  name: "stat"
}