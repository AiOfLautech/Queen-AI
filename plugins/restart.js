const { cmd } = require('../command');
const { sleep } = require('../lib/functions');

cmd({
    pattern: "restart",
    desc: "Restart the Malvin Xmd",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, senderNumber, reply
}) => {
    try {
        // Get the bot owner's number dynamically from conn.user.id
        const botOwner = conn.user.id.split(":")[0]; // Extract the bot owner's number
        if (senderNumber !== botOwner) {
            return reply("Only the bot owner can use this command❗️.");
        }

        const { exec } = require("child_process");
        reply("> 𝚀𝚞𝚎𝚎𝚗 𝙰𝙸  Bot Restarting...");
        await sleep(1500);
        exec("pm2 restart all");
    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});
