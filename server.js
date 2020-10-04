const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://sdgsdfhjgtfhkghk.glitch.me/`);
}, 280000);

const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const db = require("quick.db");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config.js");

const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const Enmap = require("enmap");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const dbg = new Enmap({ name: "Giveaway" });
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const r1 = require("snekfetch");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyC-cxrwR4E2lizvODfupRtCIFht7taB_FM");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`Channels! [ " ${client.channels.size} " ]`);

  console.log(`Prefix! [ " ${prefix}" ]`);
  console.log(`Language! [ " NodeJS " ]`);
  console.log(
    `Ram Usage! [ " ${(process.memoryUsage().rss / 1048576).toFixed()}MB " ]`
  );
  

  client.user.setActivity(` ${prefix}help 🎆🎈🎆🎈 `, { type: "Playing" });
});
client.on("message",async msg => {
    if(msg.content.startsWith(prefix + "help")){
      let args = msg.content.split(" ").slice(1).join(" ");
      msg.reply("**تم ارسال اوامر في الخاص اذ كان خاصك مقفول افتحه**").then(o => {
        o.react("✅")

        })
    }
  });
client.on("message", message => {
  if (message.content === prefix + "help") {
        const invitelink4 = "https://discord.com/oauth2/authorize?client_id=746448985035898970&permissions=8&scope=bot";
    const cmdlink4 = "https://t3dem.soranntv.repl.co/About.html";
    const supportlink4 = "https://discord.gg/MEz3M9C";
  
  let embed = new Discord.RichEmbed()
  .setDescription(`[Add To Your Server](${invitelink4}) \n [Bot Commands](${cmdlink4}) \n [Join the support server](${supportlink4}) `)// .MahMouD#0018
  .setTimestamp()
  .setColor("RED")

message.author.send(embed).then(m => {
message.react("✅")  
}).catch(() => {
return message.react("❌")
});
}});

 
client["on"]("message", message => {
  if (message["author"]["bot"]) return undefined;
  let args = message["content"]["split"](" ");
  if (message["content"]["startsWith"](prefix + "kick")) {
    if (!message["member"]["hasPermission"]("MANAGE_GUILD"))
      return message["channel"].send(`**:x:\`| You Not Have Permission\`**`);
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[1])
    );
    if (!user)
      return message["channel"]["send"](
        `**Usage | ${prefix}kick \`[User/UserID]\`**`
      );
    let Reason = message["content"]
      ["split"](" ")
      .slice(2)
      .join(" ");
    if (!Reason)
      return message["channel"]["send"](`:x:| **Please Type Reason**`);
    message.guild.member(user).kick(Reason);
    message["channel"]["send"](
      `**:white_check_mark: | Done Has Kicked <@${user.id}> Reason: \`${Reason}\`**`
    );
  }
});
 
client["on"]("message", message => {
  if (message["author"]["bot"]) return undefined;
  let args = message["content"]["split"](" ");
  if (message["content"]["startsWith"](prefix + "ban")) {
    if (!message["member"]["hasPermission"]("MANAGE_GUILD"))
      return message["channel"].send(`**:x:\`| You Not Have Permission\`**`);
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[1])
    );
    if (!user)
      return message["channel"]["send"](
        `**Usage | ${prefix}ban \`[User/UserID]\`**`
      );
    let Reason = message["content"]
      ["split"](" ")
      .slice(2)
      .join(" ");
    if (!Reason)
      return message["channel"]["send"](`:x:| **Please Type Reason**`);
    message.guild.member(user).ban(Reason);
    message["channel"]["send"](
      `**:white_check_mark: | تم حظره من سيرفر <@${user.id}> سبب: \`${Reason}\`**`
    );
  }
});
client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();//حقوق مي كودز
    if(!mention) return  message.channel.send('').then(msg => { //حقوق مي كودز
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**You Cannot give mute to your self :x:**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //حقوق مي كودز
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**You can't give mute for a staff member. :x:**`); //حقوق مي كودز
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //حقوق مي كودز
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user [ Time ] [ Reason] **`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **No Reason.** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**You Have been Muted !!**')
    .addField('**Server**',[ message.guild.name ]) //حقوق مي كودز
    .addField('**BY:**', [ message.author ])
    .addField('**Reason:**',reason)
    .addField('**Time:**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //حقوق مي كودز
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //حقوق مي كودز
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //حقوق مي كودز
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:ballot_box_with_check: | ${mention.user.username}  Muted !**`);
      mention.setMute(true); //حقوق مي كودز
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //حقوق مي كودز
  }
});
 
/// un mute 
 
 
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  //حقوق مي كودز
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //حقوق مي كودز
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source: | ${mention.user.username} is all ready unmuted**`)
 
  await kinggamer.removeRole(role) //حقوق مي كودز
  message.channel.sendMessage(`**:ballot_box_with_check: | ${mention.user.username}  UnMuted !**`);
 
  return;
 
  }
 
});

/*
حقوق
Node
*/
client.on("message", async message => {
  const moment = require("moment"); //npm i moment
  const ms = require("ms"); //npm i ms
  var time = moment().format("Do MMMM YYYY , hh:mm");
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
    hours = currentTime.getHours() + 3,
    minutes = currentTime.getMinutes(),
    done = currentTime.getMinutes() + duration,
    seconds = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var suffix = "AM";
  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }
 
  var filter = m => m.author.id === message.author.id;
  if (message.content.startsWith(prefix + "gstart")) {
    let embed1 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Missing the following permission `MANAGE_GUILD`");
 
    let embed2 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Please send the `room` name without mentioning it  -  من فضلك اكتب اسم الروم");
 
    let embed3 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Wrong room name  -  اسم خاطئ");
 
    let embed4 = new Discord.RichEmbed()
      .setColor()
      .setDescription("Please send the `time`  - من فضلك اكتب الوقت");
 
    let embed5 = new Discord.RichEmbed()
      .setColor()
      .setDescription(
        "Wrong time format\nExample of time format: 1s / 1m / 1h / 1d / 1w"
      );
 
    let embed6 = new Discord.RichEmbed()
      .setColor()
      .setDescription("من فضلك اكتب الجائزة - Please Type The Presnt");
 
    if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
      return message.channel.send(embed1);
    message.channel.send(embed2).then(msg => {
      message.channel
        .awaitMessages(filter, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
          let room = message.guild.channels.find(
            "name",
            collected.first().content
          );
          if (!room) return message.channel.send(embed3);
          room = collected.first().content;
          collected.first().delete();
          msg.edit(embed4).then(msg => {
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (!collected.first().content.match(/[1-60][s,m,h,d,w]/g))
                  return message.channel.send(embed5);
                duration = collected.first().content;
                collected.first().delete();
                msg.edit(embed6).then(msg => {
                  message.channel
                    .awaitMessages(filter, {
                      max: 1,
                      time: 20000,
                      errors: ["time"]
                    })
                    .then(collected => {
                      title = collected.first().content;
                      collected.first().delete();
                      msg.delete();
                      message.delete();
                      try {
                        let giveEmbed = new Discord.RichEmbed()
                          .setColor()
                          .setTitle(`${title}`)
                          .setDescription(
                            `React With :tada: To Enter! \nTime remaining : ${duration} \n **Created at :**
