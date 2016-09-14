/*
  Caldo o freddo
  Scrivi un programma che simuli una partita al gico Carta, forbici, sasso, lizard e Spock, se non lo conosci ecco una spiegazione del gioco:
  
    "Le Forbici tagliano la Carta, la Carta avvolge il Sasso, il Sasso uccide Lizard, Lizard avvelena Spock,
    Spock rompe le Forbici, Le Forbici decapitano Lizard, Lizard mangia la Carta, la Carta invalida Spock,
    Spock vaporizza il Sasso e come è sempre stato il Sasso batte le forbici."

  Impletamenta il tuo codeice all'interno della funzione game.

  Il programma deve stampare nella console un messaggio contenente l'esito della partita, uno verrà stampato in caso di pareggio e l'altro
  nel caso di vittoria di un giocatore.
  http://www.imparareaprogrammare.it
*/

var choices = ['carta','forbici','sasso','lizard','spock'];
var player1 = choices[0];
var player2 = choices[getRandomIntInclusive(0,4)];

function game(p1, p2) {

  // Implementa qui il tuo codice

  // Messaggio di pareggio 'Pareggio, entrambi i giocatori hanno scelto carta';
  // Messaggio di fine partita: 'Il giocatore 1 ha vinto, carta batte lizard!'
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(game(player1,player2));
