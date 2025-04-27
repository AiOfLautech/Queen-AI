const {cmd , commands} = require('../command')

cmd({
    pattern: "support",
    desc: "support bot",
    category: "main",
    react: "💖",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*Hello there ${pushname} 𝚀𝚞𝚎𝚎𝚗 𝙰𝙸  User! 👋🏻* 

*Thanks for using my bot* 

> Don't forget to fork the repo ⤵️

👨‍💻-: https://github.com/AiOfLautech/Queen-AI

> *©𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝙰𝙸 𝙾𝙵 𝙻𝙰𝚄𝚃𝙴𝙲𝙷*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/0sm1h3.mp4`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