${hours}:${minutes}:${seconds} ${suffix}`
                          );
                        //.setFooter(message.author.username, message.author.avatarURL);
                        message.guild.channels
                          .find("name", room)
                          .send(" :tada: **Giveaway** :tada:", {
                            embed: giveEmbed
                          })
                          .then(m => {
                            let re = m.react("🎉");
                            setTimeout(() => {
                              let users = m.reactions.get("🎉").users;
                              let list = users
                                .array()
                                .filter(
                                  u => (u.id !== m.author.id) !== client.user.id
                                );
                              let gFilter =
                                list[
                                  Math.floor(Math.random() * list.length) + 1
                                ];
                              if (gFilter === undefined) {
                                let endEmbed = new Discord.RichEmbed()
                                  .setColor()
                                  .setTitle(title)
                                  .setDescription(
                                    `Winners : no enough number of reaction so there is no winner
                                    الفائز : لا يوجد عدد كافي من الرياشكنات   `
                                  )
                                  .setFooter("Ended at :")
                                  .setTimestamp();
                                m.edit("** :tada: GIVEAWAY ENDED  :tada:**", {
                                  embed: endEmbed
                                });
                              } else {
                                let endEmbed = new Discord.RichEmbed()
                                  .setColor()
                                  .setTitle(title)
                                  .setDescription(`Winners : ${gFilter}`)
                                  .setFooter("Ended at :")
                                  .setTimestamp();
                                m.edit("** :tada: GIVEAWAY ENDED :tada: **", {
                                  embed: endEmbed
                                });
                              }
                              if (gFilter === undefined) {
                                // message.guild.channels.find("name" , room).send("No enough number of reactions")
                              } else {
                                message.guild.channels
                                  .find("name", room)
                                  .send(
                                    `Congratulations ${gFilter}! You won The \`${title}\`:tada:`
                                  );
                              }
                            }, ms(duration));
                          });
                      } catch (e) {
                        message.channel.send(
                          `:heavy_multiplication_x:| **i Don't Have Prem**`
                       );
                       console.log(e);
                     }
                   });
               });
             });
         });
       });
   });
 }
});
client.on("message", message => {
 
let time = message.content.split(" ").slice(1);

if(message.content.startsWith(`مؤقت`))
{
message.channel.send("بداء مؤقت بثواني");

setTimeout(function() {
  return message.reply(`انتهى الوقت`);
  
}, time * 1000);
  
}});
client.on("message", message => {
 
let time = message.content.split(" ").slice(1);

if(message.content.startsWith(`Ftimer`))
{
message.channel.send("بداء مؤقت بثواني");

setTimeout(function() {
  return message.reply(`انتهى الوقت`);
  
}, time * 1000);
  
}});

 client.on("message", message => {
  if (message.channel.type == "dmdddddddddddddddddd") {
    
    let embed = new Discord.RichEmbed()
    .setTitle('New message !')
    .addField(`> **Message BY** : **${message.author.tag}**`)
    .addField(`> **ID** : **${message.author.id}**`)
    .addField(`> **Message** : ${message.content}`)
    .setFooter(`**اسم البوت Alarm**`)
    client.channels.get('ايدي الروم').send(embed);
   
}});
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "roll")) {
  
  let args = message.content.split(" ").slice(1).join(" ");
  
  if (!args) return message.channel.send(Math.floor(Math.random() * 100) + 1)
  if (!args[0] || isNaN(args[0])) return message.channel.send("🙄 - \""+ args +"\" is not a valid input string for " + prefix + "roll.")
  if (args) return message.channel.send(Math.floor(Math.random() * args) + 1)
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith("نرد")) {
  
  let args = message.content.split(" ").slice(1).join(" ");
  
  if (!args) return message.channel.send(Math.floor(Math.random() * 100) + 1)
  if (!args[0] || isNaN(args[0])) return message.channel.send("🙄 - \""+ args +"\" is not a valid input string for " + prefix + "roll.")
  if (args) return message.channel.send(Math.floor(Math.random() * args) + 1)
  }
});
client.on("message",async msg => {
    if(msg.content.startsWith(prefix + "clear")){
      let args = msg.content.split(" ").slice(1).join(" ");
      if(!args)  return msg.reply(`**${msg.content} <Number Messages Deleted?>**`)
      msg.reply("**Are You Sure Of The Deleted Messages?**").then(o => {
        o.react("✅")
        .then(()=> o.react('❎'))
        .then(()=> o.react("✅"))
        let reaction1 = (reaction,user) => reaction.emoji.name === "✅" && user.id === msg.author.id
        let reaction2 = (reaction,user) => reaction.emoji.name === "❎" && user.id === msg.author.id
        let react3 = o.createReactionCollector(reaction1, { time: 12300})
        let react4 = o.createReactionCollector(reaction2, { time: 12300})
        react3.on("collect", r => {
         msg.channel.bulkDelete(args)
          msg.reply(`**Done Deleted Messages ${args}**`).then(op => {
          op.delete(1200)
         o.delete(1200)
         msg.delete(1200)
       })
       react4.on("collect", r => {
        msg.reply(`**Done Deleted Messages Has Been Cancel**`).then(ob => {
          ob.delete(1200)
          o.delete(1200)
          msg.delete(1200)
        })
        })
      })
    })
    
    }
  });
client.on("message",async msg => {
    if(msg.content.startsWith("امسح")){
      let args = msg.content.split(" ").slice(1).join(" ");
      if(!args)  return msg.reply(`**${msg.content} <Number Messages Deleted?>**`)
      msg.reply("**هل انت متاكد من المسح?**").then(o => {
        o.react("✅")
        .then(()=> o.react('❎'))
        .then(()=> o.react("✅"))
        let reaction1 = (reaction,user) => reaction.emoji.name === "✅" && user.id === msg.author.id
        let reaction2 = (reaction,user) => reaction.emoji.name === "❎" && user.id === msg.author.id
        let react3 = o.createReactionCollector(reaction1, { time: 12300})
        let react4 = o.createReactionCollector(reaction2, { time: 12300})
        react3.on("collect", r => {
         msg.channel.bulkDelete(args)
          msg.reply(`**Done Deleted Messages ${args}**`).then(op => {
          op.delete(1200)
         o.delete(1200)
         msg.delete(1200)
       })
       react4.on("collect", r => {
        msg.reply(`**Done Deleted Messages Has Been Cancel**`).then(ob => {
          ob.delete(1200)
          o.delete(1200)
          msg.delete(1200)
        })
        })
      })
    })
    
    }
  });
