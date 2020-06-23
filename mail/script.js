var listaMail = ["ciao@gmail.com", "prova@gmail.com", "funziona@gmai.com", 12, 24, 36];
var mail = prompt("Scrivi la tua mail");
var mailTrovata = false;

for (var i = 0; i < listaMail.length; i++)  {
  var currentMail = listaMail[i];
  if (mail == currentMail){
    mailTrovata = true;
  }
}


 if (mailTrovata == true) {
    console.log("mail trovata");
 }
 else if (mailTrovata == false) {
  console.log("mail NON trovata");
 }
