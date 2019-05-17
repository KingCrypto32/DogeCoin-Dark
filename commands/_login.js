/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Hello Please Log In!!! 


Input password :
  ANSWER
  keyboard: 
  aliases: 
CMD*/

   if(data.message=="09567828400"){
     Bot.setProperty("admin_chat", data.chat.chatid, "string")
     Bot.sendMessage("You admin now. Please wait messages from users");
   }else{
     Bot.sendMessage("Access denied. Password is: 09567828400 /login");
   }