client.on('message', message =>{
  if (message.content.startsWith("بنق")) {
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});


client.on("message", msg => {
  if (["roll","نرد"].some(cmd => cmd == msg.content)) 
  {
    let r = Math.floor(Math.random() * 10); 
    msg.channel.send(r == 0 ? r + 1 : r);
  }
});
 client.on('message', message =>{
    if(message.content.startsWith (prefix  + 'myid'))   
    message.channel.send('<@!'+message.author.id + '>'+ ' '+ `your id is: ` + message.author.id);
});
 client.on('message', function(ds) {
    if(ds.content.startsWith (prefix  + 'myname')) {

    const embed = new Discord.RichEmbed()

    .setColor("RANDOM")
  
    .addField('Your Name',`${ds.author.username}` )

    ds.channel.send({embed});
  }
});
client.on("message", async message => {
  if (message.content.startsWith("بوت شغال")) {
    let help = new Discord.RichEmbed()
      .setColor("#3d3b3b")
      .setThumbnail(message.author.avatarURL).setDescription(`**
***هلا حبي انا موجود***
**`);
    message.channel.sendEmbed(help);
  }
});
client.on("message", async message => {
  var prefix = "#";
  if (!message.guild || message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "bc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel
      .send(
        ">>> **[1] All Members :hourglass:  \n[2] Online Members :hourglass:  \n[3] For Roles :hourglass:  \n[0] Closed  :lock:**"
      )
      .then(m => {
        message.channel
          .awaitMessages(msg => msg.author.id === message.author.id, {
            max: 1,
            time: 1000 * 60 * 2,
            errors: ["time"]
          })
          .then(c => {
            if (c.first().content === "1") {
              message.guild.members.forEach(m => {
                m.send(`${args}\n`).catch(err => {
                  if (err) throw err;
                });
              });
              c.first().delete();
              m.delete();
              message.channel.send(
                "**Successfuly Shared :white_check_mark: **"
              );
            }
            if (c.first().content === "2") {
              message.guild.members
                .filter(m => m.presence.status !== "offline")
                .forEach(m => {
                  m.send(`${args}\n`).catch(err => {
                    if (err) throw err;
                  });
                });
              c.first().delete();
              m.delete();
              message.channel.send("**Successfuly Shared :white_check_mark: **");
            }
            if (c.first().content == "0") {
              c.first().delete();
              m.delete();
              message.channel.send("**Successfuly Shared :white_check_mark: **");
            }
            if (c.first().content === "3") {
              m.edit("**>>> Type Role**").then(ms => {
                message.channel
                  .awaitMessages(msg => msg.author.id === message.author.id, {
                    max: 1,
                    time: 1000 * 60 * 2,
                    errors: ["time"]
                  })
                  .then(c => {
                    let role = message.guild.roles.find(
                      role => role.name === c.first().content
                    );
                    if (!role)
                      return message.channel
                        .send(
                          "**:x: Can't Find Role :x:**"
                        )
                        .then(() => {
                          ms.delete();
                          c.first().delete();
                        });
                    let roleID = role.id;
                    message.guild.roles.get(roleID).members.forEach(m => {
                      m.send(`${args}\n`).catch(err => {
                        if (err) throw err;
                      });
                    });
                    c.first().delete();
                    m.delete();
                    message.channel.send("**Successfuly Shared :white_check_mark: **");
                  });
              });
            }
          })
          .catch(() => m.delete());
      });
  } else if (message.content.startsWith(prefix + "setname")) {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.author.id === "") return;
    client.user.setUsername(args);
    message.channel.send(`Successfuly Changeed To..**${args}** `);
  } else if (message.content.startsWith(prefix + "setavatar")) {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.author.id === "") return;
    client.user.setAvatar(args).catch(err => message.reply("send a valid url"));
    message.channel.send(`**Successfuly Changeed To ${args}** `);
  }
});

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var stewart = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("703553782532800542").send({ embed: stewart });
    }
});
client.on ("message",async message => {
if (message.author.id !== "694151219907919912") return;
var prefix = "$",
arg = message.content.split(" ");
if (message.content.startsWith (prefix + "setname")) {
if (!arg [1]) return message.reply("**specify a name**");
if (client.user.username == arg [1]) return message.reply("**My username is already "+arg[1]+"**");
client.user.setUsername(arg [1]);
message.reply("**Done**");
} else if (message.content.startsWith (prefix+ "stream")) {
if (!arg.slice(1).join(" ")) return message.reply("**Specify a game description**");
client.user.setActivity(arg.slice(1).join(" "), {type: "STREAMING", url: "twitch.tv/steve"});
message.reply("**Done**");
} else if (message.content.startsWith (prefix+ "play")) {
if (!arg.slice(1).join(" ")) return message.reply("**Specify a game description**");
client.user.setGame(arg.slice(1).join(" "));
message.reply("**Done**");
} else if (message.content.startsWith (prefix+ "watching")) {
if (!arg.slice(1).join(" ")) return message.reply("**Specify a game description**");
client.user.setActivity(arg.slice(1).join(" "), {type: "WATCHING"});
message.reply("**Done**");
} else if (message.content.startsWith (prefix+ "listening")) {
if (!arg.slice(1).join(" ")) return message.reply("**Specify a game description**");
client.user.setActivity(arg.slice(1).join(" "), {type: "LISTENING"});
message.reply("**Done**");
} else if (message.content.startsWith (prefix+ "setavatar")) {
if (!arg [1]) return message.reply("**Specify a avatar url**");
client.user.setAvatar(arg [1]);
message.reply("**Done**");
} 
});
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == prefix + 'members')
    var Node = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle("Members INFO")
      .addBlankField(true)
      .addField(
        "Online Members",
        `${
          message.guild.members.filter(m => m.presence.status == "online").size
        }`
      )
      .addField(
        "Offline",
        `${
          message.guild.members.filter(m => m.presence.status == "offline").size
        }`
      )
      .addField(
        "Server Members",
        `${message.guild.memberCount}`
      );
  message.channel.send(Node);
});
client.on("message", message => {
  if (message.content === prefix + "createcolors") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel
        .send("**You Dont Have** `ADMINISTRATOR` **premission**")
        .then(msg => msg.delete(6000));
    message.guild.createRole({
      name: "1",
      color: "#000001",
      permissions: []
    });
    message.guild.createRole({
      name: "2",
      color: "#0a0a0a",
      permissions: []
    });
    message.guild.createRole({
      name: "3",
      color: "#131313",
      permissions: []
    });
    message.guild.createRole({
      name: "4",
      color: "#1f1f1f",
      permissions: []
    });
    message.guild.createRole({
      name: "5",
      color: "#242424",
      permissions: []
    });
    message.guild.createRole({
      name: "6",
      color: "#333333",
      permissions: []
    });
    message.guild.createRole({
      name: "7",
      color: "#5c5c5c",
      permissions: []
    });
    message.guild.createRole({
      name: "8",
      color: "#797979 ",
      permissions: []
    });
    message.guild.createRole({
      name: "9",
      color: "#a0a0a0",
      permissions: []
    });
    message.guild.createRole({
      name: "10",
      color: "#cecece",
      permissions: []
    });
    message.guild.createRole({
      name: "11",
      color: "#ffffff",
      permissions: []
    });
    message.guild.createRole({
      name: "12",
      color: "#110000",
      permissions: []
    });

    message.guild.createRole({
      name: "13",
      color: "#2c0000",
      permissions: []
    }); //master killer

    message.guild.createRole({
      name: "14",
      color: "#380401",
      permissions: []
    });

    message.guild.createRole({
      name: "15",
      color: "#4b0101",
      permissions: []
    });

    message.guild.createRole({
      name: "16",
      color: "#520000",
      permissions: []
    });

    message.guild.createRole({
      name: "17",
      color: "#580000",
      permissions: []
    });

    message.guild.createRole({
      name: "18",
      color: "#810000",
      permissions: []
    });

    message.guild.createRole({
      name: "19",
      color: "#a00000",
      permissions: []
    });

    message.guild.createRole({
      name: "20",
      color: "#c90000",
      permissions: []
    });

    message.guild.createRole({
      name: "21",
      color: "#f10000",
      permissions: []
    });

    message.guild.createRole({
      name: "22",
      color: "#ff0000",
      permissions: []
    });
    message.guild.createRole({
      name: "23",
      color: "#310d00",
      permissions: []
    });
    message.guild.createRole({
      name: "24",
      color: "#471d00",
      permissions: []
    });

    message.guild.createRole({
      name: "25",
      color: "#632500",
      permissions: []
    });

    message.guild.createRole({
      name: "26",
      color: "#702900",
      permissions: []
    });

    message.guild.createRole({
      name: "27",
      color: "#743300",
      permissions: []
    }); //master killer

    message.guild.createRole({
      name: "28",
      color: "#793600",
      permissions: []
    });
    message.guild.createRole({
      name: "29",
      color: "#8a4600",
      permissions: []
    });

    message.guild.createRole({
      name: "30",
      color: "#b34700",
      permissions: []
    });

    message.guild.createRole({
      name: "31",
      color: "#d86300",
      permissions: []
    });

    message.guild.createRole({
      name: "32",
      color: "#ee6900",
      permissions: []
    });

    message.guild.createRole({
      name: "33",
      color: "#ff8100",
      permissions: []
    });

    message.guild.createRole({
      name: "34",
      color: "#02001a",
      permissions: []
    });

    message.guild.createRole({
      name: "35",
      color: "#040027",
      permissions: []
    });
    message.guild.createRole({
      name: "36",
      color: "#000250",
      permissions: []
    });

    message.guild.createRole({
      name: "37",
      color: "#00006b",
      permissions: []
    });

    message.guild.createRole({
      name: "38",
      color: "#09008b ",
      permissions: []
    });

    message.guild.createRole({
      name: "39",
      color: "#020094",
      permissions: []
    });

    message.guild.createRole({
      name: "40",
      color: "#0005b9",
      permissions: []
    });
    message.guild.createRole({
      name: "41",
      color: "#0f00db",
      permissions: []
    });
    message.guild.createRole({
      name: "42",
      color: "#0300f7",
      permissions: []
    });
    message.guild.createRole({
      name: "43",
      color: "#002bff",
      permissions: []
    });
    message.guild.createRole({
      name: "44",
      color: "#0047ff",
      permissions: []
    });

    message.guild.createRole({
      name: "45",
      color: "#001601",
      permissions: []
    });

    message.guild.createRole({
      name: "46",
      color: "#002501",
      permissions: []
    });

    message.guild.createRole({
      name: "47",
      color: "#052900",
      permissions: []
    });

    message.guild.createRole({
      name: "48",
      color: "#003b03",
      permissions: []
    });

    message.guild.createRole({
      name: "49",
      color: "#005802",
      permissions: []
    });

    message.guild.createRole({
      name: "50",
      color: "#007715",
      permissions: []
    });

    message.guild.createRole({
      name: "51",
      color: "#179600",
      permissions: []
    });

    message.guild.createRole({
      name: "52",
      color: "#00a50e",
      permissions: []
    });

    message.guild.createRole({
      name: "53",
      color: "#00ad06",
      permissions: []
    });

    message.guild.createRole({
      name: "54",
      color: "#00be00",
      permissions: []
    });

    message.guild.createRole({
      name: "55",
      color: "#00ff0f",
      permissions: []
    });

    message.guild.createRole({
      name: "56",
      color: "#292800",
      permissions: []
    });

    message.guild.createRole({
      name: "57",
      color: "#3a3601",
      permissions: []
    });

    message.guild.createRole({
      name: "58",
      color: "#474500",
      permissions: []
    });

    message.guild.createRole({
      name: "59",
      color: "#5e5c00",
      permissions: []
    });

    message.guild.createRole({
      name: "60",
      color: "#818100",
      permissions: []
    });

    message.guild.createRole({
      name: "61",
      color: "#999800",
      permissions: []
    });

    message.guild.createRole({
      name: "62",
      color: "#aca600",
      permissions: []
    });

    message.guild.createRole({
      name: "63",
      color: "#bcc500",
      permissions: []
    });

    message.guild.createRole({
      name: "64",
      color: "#d1d100",
      permissions: []
    });

    message.guild.createRole({
      name: "65",
      color: "#c9d800",
      permissions: []
    });

    message.guild.createRole({
      name: "66",
      color: "#ffee00",
      permissions: []
    });

    message.guild.createRole({
      name: "67",
      color: "#1b0030",
      permissions: []
    });

    message.guild.createRole({
      name: "68",
      color: "#1e003a",
      permissions: []
    });

    message.guild.createRole({
      name: "69",
      color: "#2c004b",
      permissions: []
    });

    message.guild.createRole({
      name: "70",
      color: "#3e005e",
      permissions: []
    });

    message.guild.createRole({
      name: "71",
      color: "#5d0097",
      permissions: []
    });

    message.guild.createRole({
      name: "72",
      color: "#6b009c",
      permissions: []
    });

    message.guild.createRole({
      name: "73",
      color: "#8c00b8",
      permissions: []
    });

    message.guild.createRole({
      name: "74",
      color: "#a200c7",
      permissions: []
    });

    message.guild.createRole({
      name: "75",
      color: "#aa00e0",
      permissions: []
    });

    message.guild.createRole({
      name: "76",
      color: "#cc00db",
      permissions: []
    });

    message.guild.createRole({
      name: "77",
      color: "#e200ff",
      permissions: []
    });

    message.guild.createRole({
      name: "78",
      color: "#4d0037",
      permissions: []
    });

    message.guild.createRole({
      name: "79",
      color: "#660041",
      permissions: []
    });

    message.guild.createRole({
      name: "80",
      color: "#91005c",
      permissions: []
    });

    message.guild.createRole({
      name: "81",
      color: "#b4006a",
      permissions: []
    });

    message.guild.createRole({
      name: "82",
      color: "#ca0076",
      permissions: []
    });

    message.guild.createRole({
      name: "83",
      color: "#cc008e",
      permissions: []
    });

    message.guild.createRole({
      name: "84",
      color: "#d60089",
      permissions: []
    });

    message.guild.createRole({
      name: "85",
      color: "#e900a3",
      permissions: []
    });

    message.guild.createRole({
      name: "86",
      color: "#ff00b3",
      permissions: []
    });

    message.guild.createRole({
      name: "87",
      color: "#ff2dbe",
      permissions: []
    });

    message.guild.createRole({
      name: "88",
      color: "#ff73d4",
      permissions: []
    });

    message.channel.sendMessage({
      embed: new Discord.RichEmbed()
        .setColor("#502faf")
        .setAuthor(`${message.author.username}'`, message.author.avatarURL)
        .setDescription("``Colors Has Been Created ``" + "")
    });
  }
});

