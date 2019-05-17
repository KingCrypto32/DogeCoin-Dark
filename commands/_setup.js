/*CMD
  command: /setup

  <<HELP

  HELP
  need_reply: 
  auto_retry_time: 
  answer: Keys setupped
  keyboard: 
  aliases: 
CMD*/

// Get your keys in https://www.coinpayments.net/index.php?cmd=acct_api_keys
Libs.CoinPayments.setPrivateKey("5641fEe395f0467C69Caa3AB540e85320CD2aA9683C13eE0FCd8B68D961F7dec");
Libs.CoinPayments.setPublicKey('6cf64264100b28202e11e297e7fb9574260841466454e6a214559400abf46c26');

// Get your BB Api Key from Bots.Business App in Profile
Libs.CoinPayments.setBBApiKey('OFNpTneB8YPYhU_7bsxFJH71zsZvtl7zm5Zxl4Vi');
