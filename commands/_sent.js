/*CMD
  command: /sent
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please Send The BlockChain
  keyboard: 
  aliases: sent 📤
CMD*/

User.setProperty("blockchain" , data.message , "text");
Bot.runCommand("/investamount");