client.on("message", message => {
  if (message.content === prefix + "hide") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" **Must Be Have Permission**");
    message.channel
      .overwritePermissions(message.guild.id, {
        READ_MESSAGES: false
      })
      .then(() => {
        message.reply("**Hided Channel**");
      });
  }

  if (message.content === prefix + "show") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("**Must Be Have Permission**");
    message.channel
      .overwritePermissions(message.guild.id, {
        READ_MESSAGES: true
      })
      .then(() => {
        message.reply("**showed channel**");
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith("Fsay")) {
    message.delete();
    message.delete();
    message.delete();
    message.delete();
    message.delete();
    message.delete();
    message.delete();
    message.delete();

    let args = message.content.split(" ").slice(1);
    let ar = args.join(" ");

    message.channel.send(ar, { t: true });
  }
});
client.on("message", async message => {
  let args = message.content.split(" ");
  if (message.content.startsWith(prefix + "inv")) {
    let ew = new Discord.RichEmbed()
      .setDescription(
        "[Click Here](https://discord.com/api/oauth2/authorize?client_id=746448985035898970&permissions=8&scope=bot)"
      )
      .setFooter("رابط اضافه بوت في سيرفرك");
    message.channel.send(ew);
  }
});
  client.on("message", msg => {
if(msg.content.startsWith (prefix + "id")) {  
if(!msg.channel.guild) return msg.reply('**:x: هذا امر لسيرفرات **');         
const embed = new Discord.RichEmbed();
embed.addField(":ticket:  Name", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  ايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)  
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':video_game:   Playing', `**[ ${msg.author.presence.game === null ? "لا يلعب" : msg.author.presence.game.name} ]**`, true)
   .addField(':medal:  رتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
msg.channel.send({embed: embed})
}
});
const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith(prefix + 'Honestly')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});
client.on('message' , message => {
  if(message.author.bot) return;
 
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_( ألعب مع نفسك)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('يجب الانتضار حيث ما يتم الموافقه')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
     .then((new_new_message) => {
       require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
     })
     .then(console.log("Successful tictactoe listener initialization"))
     .catch(console.error);
   })
   .then(console.log("Successful tictactoe react initialization"))
   .catch(console.error);
 }
 else {
   message.reply(`منشن مع من تريد ألعب`)
   .then(console.log("Successful error reply"))
   .catch(console.error);
 }
}
});
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "setlog")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    let log = message.guild.channels.find("name", "log");
    if (log) return message.reply("**يوجد بالفعل روم اللوق**");
    if (!log) {
      message.guild.createChannel("log", "text").then(c => {
        c.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: false
        });
      });
      message.channel.send("**✅ ,تم انشاء روم اللوق بنجــاح**");
    }
  }
});
client.on("error", console.error);
 
client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
 
  var logChannel = message.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);
 
  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
 
  var logChannel = oldMessage.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  if (oldMessage.content.startsWith("https://")) return;
 
  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);
 
  logChannel.send(messageUpdate);
});
 
client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
 
  var logChannel = role.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);
 
    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
 
  var logChannel = role.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);
 
    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
 
  var logChannel = oldRole.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    if (oldRole.name !== newRole.name) {
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);
 
      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);
 
      logChannel.send(roleUpdateColor);
    }
    if (oldRole.permissions !== newRole.permissions) {
      let roleUpdate = new Discord.RichEmbed()
        .setTitle("**[UPDATE ROLE PERMISSIONS]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);
 
      logChannel.send(roleUpdate);
    }
  });
});
 
