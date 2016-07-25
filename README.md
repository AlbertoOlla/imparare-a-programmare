![imparare a programmare](https://github.com/AlbertoOlla/imparare-a-programmare/raw/master/imparare-a-programmare.png)

# Esercizi pratici per imparare a programmare in Javascript

Gli esercizi visti durante le normali lezioni del Corso Javascript ci danno più una conoscenza teorica dell'argomento ma anche tanti spunti interessanti.
Ho deciso di inserire degli esercizi bonus per cercare di approfondire al meglio gli argomenti più importanti, inoltre risolvere questi problemi reali ti aiuterà tantissimo ad [imparare a programmare](http://www.imparareaprogrammare.it) al meglio!

puoi scaricarli per metterti alla prova, alcuni sono semplici e li risolverai in un attimo ma altri invece sono più complessi ed impiegherai più tempo, è perfettamente normale non preoccuparti. Non è importante che li riesca a risolvere subito, l'importante è provarci, ragionare e cercare di mettere in pratica tutte le cose che hai imparato durante le lezioni.
Se non stai seguendo il corso ma vuoi diventare un programmatore da autodidatta puoi comunque provare a risolvere gli esercizi :)

## Primo Esercizio Bonus: Le variabili

Questo esercizio è un classico, tutti coloro che vorrebbero sapere come iniziare a programmare dovrebbero partire proprio da questo esercizio, l'hanno visto tutti ed è uno scambio di valori con due variabili: `one` che contiene la stringa 'Star' e la variabile `two` che conviene invece 'Wars', quindi 'Star Wars' diviso in due.
Fin qui tutto bene.
Lo scopo dell'esercizio è spostare il contenuto della variabile `one` all'interno della variabile `two`, quindi `two` conterrà 'Star', mentre il contenuto della variabile `two` dovrà essere spostato all'interno della variabile `one`, quindi `one` conterrà 'Wars'.
Ovviamente devi lavorare utilizzando "le variabili" per spostare i valori da un punto all'altro, non puoi scrivere:
> one = 'Wars';
> two = 'Star';

### *Suggerimenti:*

Quando hai dei problemi nella [programmazione](https://it.wikipedia.org/wiki/Programmazione_(informatica)) provare ad applicare lo stesso problema nel mondo reale...
Fai mente locale, cosa hai imparato nelle lezione sulle variabili?
Abbiamo detto che le variabili sono come dei contenitori, come dei bicchieri vuoti. Noi stiamo utilizzando le parole 'Star' e 'Wars' ma avremmo potuto inserire qualsiasi cosa.
Abbiamo due contenitori, abbiamo detto che le nostre variabili sono come dei bicchieri, e noi di solito nei bicchieri versiamo dei liquidi, quindi al posto di 'Star' possiamo scrivere `one = 'acqua'` e al posto di 'Wars' possiamo scrivere `two = 'spremuta'`.

Ok, tecnicamente non abbiamo fatto nulla, abbiamo semplicemente modificato le parole e il problema rimane ugualmente ma adesso ti chiedo...
Immagina nel modo reale di avere questi due bicchieri davanti a te, nella tua cucina, come fai a travasare il contenuto del primo nel secondo e viceversa? Lo sapresti fare?
Io penso di si, ti basterebbe prendere un terzo bicchiere!
Ecco, la stessa cosa la puoi fare nella programmazione.
Dopo che l'avrai risolto ti accorgerai di quanto era semplice questo esercizio e **di quanto imparare a programmare non sia poi cosi complicato.**

## Esercizio Finale: Carta, forbici, sasso, lizard, spock
Se sei arrivato sino a qui vuol dire che hai completato tutti gli altri quindi complimenti!
Voglio proporti un piccolo progetto finale per cercare di mettere in pratica tutte le nozioni che hai appena imparato, quello che voglio che realizzi è un piccolo gioco scritto in [javascript](https://developer.mozilla.org/it/docs/Web/JavaScript).

Il gioco in questione è "carta, forbici, sasso, lizard, spock" se non lo conosci ecco una spiegazione:
>Le forbici tagliano la carta, la carta avvolge il sasso, il sasso uccide lizard, lizard avvelena spock, spock rompe le forbici, le forbici decapitano lizard, lizard mangia la carta, la carta invalida spock, spock vaporizza il sasso e come è sempre stato, il sasso rompe le forbici.

Hai capito tutto vero? È molto chiaro! No dai scherzo, ci vuole un po' per capirlo, se hai difficoltà puoi creare prima il gioco solo considerando i tre soliti elementi (carta,forbici,sasso) per poi aggiungere anche i nuovi (lizard,spock), ad ogni modo nella lezioni trovi una spiegazione passo passo.

Ho già preparato il codice di base che puoi utilizzare per svolgere l'esercizio, puoi modificarlo e implementare la tua versione del gioco, te lo spiego brevemente:
Abbiamo una array chiamata `choices` che contiene tutti gli elementi che possono essere scelti, per effettuare la scelta utilizzeremo l'indice dell'array, quindi zero sarà Carta, uno sarà forbici e cosi via sino ad arrivare all'ultimo elemento con indice quattro e sarà Spock.

Successivamente definiamo due giocatori, `player1` e `player2`, possiamo definire noi (da codice) la scelta selezionata indicando l'indice dell'array oppure possiamo utilizzare la funzione che ho preparato chiamata `getRandomIntInclusive` che ci restituisce un numero random compreso tra 0 e 4 (estremi inclusi) cosi da simulare una mano casuale.

Abbiamo una funziona `game` a cui vengono passati in input come argomenti le mani dei due palyer, all'interno di questa funzione dovrete scrivere la vostra implementazione, sbizzarritevi, date sfogo alla vostra fantasia, potete scriverla come volete, l'importante è che funzioni e che gestisca anche la condizione di pareggio.

### *Suggerimenti:*
Non c'è un unica implementazione corretta di questo codice, noi potremmo scrivere due codici completamente diversi ma il risultato che loro producono è identico quindi effettivamente il gioco funziona e restituisce le stesse stringhe.
Quindi non è importante che i nostri codici siano uguali, l'importante è che voi riusciate scrivere un codice che funzioni. Poi ovviamente c'è sempre tempo per migliore le proprie conoscenze di javascript e diventare un programmatore più esperto.
L'importante in questo esercizio è che provi a mettere in pratica tutto quello che hai imparato sino ad ora, quindi rimboccati le maniche e prova a risolverlo.
Se ti accorgi di avere troppe difficoltà e di non riuscire vuol dire che non hai assimilato al meglio tutti le informazioni di queste lezioni, non preoccuparti, torna nelle lezioni precedenti e riguardati quelle in cui hai più dubbi.

## Sei finalmente riuscito ad imparare a programmare!
Se hai completato tutte le lezioni e anche gli esercizi bonus sei stato bravissimo! Congratulazioni! Sei riuscito a portare a termine questo percorso, questa guida alla programmazione, continua cosi e **adesso puoi dire aver imparato a programmare, di conoscere le basi della programmazione e del [linguaggio javascript](http://lia.deis.unibo.it/Courses/TecnologieWeb0910/lezioni/3.01.JavaScript.pdf).**

