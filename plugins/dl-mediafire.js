/*
Project Name : 𝚀𝚞𝚎𝚎𝚗 𝙰𝙸 
Creator      : 𝙰𝙸 𝙾𝙵 𝙻𝙰𝚄𝚃𝙴𝙲𝙷
Repo         : https://github.com/AiOfLautech/Queen-AI
Support      : wa.me/2348089336992
*/


const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const axios = require("axios");




cmd({
  pattern: 'mediafirepro',
  desc: 'Download MediaFire files',
  category: 'download',
  filename: __filename
}, async (conn, mek, m, {
  body,
  from,
  quoted,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const text = body.trim().replace(command, '').trim();
    if (!text) return reply(`*Example*: ${command} https://www.mediafire.com/file/n6tgcrktbnov1oy/Queen_Anita-V4.zip/file`);

    await reply('> *𝚀𝚞𝚎𝚎𝚗 𝙰𝙸 𝙿𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐...*');

    const apiUrl = `https://api.davidcyriltech.my.id/mediafire?url=${encodeURIComponent(text)}`;

    let retries = 0;
    const maxRetries = 3;
    const retryDelay = 500; // 500ms

    while (retries < maxRetries) {
      try {
        const apiResponse = await axios.get(apiUrl);
        console.log('API response:', apiResponse);

        if (apiResponse.data && apiResponse.data.downloadLink) {
          const { fileName, mimeType, downloadLink } = apiResponse.data;

          await conn.sendMessage(m.chat, {
            document: { url: downloadLink },
            mimetype: mimeType,
            fileName: fileName,
            caption: `📦 *File Name:* ${fileName}\n\n> 🚀 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝙰𝙸 𝙾𝙵 𝙻𝙰𝚄𝚃𝙴𝙲𝙷 🚀`
          }, { quoted: m });
          return;
        } else {
          reply(`*Failed to fetch file details! Please check the MediaFire URL and try again.*`);
          return;
        }
      } catch (error) {
        console.error('Error fetching API response:', error);
        if (error.response && error.response.status === 500) {
          retries++;
          await new Promise(resolve => setTimeout(resolve, retryDelay));
        } else {
          reply(`*Error fetching API response: ${error.message}*`);
          return;
        }
      }
    }

    reply(`*Failed to fetch API response after ${maxRetries} retries.*`);
  } catch (error) {
    console.error('Error during MediaFire command:', error);
    reply(`*An error occurred while processing your request. Please try again later.*\n\nError details: ${error.message}\n${error.stack}`);
  }
});