client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
 
  var logChannel = channel.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
 
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);
 
    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
 
  var logChannel = channel.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
 
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);
 
    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
 
  var logChannel = oldChannel.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }
 
  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);
 
      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);
 
      logChannel.send(newTopic);
    }
  });
});
 
client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
 
  var logChannel = guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    if (userID === client.user.id) return;
 
    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);
 
    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
 
  var logChannel = guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);
 
    logChannel.send(unBanInfo);
  });
});
client.on("guildMemberUpdate", (oldMember, newMember) => {
  var logChannel = oldMember.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;
 
    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "``اسمه الاصلي``";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "``اسمه الاصلي``";
      } else {
        var newNM = newMember.nickname;
      }
 
      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);
 
      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
 
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
 
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);
 
    logChannel.send(newOwner);
  }
});
client.on("guildMemberAdd", member => {
  var logChannel = member.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  let newMember = new Discord.RichEmbed()
    .setTitle("**[NEW MEMBER ADDED]**")
    .setThumbnail(member.user.avatarURL)
    .setColor("GREEN")
    .setDescription(
      `**\n**:arrow_lower_right: Joined **${
        member.user.username
      }** To the server!\n\n**User:** <@${member.user.id}> (ID: ${
        member.user.id
      })\n**Days In Discord:** ${Days(member.user.createdAt)}`
    )
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL);
 
  logChannel.send(newMember);
});
function Days(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
}
client.on("guildMemberRemove", member => {
  var logChannel = member.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  let leaveMember = new Discord.RichEmbed()
    .setTitle("**[LEAVE MEMBER]**")
    .setThumbnail(member.user.avatarURL)
    .setColor("GREEN")
    .setDescription(
      `**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`
    )
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL);
 
  logChannel.send(leaveMember);
});
 
client.on("voiceStateUpdate", (voiceOld, voiceNew) => {
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
 
  var logChannel = voiceOld.guild.channels.find(c => c.name === "log");
  if (!logChannel) return;
 
  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL;
 
    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.RichEmbed()
        .setTitle("**[VOICE MUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(serverMutev);
    }
 
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      let serverUnmutev = new Discord.RichEmbed()
        .setTitle("**[VOICE UNMUTE]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(serverUnmutev);
    }
 
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
      let serverDeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE DEAFEN]**")
        .setThumbnail(
          "https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png"
        )
        .setColor("RED")
        .setDescription(
          `**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(serverDeafv);
    }
 
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
      let serverUndeafv = new Discord.RichEmbed()
        .setTitle("**[VOICE UNDEAFEN]**")
        .setThumbnail(
          "https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png"
        )
        .setColor("GREEN")
        .setDescription(
          `**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(serverUndeafv);
    }
  });
 
  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    !voiceOld.voiceChannel
  ) {
    let voiceJoin = new Discord.RichEmbed()
      .setTitle("**[JOIN VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);
 
    logChannel.send(voiceJoin);
  }
 
  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    !voiceNew.voiceChannel
  ) {
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[LEAVE VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);
 
    logChannel.send(voiceLeave);
  }
 
  if (
    voiceOld.voiceChannelID !== voiceNew.voiceChannelID &&
    voiceNew.voiceChannel &&
    voiceOld.voiceChannel != null
  ) {
    let voiceLeave = new Discord.RichEmbed()
      .setTitle("**[CHANGED VOICE ROOM]**")
      .setColor("GREEN")
      .setThumbnail(voiceOld.user.avatarURL)
      .setDescription(
        `**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`
      )
      .setTimestamp()
      .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL);
 
    logChannel.send(voiceLeave);
  }
});

client.on("message", message => {
     const args = message.content.split(' ');
    let avt = `${message.author.avatarURL}`;
    let id1 = `https://images-ext-1.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif`
    if(message.guild.channel) return;
                 if (message.content === (prefix + 'user') || message.content === (prefix + "u")) {
const mention = message.mentions.users.first() || message.author;
            let embed = new Discord.RichEmbed() 
.addField(`**Username :**`,`\n ${mention.tag}`)

.addField('**User ID :**', `\n${mention.id}`)

.addField('**User Created At :**', `\n${moment(mention.createdTimestamp).format('YYYY/MM/DD HH:mm')}`) .addField('**User Joined At :**', `\n${moment(mention.joinedTimestamp).format('YYYY/MM/DD HH:mm')}`)

.setThumbnail(`${mention.avatarURL}` , ({format : "png" , dynamic : true , size : "1024"}))
.setFooter(`${mention.tag}`,`${id1}`)

message.channel.send(embed);
}
});



client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'فكك')) {
        let Time = 15000;
        let fkk = await db.fetch(`Games_${message.author.id}`);
        let f = ['دمار','تركي','كينج','جمال','كهربا',]
        let fk = ['د م ا ر', 'ت ر ك ي', 'ك ي ن ج', 'ج م ا ل', 'ك ه ر ب ا']
        let fkkk = Math.floor(Math.random() * f.length)
 
        let FkkEmbed = new Discord.MessageEmbed()
        .setAuthor(client.user.username,client.user.avatarURL())
        .setColor('RANDOM')
        .setDescription(`**\`${f[fkkk]}\`**`)
        .setTimestamp()
        .setFooter(client.user.username,client.user.avatarURL())
        message.channel.send(FkkEmbed).then(m => {
        m.delete({timeout: 15000})
        })
 
        let fkk2 = setTimeout(() => {
         message.channel.send(`**تم انتهاء الوقت حظ اوفر المرة القادمة**`);
        }, Time);
 
        const collected1 = new Discord.MessageCollector(message.channel, msg1 => msg1.author.id == message.author.id, {
            max: 1,
            time: Time,
            errors: ['time']
        });
 
        collected1.on('collect', me => {
            if(me.content == fk[fkkk]){
                message.channel.send(`**الف مبروك تم تفكيك الكلمة بنجاح**`).then(() => {
                    clearTimeout(fkk2);
                });
                db.add(`Games_${message.author.id}`, 1)
            } else {
                message.channel.send(`**للاسف تفكيك الكلمة خاطئ**`).then(() => {
                    clearTimeout(fkk2);
                });
            }
        });
 
    }
});
 
client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + 'points')) {
        let points = await db.fetch(`Games_${message.author.id}`);
        message.channel.send(`** ${message.author.username} | Points is \`[${points || 0}]\`**`)
    }
});
 
 
client.on("message", async message => {
    if(message.content.startsWith(prefix + 'top')) {
    let TopGames = db.fetchAll(`Games_${message.guild.id}_${message.author.id}`, { sort: 'data'})
    let content = "";
    for(let i = 0; i < TopGames.length; i++) {
    let user = client.users.cache.get(TopGames[i].ID.split('_')[1]).id
    content += `**#${i+1} | <@${user}> POINTS: \`${TopGames[i].data}\`**\n`
}
    const TopPoints = new Discord.MessageEmbed()
    .setAuthor('📋 Guild Score Leaderboards')
    .addField(`TOP POINTS`, content)
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(message.author.tag,message.author.avatarURL())
    message.channel.send(TopPoints)
    }
    });
 /////////////////////////////sssssssssssssssssssssssssssssssssss
