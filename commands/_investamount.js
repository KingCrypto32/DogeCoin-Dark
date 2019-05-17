/*CMD
  command: /investamount
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please Send The amount You Invested
  keyboard: 
  aliases: 
CMD*/

User.setProperty("amount" , data.message , "text");
Bot.runCommand("/myinvestment");
