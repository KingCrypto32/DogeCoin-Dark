/*CMD
  command: /refferal
  help: 
  need_reply: 
  auto_retry_time: 
  answer: Share You're Referral Link 🔗🔗🔗
  keyboard: My Team 👨‍👩‍👧‍👦 , \n Back 🔙
  aliases: referral 📨
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("DogeCoinDarkEight_Bot");
Bot.sendMessage(parther_link);