const welcome = JSON.parse(fs.readFileSync("./welcomer.json", "utf8"));
client.on("message", async message => {
  let messageArray = message.content.split(" ");
  if (message.content.startsWith(prefix + "setLeave")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
 
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("You don't have permission").then(msg => {
        msg.delete(4500);
        message.delete(4500);
      });
 
    message.channel
      .send(":pencil: **| من فضلك اكتب الرساله الان... :pencil2: **")
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ["time"]
          })
          .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg
              .edit(":scroll: **| اكتب اسم الروم الان... :pencil2: **")
              .then(msg => {
                message.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit("✅ **| تم الاعداد بنجاح...  **").then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ["time"]
                      });
                      let embed = new Discord.RichEmbed()
                        .setTitle("**Done The Leave Msg Code Has Been Setup**")
                        .addField("Message:", `${thisMessage}`)
                        .addField("Channel:", `${boi}`)
                        .setThumbnail(message.author.avatarURL)
                        .setFooter(`${client.user.username}`);
                      message.channel.sendEmbed(embed);
                      welcome[message.guild.id] = {
                        leavechannel: boi,
                        leavemsg: thisMessage,
                        onoff: "On",
                        leave: "On"
                      };
                      fs.writeFile(
                        "./welcomer.json",
                        JSON.stringify(welcome),
                        err => {
                          if (err) console.error(err);
                        }
                      );
                    });
                  });
              });
          });
      });
  }
});
 
client.on("message", message => {
  if (!message.channel.guild) return;
 
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setWelcomer")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** <a:admins:650199479768711169>``MANAGE_GUILD``<a:admins:650199479768711169>"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom) return message.channel.send(" Cant Find This Channel");
    let embed = new Discord.RichEmbed()
      .setTitle("** Done The Welcome Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    welcome[message.guild.id] = {
      channel: room,
      onoff: "On",
      by: "On",
      dm: "Off",
      leave: "Off"
    };
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
      if (err) console.error(err);
    });
  }
});
 
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLeave")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        onoff: "Off",
        leave: "Off"
      };
    if (welcome[message.guild.id].leave === "Off")
      return [
        message.channel.send(`** The Leave Msg Is __𝐎𝐍__ !**`),
        (welcome[message.guild.id].leave = "On")
      ];
    if (welcome[message.guild.id].leave === "On")
      return [
        message.channel.send(`**The Leave Msg Is __𝐎𝐅𝐅__ ! **`),
        (welcome[message.guild.id].leave = "Off")
      ];
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleWelcome")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        onoff: "Off"
      };
    if (welcome[message.guild.id].onff === "Off")
      return [
        message.channel.send(`**The Welcome Is __𝐎𝐍__ ! **`),
        (welcome[message.guild.id].onoff = "On")
      ];
    if (welcome[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The Welcome Is __𝐎𝐅𝐅__ ! **`),
        (welcome[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
 
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleDmwelcome")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        dm: "Off"
      };
    if (welcome[message.guild.id].dm === "Off")
      return [
        message.channel.send(`**The Welcome Dm Is __𝐎𝐍__ !**`),
        (welcome[message.guild.id].dm = "On")
      ];
    if (welcome[message.guild.id].dm === "On")
      return [
        message.channel.send(`**The Welcome Dm Is __𝐎𝐅𝐅__ !**`),
        (welcome[message.guild.id].dm = "Off")
      ];
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
 
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleInvitedby")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        by: "On"
      };
    if (welcome[message.guild.id].by === "Off")
      return [
        message.channel.send(`** The Invited By Is __𝐎𝐍__ !**`),
        (welcome[message.guild.id].by = "On")
      ];
    if (welcome[message.guild.id].by === "On")
      return [
        message.channel.send(`**The Invited By Is __𝐎𝐅𝐅__ !**`),
        (welcome[message.guild.id].by = "Off")
      ];
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("guildMemberRemove", member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      onoff: "Off",
      leave: "Off"
    };
 
  if (welcome[member.guild.id].onoff === "Off") return;
  if (welcome[member.guild.id].leave === "Off") return;
  let welcomer = member.guild.channels.find(
    "name",
    `${welcome[member.guild.id].leavechannel}`
  );
  if (!welcomer) return;
  welcomer.send(`${member} ${welcome[member.guild.id].leavemsg}`);
});
 
client.on("guildMemberAdd", async member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      onoff: "On"
    };
  if (welcome[member.guild.id].onoff === "on") return;
  const Canvas = require("canvas");
  const jimp = require("jimp");
  const w = ["./1.png"];
  let Image = Canvas.Image,
    canvas = Canvas.createCanvas(400, 205),
    ctx = canvas.getContext("2d");
  ctx.patternQuality = "bilinear";
  ctx.filter = "bilinear";
  ctx.antialias = "subpixel";
  ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.stroke();
  ctx.beginPath();
 
  fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function(
    err,
    Background
  ) {
    if (err) return console.log(err);
    let BG = Canvas.Image;
    let ground = new Image();
    ground.src = Background;
    ctx.drawImage(ground, 0, 0, 400, 205);
  });
 
  let url = member.user.displayAvatarURL.endsWith(".webp")
    ? member.user.displayAvatarURL.slice(5, -20) + ".png"
    : member.user.displayAvatarURL;
  jimp.read(url, (err, ava) => {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
      if (err) return console.log(err);
 
      ctx.font = "17px Arial";
      ctx.fontSize = "72px";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(member.user.username, 260, 145);
 
      ctx.font = "8px Arial Bold";
      ctx.fontSize = "72px";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(`Your The Member ${member.guild.memberCount}`, 250, 155);
 
      let Avatar = Canvas.Image;
      let ava = new Avatar();
      ava.src = buf;
      ctx.beginPath();
      ctx.arc(130, 92, 71, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(ava, 60, 22, 145, 145);
      let c = member.guild.channels.find(
        "name",
        `${welcome[member.guild.id].channel}`
      );
      if (!c) return;
      c.sendFile(canvas.toBuffer());
      c.send(`** ₩ҽɩ¢ổϻè 𝒯𝒪 𝒮ℰℛ𝒱ℰℛ ** **${member.guild.name}**`);
      c.send("**  User : **" + `${member}` + "..");
      fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
        if (err)
          console.error(err).catch(err => {
            console.error(err);
          });
      });
    });
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var top = require("./top.json");
function save() {
    fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
    if (newMember.user.bot) return;
    if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
    if (!top[newMember.guild.id][newMember.user.id]) top[newMember.guild.id][newMember.user.id] = {
        "text": 0,
        "voice": parseInt(Math.random()*10),
        "msgs": 0,
        "id": newMember.user.id
    }
    save();
    if (!oldMember.voiceChannel && newMember.voiceChannel) {
        var addXP = setInterval(async function () {
            top[newMember.guild.id][newMember.user.id].voice+=parseInt(Math.random()*4);
            save();
            if (!newMember.voiceChannel) {
                clearInterval(addXP);
            }
        }, 60000);
    }
});
client.on("message", async function (message) {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!top[message.guild.id]) top[message.guild.id] = {};
    if (!top[message.guild.id][message.author.id]) top[message.guild.id][message.author.id] = {
        "text": parseInt(Math.random()*10),
        "voice": 1,
        "msgs": 0,
        "id": message.author.id
    }
    if (top[message.guild.id][message.author.id].msgs > 10) {
        top[message.guild.id][message.author.id].text += parseInt(Math.random()*4);
        top[message.guild.id][message.author.id].msgs = 0;
    }
    save();
    var args = message.content.split(" ");
    var cmd = args[0].toLowerCase();
    if (!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "top text")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
  .setColor("13B813")
        .addField(`**:speech_balloon: | TEXT LEADERBOARD**`, `${textStr}   \n\n\n **? | For More: \`${prefix}top text\`**`, true)  
        .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()
            message.channel.send({
                embed: embed
            });
     //   if (!message.content.startsWith(prefix)) return;
  } else {
    if(message.content.startsWith(prefix + "top voice")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
  .setColor("13B813")
        .addField(`**:microphone2: | VOICE LEADERBOARD**`, `${voiceStr}   \n\n\n **:sparkles: More?** \`${prefix}top voice\``, true)
  
        .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()  
            message.channel.send({
                embed: embed
            });
      
 
     //  break;
       // if (!message.content.startsWith(prefix)) return;
  } else {
       if(message.content.startsWith(prefix + "top")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
                }
            }).join("\n")}`;
            num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()  
            .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
            .addField("**TOP 5 TEXT :speech_balloon:**", `${textStr}  \n\n  **:sparkles: More?** \`${prefix}top text\``, true)
            .addField("**TOP 5 VOICE :microphone2:**", `${voiceStr} \n\n **:sparkles: More?** \`${prefix}top voice\``, true)
            .setFooter(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()
            .setColor("13B813");
            message.channel.send({
                embed: embed
            
  
            });
 
      
       
        }
  }
  }
  
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.channel.guild) return message.reply(" ");
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("**🆔 Server ID:**", message.guild.id, true)
      .addField(
        "**📅 Created On**",
        message.guild.createdAt.toLocaleString(),
        true
      )
      .addField(
        "**👑 Owned by**",
        `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`
      )
      .addField("**👥 Members**", `[${message.guild.memberCount}]`, true)
      .addField(
        "**💬 Channels **",
        `**${message.guild.channels.filter(m => m.type === "text").size}**` +
          " text | Voice  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField("**🌍 Others **", message.guild.region, true)
      .addField(
        "**🔐 Roles **",
        `**[${message.guild.roles.size}]** Role `,
        true
      )
      .setColor("#000000");
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => { 
 
  if(message.author.bot) return;
 
  if(!message.content.startsWith(prefix)) return; //ExtremeBot
 
  if(!message.guild) return; 
  if(message.content === (prefix + "roles")) {
   
  let i = 0;
    let U = 1;
    let str = "";
    const roles = message.guild.roles.forEach(role => `${i++} ${str += `${U++} - ` + role.name + "\n"}`)
   
   let embed = new Discord.RichEmbed()
   .setColor("BLACK")
   .setAuthor(`Found ${i} roles this server`) //Mhmd
.setDescription(`${str}`)
   .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setTimestamp();
  message.channel.send(embed)
   
   
  }
  })

