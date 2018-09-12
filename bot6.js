const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
***السلام عليكم حيك الله هنا***
***:gem:  https://discord.gg/2Vj5HAx :gem:
***
joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
***السلام عليكم حيك الله هنا***
***:gem:  https://discord.gg/2Vj5HAx  :gem:
***
joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})




client.login(process.env.BOT_TOKEN6);
