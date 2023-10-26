/*
WHATSAPP BOT BY syam_ser
WHATSAPP - 919947121619
SUPPORT GROUP - https://i.imgur.com/TrJHlgs.png
YOUTUBE - Nill
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = '' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = ''

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94767438882'

global.OWNER_NAME = ' 𝑺𝒀𝑨𝑴_𝑺𝑬𝑹😚♥️'

global.TIMEZONE = 'Asia/India' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𝑀𝑅_𝐶𝑌𝐵𝐸𝑅 𝑃𝑆𝑌𝐶𝐻𝑂🤖♻️'

global.FOOTER = 'syam_ser 2023'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@𝑩𝒀 𝑺𝒀𝑨𝑴_𝑺𝑬𝑹 🤹‍♂🎭' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = '𝑀𝑅_𝐶𝑌𝐵𝐸𝑅 𝑃𝑆𝑌𝐶𝐻𝑂🤖♻️ © 2023' // Caption

global.ALIVELOGO = 'https://i.imgur.com/TrJHlgs.png' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'EDA MOWNUU IKKACHI JEEVANODE IND😌🤌🏻' // Set Alive Message

global.MAX_SIZE = '1028' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/Hukf6IqR91SJFigljMVmMK' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: Nill" //ur yt chanel name
global.socialm = "Instagram: _mr.fro_ud_" //ur github or insta name
global.location = "India,Kerala,palakkad" //ur location