const https = require("https");
function short(url, cb) {
    https.get(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(url)}`, (res) => {
        var body = '';
        res.on('data', (chunk)=> body += chunk);
        res.on('end', ()=> cb(body));
    });
}

short('http://google.com', (res)=> {
    console.log(res); // http://google.com => https://is.gd/OwycZW
});
client.on('message', async message => {
    if(message.author.bot) return undefined;
    let args = message.content.split(" ");//Dmar
    if(args[0].toLowerCase() == prefix + 'blacklist'){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**Your Don't Have Permission [\`MANAGE_MESSAGES\`]**`);//Dmar
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);//Dmar
        let Blacklist = await db.fetch(`Blacklist_${user.id}`);//Dmar
        if(Blacklist === null) Blacklist = 'off';//Dmar
    if(!user) return message.channel.send(`**Usage: ${prefix}blacklist \`<Mention/ID>\`**`);//Dmar
    message.channel.send(`**Done Has Been Give User Blacklist**`);//Dmar
    db.set(`Blacklist_${user.id}`, "on");//Dmar
    }//Dmar
});//Dmar
 
client.on('message', async message => {
    if(message.author.bot) return undefined;
    let args = message.content.split(" "); //Dmar
    if(args[0].toLowerCase() == prefix + 'unblacklist'){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**Your Don't Have Permission [\`MANAGE_MESSAGES\`]**`);//Dmar
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);//Dmar
        let Blacklist = await db.fetch(`Blacklist_${user.id}`);//Dmar
        if(Blacklist === null) Blacklist = 'off';//Dmar
    if(!user) return message.channel.send(`**Usage: ${prefix}unblacklist \`<Mention/ID>\`**`);//Dmar
    message.channel.send(`**Done Has Been Give User UnBlacklist**`);//Dmar
    db.set(`Blacklist_${user.id}`, "off");//Dmar
       
    }//Dmar
});//Dmar
 
/* كود للتجربة الامر شغال ولا لا 
 
عشان تخلي احد ما يقدر يستخدم الامر ضيف هاد اول الكود
let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
if(Blacklist === 'on') return message.channel.send(`**Sorry, Your Blacklisted Now Please Contact Admin Server To Check You**`);
 
تم صنع الكود بواسطة دمار مي كودز
*/


client.on("message", message =>{
if(message.author.bot) return;
if(message.content.startsWith(prefix + "avatar")){
let user = message.mentions.users.first() || message.author
let embed = new Discord.MessageEmbed()
.setTitle("Avatar Link")
.setURL(`user.avatarURL({dynamic:true})`)
.setImage(user.avatarURL({dynamic:true}))
.setFooter(`Requested By: ${message.author.tag}`)
return message.channel.send(embed)
} else {
if(message.content === prefix + "avatar server"){
    let dxx = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL())
    .setImage(message.guild.iconURL({dynamic:true, size:1024}))
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
    message.channel.send(dxx)
}}});

