const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347042952332";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_42_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDU4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgODMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDcyLFxuICAgICAgICA3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NixcbiAgICAgICAgMjE5LFxuICAgICAgICA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDgzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc3LFxuICAgICAgICA0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDc4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDM5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMyLFxuICAgICAgICA3MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgODksXG4gICAgICAgIDM1LFxuICAgICAgICA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNoMTFKU3RDSTdpZ1ViVEV1NStiOGxPRWRqczVQT1JwVVlLTXpUcndrc2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVkMjZGOVlzUl9TX1hsWFkwVlZaaHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTA0ZGY0MGItMzgyNC00OGEwLWIzNDAtN2Y3ZjQxYTllNTA4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgODQsXG4gICAgICAyMTgsXG4gICAgICA3LFxuICAgICAgNzEsXG4gICAgICAyMzgsXG4gICAgICAxODksXG4gICAgICAxNTIsXG4gICAgICAxMzYsXG4gICAgICA0NyxcbiAgICAgIDE0MyxcbiAgICAgIDEwNSxcbiAgICAgIDkxLFxuICAgICAgMTM0LFxuICAgICAgNzAsXG4gICAgICAxNCxcbiAgICAgIDI0NyxcbiAgICAgIDU0LFxuICAgICAgNjEsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAxMzEsXG4gICAgICAyMDIsXG4gICAgICAyMDQsXG4gICAgICAxNTMsXG4gICAgICAxMyxcbiAgICAgIDEyMixcbiAgICAgIDc5LFxuICAgICAgMjgsXG4gICAgICA3NixcbiAgICAgIDk0LFxuICAgICAgNTQsXG4gICAgICAxMDIsXG4gICAgICAwLFxuICAgICAgMjI0LFxuICAgICAgMTQ3LFxuICAgICAgMTEzLFxuICAgICAgMjQxLFxuICAgICAgMjEyLFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQxREhaQUNCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQyOTUyMzMyOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzOTA1Nzg3OTc3NzUzOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2lwbHEwREVKQ0QyYklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4NWcyM29laGlMaVhSWEJQbWJWNnhaVXBjYU4vQzJZZElpNHViOXg3L0hrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRNcUdGaHh2V3VUOXIxbnZlZE1uVHBjcW1rK080aWpMaThFa0VoUnRkRktJczFWRXVLZFI0ZURYOHROcXk5VFhnMll0UXBhdis4VUJHWVJUWnpjSkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZ0eVAwc2tXVFdLYUZWaWVWMG56cEdyNTBweWduWTVyWlAyV3lSdHJFbk14VVBDYkxjK1VIWGRIelNzelNwbDVSRW9HWW54bjA2czZUelQxYVhZSEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDI5NTIzMzI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjkyODkxNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
