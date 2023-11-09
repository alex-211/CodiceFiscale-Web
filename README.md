# Calcolatore codice fiscale su pagina web

Progetto scolastico per imparare l'uso del JavaScript. Il progetto consiste in una semplice pagina web con form e collegato uno script JS per calcolare il codice fiscale.

## Come calcolare il codice fiscale

[Fonte](https://it.wikipedia.org/wiki/Codice_fiscale)
Il codice fiscale è diviso in 15 posizioni occupate da 6 sezioni: 
1. Pos. 1 -> 3, cognome: si prendono le prime 3 consonanti del cognome. Se il cognome ha meno di 3 consonanti, si prendono le vocali, che però si mettono dopo le consonanti. Se il cognome ha meno di 3 lettere, si aggiungono le lettere X fino ad arrivare a 3.
2. Pos. 4 -> 6, nome: Nel caso il nome contenesse 4 o + consonanti si prendono la prima, la terza e la quarta - nel caso ci fossero 3 consonanti si prendono le prime 3 - nel caso ci fossero meno di 3 consonanti si prendono prima le consonanti e poi si aggiungono le vocali fino ad arrivare a 3. Nel caso ci fossero meno di 3 lettere, si aggiungono X fino ad arrivare a 3.
3. Pos. 7 -> 9, anno e mese di nascita: le ultime due cifre dell'anno di nascita e una lettera corrispondente al mese, secondo questa tabella:

   | Lettera | Mese |
   ------------------
    | A | Gennaio |
    | B | Febbraio |
    | C | Marzo |
    | D | Aprile |
    | E | Maggio |
    | H | Giugno |
    | L | Luglio |
    | M | Agosto |
    | P | Settembre |
    | R | Ottobre |
    | S | Novembre |
    | T | Dicembre |
4. Pos. 10 -> 11, giorno di nascita e sesso: Nel caso di un uomo di prendono le cifre del giorno di nascita, mentre per una donna si aggiunge al giorno il numero 40.
5. Pos. 12 -> 15, luogo di nascita: per una persona nata in italia si prende il codice catastale del comune, nel caso di una persona nata all'estero si prende il codice catastale dello stato estero di nascita. [Per saperne di più sul codice catastale](https://it.wikipedia.org/wiki/Codice_catastale)
6. Pos. 16, carattere di controllo: si calcola con un algoritmo che si può trovare [qui](https://it.wikipedia.org/wiki/Codice_fiscale#Generazione_del_codice_fiscale)

## Come funziona lo script

 - Ho deciso di usare un array per il codice fiscale, essendo facile da gestire grazie all'indicatore di index.
 - Per il popolamento delle variabili ho usato il metodo:

```javascript
    let surname = document.datiAnagrafici.cognome.value;
```
 - Eccetto per la variabile del sesso, che ho gestito in questo modo:
```javascript
    let sessoMaschio = false;
    let sessoFemmina = false;
    if (document.getElementById("sessoMASCHIO").checked)
    {
        sessoMaschio = true;
    }
    if (document.getElementById("sessoFEMMINA").checked)
    {
        sessoFemmina = true;
    }
```
 - Ho formattato le variabili testuali per essere sicuro di ottenre un output pulito ed di avere le lettere maiuscole e senza spazi. Per questo JS ha dei metodi built-in:
```javascript
    name = name.toUpperCase();
    name = name.replaceAll(' ', '');
    surname = surname.toUpperCase();
    surname = surname.replaceAll(' ', '');
```

### Da finire

- [ ] Aggiungere la funzione per il calcolo del carattere di controllo
- [ ] Better UI/UX
- [ ] Console log di debug
- [ ] Function per il popolamento delle variabili per facilitare il debugging
- [ ] Aggiungere documentazione per tema bootstrap di [Designers Italia](https://italia.github.io/bootstrap-italia/docs/come-iniziare/introduzione/)