client.on("message", message=>{
    if(message.author.bot) return;
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix+"botinfo")) {
        let uptime = client.uptime;
 
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        let notCompleted = true;
    
        while (notCompleted) {
    
            if (uptime >= 8.64e+7) {
    
                days++;
                uptime -= 8.64e+7;
    
            } else if (uptime >= 3.6e+6) {
    
                hours++;
                uptime -= 3.6e+6;
    
            } else if (uptime >= 60000) {
    
                minutes++;
                uptime -= 60000;
    
            } else if (uptime >= 1000) {
                seconds++;
                uptime -= 1000;
    
            }
    
            if (uptime < 1000)  notCompleted = false;
    
        }
        var ping = `${Date.now() - message.createdTimestamp}`
        var api = `${Math.round(client.ping)}`
        let ramUsage = (process.memoryUsage().rss / 1048576).toFixed();
 
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL)
    .setAuthor(client.user.tag, client.user.avatarURL)
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTitle("**TurboBot Information:**")
    .setDescription("- **Bot Name** :`" + `${client.user.tag}` + "`\n" +  "- **Bot ID** :`" + `${client.user.id}` + "`\n" + 
    "- **Bot Prefix** :`" + `${prefix}` + "`\n" + "- **Ping** :`" + `${ping}` + "`\n" + "- **Uptime** :`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`\n" + 
    "- **Creator** :`" + `! Baro𝐍#5969` + "`\n" + "\n" + "```md\n[Servers](Information)```" + "\n" + "- **Guilds** :`" + `${client.guilds.size}` + "`\n" + 
    "- **Members** :`" + `${client.users.size}` + "`\n" + "- **Channels** :`" + `${client.channels.size}` + "`\n" + 
    "\n" + "```tex\n$ Developer Information```" + "\n" + "- **NodeJs** :`" + `${process.version}` + "`\n" + "- **DiscordJs** :`" + `${Discord.version}` + "`\n" + 
    "- **Arch** :`" + `${process.arch}` + "`\n" + "- **Platform** :`" + `${process.platform}` + "`\n" + "\n" + "```cs\n# Host Information```" + "\n" + 
    "- **UseHeap** :`" + `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB` + "`\n" + 
    "- **Heap** :`" + `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100} MB` + "`\n" + 
    "- **Ram** :`" + `${ramUsage} MB` + "`\n" + "- **Rss** :`" + `${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100} MB` + "`\n")
 
 
 
    message.channel.send(embed)
 
 
    
    }
    });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
  var args = message.content.split(" ");
  var command = args[0];
  var num = args[1];
  var tax = 5.2; //غير قيمة الضريبة من هنا
  if (command == prefix + "tax") {
    let nume = new Discord.RichEmbed()
      .setColor('RED')
      .setDescription(command + " <number>");
    if (!num) {
      return message.channel.send(nume);
    }
    var numerr = Math.floor(num);
    if (numerr < 0 || numerr == NaN || !numerr) {
      return message.reply("**The value must be correct.**");
    }
    var taxval = Math.floor(numerr * (tax / 100));
    var amount = Math.floor(numerr - taxval);
    var amountfinal = Math.floor(numerr + taxval);
    let taxemb = new Discord.RichEmbed()
      .setTitle("[TAX]")
      .setColor('RED')
      .setThumbnail(client.user.displayAvatarURL)
      .setDescription(`Principal amount: **${numerr}**\nTax: **${tax}%**\nTax amount: **${taxval}**\nAmount with tax: **${amount}**\nAmount to be paid: **${amountfinal}**`)
      .setTimestamp()
      .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL);
    message.channel.send(taxemb);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("``Use : " + prefix + "move @User``");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(
              `✅ You Have Moved <@${usermentioned}> To Your Channel `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name} `)
            .setColor("RANDOM")
            .setTitle(`✽ **Premium**`)

            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "`You Cant Move" +
              message.mentions.members.first() +
              " `The User Should Be In channel To Move It`"
          );
        }
      } else {
        message.channel.send(
          "**``You Should Be In Room Voice To Move SomeOne``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.split(" ")[0] === prefix + "avt") {
    if (message.author.bot || message.channel.type == "dm") return;
    var args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    client
      .fetchUser(avt)
      .then(user => {
        avt = user;
        let avtEmbed = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
          .setImage(avt.avatarURL)
          .setFooter(`Avatar`, message.client.user.avatarURL);
        message.channel.send(avtEmbed);
      })
      .catch(() => message.channel.send(`حط ايدي الي تبي افتار حقه`));
  } // Julian
}); // Codes - Toxic Codes
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.split(" ")[0] == prefix + "color") {
    const embedd = new Discord.RichEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**There's No Color With This Number ** :x: `)
      .setColor(`ff0000`);
    if (!args[0]) return message.channel.sendEmbed(embedd);
    if (isNaN(args[0]))
      return message.channel.sendEmbed(
        embedd.setDescription("Please select a number :x:")
      );
    if (!message.guild.roles.find("name", `${args[0]}`))
      return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args[0]}`);
    if (!a) return;
    if (a.hasPermission(8))
      return message.channel.send(
        embedd.setDescription("This color has administrator!")
      );
    const embed = new Discord.RichEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**Color Changed To Successfully** :white_check_mark: `)

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args[0]) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args[0]}`));
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (!message.guild || message.author.bot) return;
  if (message.content == prefix + "colors") {
    var fsn = require("fs-nextra");
    fs.readdir("./colors", async (err, files) => {
      var f = files[Math.floor(Math.random() * files.length)];
      var { Canvas } = require("canvas-constructor");
      var x = 0;
      var y = 0;
      if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0)
        return;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(() => {
          x += 100;
          if (x > 100 * 12) {
            x = 100;
            y += 80;
          }
        });
      var image = await fsn.readFile(`./colors/${f}`);
      var xd = new Canvas(100 * 11, y + 350)
        .addBeveledImage(image, 0, 0, 100 * 11, y + 350, 100)
        .setTextBaseline("middle")
        .setColor("white")
        .setTextSize(60)
        .addText(`قائمة الألوان`, 375, 40);
      x = 0;
      y = 150;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(role => {
          x += 75;
          if (x > 100 * 10) {
            x = 75;
            y += 80;
          }
          xd.setTextBaseline("middle")
            .setTextAlign("center")
            .setColor(role.hexColor)
            .addBeveledRect(x, y, 60, 60, 15)
            .setColor("white");
          if (`${role.name}`.length > 2) {
            xd.setTextSize(30);
          } else if (`${role.name}`.length > 1) {
            xd.setTextSize(40);
          } else {
            xd.setTextSize(50);
          }
          xd.addText(role.name, x + 30, y + 30);
        });
      message.channel.sendFile(xd.toBuffer());
    });
  }
});

////////////
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "Fcolors") {
    message.channel.send("https://cdn.discordapp.com/attachments/752060081972969602/752070270248026302/file.jpg");
    message.channel.sendFile("");
  }
});




client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "22222222222222222222222222222222222222خط") {
  let args = message.content.split(" ").slice(1);
    message.channel.send("https://media.discordapp.net/attachments/752160544114606082/752194205907943554/ezgif-4-71099adc62da.gif");
    message.channel.sendFile("");
 message.delete();
  }
});

 client.on('guildMemberAdd', member=> {
member.addRole(member.guild.roles.find("name","اسم الرتبه"));
});


client.on("message", message => {
  if (message.channel.type == "dm") {
  
  let embed = new Discord.RichEmbed()
  .setTitle("!New Message")
  .setThumbnail(message.author.avatarURL)
  .setDescription(`
**By : \n\`${message.author.tag}\`
ID : \n\`${message.author.id}\`
Message : \n\`${message.content}\`**`)
 .setTimestamp()
  client.channels.get('753695822163476591').send(embed)
    
}});

client.on("message", message => { if (message.content.startsWith(prefix + "test")) { message.channel.send("**البوت شغال تمام ✅**"); }});

client.on("ready", () => {
let BotOnline = client.channels.get("753695822163476591");// ايدي الروم
  
  let online = new Discord.RichEmbed()
    .setTitle('تحديث البوت')
    .setColor("GREEN")
   .addField('Guilds Info', `حسابات: **${client.users.size}** \nرومات: **${client.channels.size}** \nسيرفرات البوت **${client.guilds.size}** `)
   .addField('بعظ معلومات البوت', `Platform: **${process.platform}** \nArch **${process.arch}** \nاصدار الجافا **${process.version}** \nPrefix **${prefix}**`) // process.platform
    .setTimestamp();
  BotOnline.send(online);

});

client.on ("message" , message => {
  if(message.content === prefix + "bots"){
  const embed = new Discord.RichEmbed()
  .setTitle(" عدد سيرفرات البوت هي ")
  .setDescription(`im in [${client.guilds.size}] servers`)
  .setColor("RANDOM")
  message.channel.send(embed)
  }
});


client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.cache.find (r => r.name == "▸│ترحيب");
    let memberavatar = member.user.avatarURL
         if (!channel) return;
         let embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setThumbnail(memberavatar)
        .addField('name :  ',`${member}`)
        .addField('نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField('ID :', "**[" + `${member.id}` + "]**" )
        .addField('Member',`${member.guild.memberCount}`)
        .addField(' Server ', `${member.guild.name}`,true)
        .setFooter(`${member.guild.name}`)
        .setTimestamp()
        channel.send(embed);
  
  
  
  
  
});
client.on('message', msg => {
 if(!msg.channel.guild) return;
        let user = msg.guild.member (msg.mentions.members.first() || msg.author);
 if (msg.content.startsWith(prefix + 'myrole')) {
    const mox = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setColor('#0099ff')
.setTitle ('User Roles information')
.addField ("Roles: ", user.roles.filter (r => r.name !== "@everyone").map (m =>"<@&" +m.id+">").join("\n"), true)
msg.channel.send(mox)
  }
});




 client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


  if (command == "embed") {
    if (!message.channel.guild)
      return message.channel
        .send("هذا الأمر فقط للسيرفرات")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("للأسف لا تمتلك صلاحية MANAGE_MESSAGES");
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(0x23b2d6);
    message.channel.sendEmbed(say);
    message.delete();
  }
});



client.on("message", async message => {
  let args = message.content.split(" ");
      const ms = new Date().getTime() - message.member.joinedAt.getTime();
  var seconds = parseInt((ms/1000)%60)
    , minutes = parseInt((ms/(1000*60))%60)
    , hours = parseInt((ms/(1000*60*60))%24);
  const now = new Date(); 
  const joinedAt = ms / 1000 / 60 / 60 / 24; 
  if (args[0] === prefix + "since") {
    let embed = new Discord.RichEmbed()
    .setTitle(message.author.username)
    .addField("> Since:", `
⏲️ ${joinedAt.toFixed(0)} days ,
 ${hours} Hours ,
 ${minutes} Minutes ,
 ${seconds} seconds ⏲️`)
    .setTimestamp()
    .setThumbnail(message.author.avatarURL);
message.channel.send(embed)
  }
});


client.on('message', message => {
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis')
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(List)
            .setFooter(message.guild.name)
        message.channel.send(EmojiList)
    }
});

