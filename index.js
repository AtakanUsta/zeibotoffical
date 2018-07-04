const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NDY0MDU1ODk5MDc4NjU2MDAw.Dh5u_g.igFz0GT8bRGnxUD4aaMy6aW0seg');

var request = require('request');
var mcCommand = '/minecraft'; // Command for triggering
var mcIP = 'ZeiPixelCraft.aternos.me'; // Your MC server IP
//var mcPort = 1234; // Your MC server port


//deneme

//server bilgileri function başlangıç

function istatistik() {
    return new Promise(resolve => {
      setTimeout(() => {
       


       
            var url = 'http://mcapi.us/server/status?ip=' + mcIP;
            request(url, function(err, response, body) {
                if(err) {
                    console.log(err);
                    return message.reply('Bağlantı Kurulamıyor');
                }
                body = JSON.parse(body);
                
                if(body.online) {
                    
                    client.channels.get("463774807356604426").setName(`🔵Sunucu Online`); //on/offline
                    
                    if(body.players.now) {
                        
                        client.user.setActivity(`🔵Sunucu Online | Online Sayısı ` + body.players.now, { type: 'STREAMING',url:'http://twitch.tv/mustafaeren'});
                        client.channels.get("464064153058017300").setName(`🔵Aktif :  ` + body.players.now + `  🔵`); 
                    } else {
                        client.user.setActivity(`🔵Sunucu Online | Online Yok  `, { type: 'STREAMING',url:'http://twitch.tv/mustafaeren'});
                        client.channels.get("464064153058017300").setName(`🔴 Sunucu Offline 🔴`); 
                    }
                }else {
                    client.channels.get("463774807356604426").setName(`🔴Sunucu Offline`); //on/offline
                }
                
            });
        




        istatistik2();
      }, 10000);
    });
}


function istatistik2() {
    return new Promise(resolve => {
      setTimeout(() => {
       


       
            var url = 'http://mcapi.us/server/status?ip=' + mcIP;
            request(url, function(err, response, body) {
                if(err) {
                    console.log(err);
                    return message.reply('Bağlantı Kurulamıyor');
                }
                body = JSON.parse(body);
                
                if(body.online) {
                    
                    client.channels.get("463774807356604426").setName(`🔵Sunucu Online`); //on/offline
                    
                    if(body.players.now) {
                        
                        client.user.setActivity(`🔵Sunucu Online | Online Sayısı ` + body.players.now, { type: 'STREAMING',url:'http://twitch.tv/mustafaeren'});
                    } else {
                        client.user.setActivity(`🔵Sunucu Online | Online Yok  `, { type: 'STREAMING',url:'http://twitch.tv/mustafaeren'});
                    }
                }else {
                    client.channels.get("463774807356604426").setName(`🔴Sunucu Offline`); //on/offline
                }
                
            });
        




        istatistik3();
      }, 10000);
    });
}

function istatistik3() {
    return new Promise(resolve => {
      setTimeout(() => {
        client.user.setActivity(`Mustafa Eren ile`, { type: 'STREAMING',url:'http://twitch.tv/mustafaeren'});
        istatistik();
      }, 3500);
    });
}

//server bilgileri function bitiş



//client on başlangıç
client.on(`ready`,() => {
    
    console.log(``);
    console.log(`#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#`);
    console.log(`|                                             |`);
    console.log(`#      Lordclient Beta Test Aktifleştirildi!     #`);
    console.log(`|                                             |`);
    console.log(`#           Created by Mustafa Eren           #`);
    console.log(`|                                             |`);
    console.log(`#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#`);
    console.log(` | ${client.guilds.size} Server |`);
    
    istatistik();
   
});
 //client on bitiş



//client on başlangıç
client.on('message', message => {
    if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
            body = JSON.parse(body);
            var status = '*Minecraft server is currently offline*';
            if(body.online) {
                status = '**Minecraft** server is **online**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** people are playing!';
                } else {
                    status += '*Nobody is playing!*';
                }
            }
            message.reply(status);
        });
    }


    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    
if(message.content === 'sa') {
message.reply("Aleyküm Selam Hoşgeldin :wave:");
}
    if(message.content === 'SA') {
message.reply("Aleyküm Selam Hoşgeldin :wave:");
}
    if(message.content === 'Sa') {
message.reply("Aleyküm Selam Hoşgeldin :wave:");
}
    if(message.content === 'sA') {
message.reply("Aleyküm Selam Hoşgeldin :wave:");
}



});



//client on bitiş











