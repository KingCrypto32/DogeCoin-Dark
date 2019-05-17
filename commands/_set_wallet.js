/*CMD
  command: /set_wallet
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please Send You're DogeCoin Address. 
  keyboard: 
  aliases: set address 💳
CMD*/

User.setProperty("address", data.message, "text");
Bot.sendMessage("You're Address Is Set, When You Withdraw we will send it to the address You set")
