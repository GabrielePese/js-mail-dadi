
document.getElementById("btn").addEventListener("click", function (){


  for (var i = 0; i < 3; i++) {

    var computer = Math.floor(Math.random ()*6 +1);
    var giocatore = Math.floor(Math.random ()*6 +1);
  if (computer > giocatore) {
    console.log( "Ha vinto il computer"
)}
  else if (giocatore > computer) {
    console.log( "Ha vinto il giocatore"

)}
  else {
    console.log("Avete pareggiato")};

}
});
