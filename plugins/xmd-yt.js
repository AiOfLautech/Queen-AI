const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "playt",
    desc: "download songs",
    category: "download",
    react: "🎵",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please Enter Link or Query 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `
╭─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅╮
 *𝚀𝚞𝚎𝚎𝚗 𝙰𝙸  sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
╰─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅╯

➥ *ᴛɪᴛʟᴇ:* ${data.title} 

➥ *ᴅᴜʀᴀᴛɪᴏɴ:* ${data.timestamp} 

➥ *ᴠɪᴇᴡs:* ${data.views} 

➥ *ᴜᴘʟᴏᴀᴅᴇᴅ ᴏɴ:* ${data.ago} 

➥ *ʟɪɴᴋ:* ${data.url} 

╰─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅⪼
 


> © 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝙰𝙸 𝙾𝙵 𝙻𝙰𝚄𝚃𝙴𝙲𝙷
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)  
let downloadUrl = down.dl_url

//send audio
await conn.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"©𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝙰𝙸 𝙾𝙵 𝙻𝙰𝚄𝚃𝙴𝙲𝙷"},{quoted:mek})
}catch(e){
reply(`${e}`)
}
})

//===========video-dl===========

cmd({
    pattern: "videot",
    desc: "download video",
    category: "download",
    react: "🎥",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please Enter Link or Query 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let des = `
╭─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅╮
 *𝚀𝚞𝚎𝚎𝚗 𝙰𝙸 ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
╰─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅╯

➥ *ᴛɪᴛʟᴇ:* ${data.title} 

➥ *ᴅᴜʀᴀᴛɪᴏɴ:* ${data.timestamp} 

➥ *ᴠɪᴇᴡs:* ${data.views} 

➥ *ᴜᴘʟᴏᴀᴅᴇᴅ ᴏɴ:* ${data.ago} 

➥ *ʟɪɴᴋ:* ${data.url} 

╰─┈┄┄┉┉┉┅┅┅┅──┅┅┅┅┅┅⪼
 

> © 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝙰𝙸 𝙾𝙵 𝙻𝙰𝚄𝚃𝙴𝙲𝙷
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:des},{quoted:mek});

//download video

let down = await fg.ytv(url)  
let downloadUrl = down.dl_url

//send video
await conn.sendMessage(from,{video:{url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"©𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝙰𝙸 𝙾𝙵 𝙻𝙰𝚄𝚃𝙴𝙲𝙷"},{quoted:mek})
    
}catch(a){
reply(`${a}`)
}
})
