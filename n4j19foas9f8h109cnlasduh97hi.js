var pass = prompt("Введи пароль:", "");
if (pass == null)  window.location = "wrong.html";
else if (pass.toLowerCase() == "dont")  
      window.location = "welcome.html";
else  window.location = "wrong.html";
