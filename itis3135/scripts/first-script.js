let today = new Date()
let userName = prompt("What is your name?");
let userFeeling = prompt("How are you doing?");
let todayDate = today.getDate();
let todayTime = today.getTime();
document.write("Today is ");
document.write(todayDate);
document.write(", and the time is: ");
document.write(todayTime);
document.write(". The Careless Fox welcomes you, ");
document.write(userName);
document.write("! We're gladd you are doing ");
document.write(userFeeling);
document.write("!");