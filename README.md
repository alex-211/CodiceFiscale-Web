# Calcolatore codice fiscale su pagina web

Progetto scolastico per imparare l'uso del JavaScript. Il progetto consiste in una semplice pagina web con form e collegato uno script JS per calcolare il codice fiscale.

## Come calcolare il codice fiscale

[Fonte](https://it.wikipedia.org/wiki/Codice_fiscale)
Il codice fiscale è diviso in 15 posizioni occupate da 6 sezioni: 
1. Pos. 1 -> 3, cognome: si prendono le prime 3 consonanti del cognome. Se il cognome ha meno di 3 consonanti, si prendono le vocali, che però si mettono dopo le consonanti. Se il cognome ha meno di 3 lettere, si aggiungono le lettere X fino ad arrivare a 3.
2. Pos. 4 -> 6, nome: Nel caso il nome contenesse 4 o + consonanti si prendono la prima, la terza e la quarta - nel caso ci fossero 3 consonanti si prendono le prime 3 - nel caso ci fossero meno di 3 consonanti si prendono prima le consonanti e poi si aggiungono le vocali fino ad arrivare a 3. Nel caso ci fossero meno di 3 lettere, si aggiungono X fino ad arrivare a 3.
3. Pos. 7 -> 9, anno e mese di nascita: le ultime due cifre dell'anno di nascita e una lettera corrispondente al mese, secondo questa tabella:

   | Lettera | Mese       |
   |---------|------------|
   | A       | Gennaio    |
   | B       | Febbraio   |
   | C       | Marzo      |
   | D       | Aprile     |
   | E       | Maggio     |
   | H       | Giugno     |
   | L       | Luglio     |
   | M       | Agosto     |
   | P       | Settembre  |
   | R       | Ottobre    |
   | S       | Novembre   |
   | T       | Dicembre   |

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
 - Piccola function aggiuntiva che fa comparire l'elenco dei comuni solo in caso l'utente sia nato in italia:
```javascript
function aggiornaElenchi()
{
    if (document.datiAnagrafici.elencoStati.value == "Z000")
    {
        let elencoComune = document.datiAnagrafici.elencoComune;
        elencoComune.removeAttribute("hidden");
        elencoComune.setAttribute("required");
    }
}
```
- Come ho implementato l'algoritmo per il codice di controllo:
    - Ho convertito le tabelle viste su wikipedia in array
```javascript
    let caratteri = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
    let valoredis  = [1,0,5,7,9,13,15,17,19,21,1,0,5,7,9,13,15,17,19,21,2,4,18,20,11,3,6,8,12,14,16,10,22,25,24,23]; 
    let valorepari  = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
```
 - 2.
    - Per ogni lettera o numero ho scoperto la sua posizione nell'array, per esempio la P è in posizione 25 (la posizione è nella variabile 'j')
```javascript
    for(i = 0; i < y; i++) // per ogni lettera o numero 
    { 
        for(j = 0; j < caratteri.length; j++) // scopri la posizione nel vettore
        { 
            // Resto del codice che vedremmo dopo
        }
    }
```
 - 3. 
    - Dentro il secondo for loop si sfrutta la tecnica dei vettori paralleli (mai avrei pensato di dire grazie Antonellini) per trovare il valore da sommare alla bariabile 'somma', che è diverso se i (e quindi la posizione della lettera all'intero del codice) è pari o dispari. Quindi nel caso del mio codice, dove la prima lettera lettera è 'P' trovo che: j = 16, i = 1 quindi il valore da sommare è dispari e si trova nella posizione 16 del vettore 'valoredis' e quindi è 3. Ecco il codice all'interno del secondo for loop:
```javascript
    if(i % 2 == 0) 
    { 
    console.log(valoredis[j]) 
    somma += valoredis[j]; 
    } 
    else 
    { 
    console.log(valorepari[j]) 
    somma += valorepari[j]; 
    } 
    break; 
```

## Tema Bootstrap 5 di Designers Italia

Ho usato alcune (purtroppo non tutte) le linee guida di Designers Italia per realizzare il sito. Designers Italia è un organizzazione che si occupa di fornire linee guida per la realizzazione di siti web per la pubblica amministrazione. [Qui](https://italia.github.io/designers-italia-docs/) il link al sito. Ho usato il tema Bootstrap 5 di Designers Italia, che si può trovare [qui](https://italia.github.io/bootstrap-italia/) e ho usato lo stesso font che si chiama Titillium Web, che si può trovare [qui, su Google Fonts](https://fonts.google.com/specimen/Titillium+Web?query=titillium&preview.text_type=custom&sidebar.open=true&selection.family=Titillium+Web:wght@300;400;600;700;900).

## Disclaimer

Nessuno è autorizzato a calcolare o fornire strumenti per il calcolo del codice fiscale: l'unico codice fiscale valido è quello rilasciato al soggetto dall'Agenzia delle entrate. [(Fonte)](https://web.archive.org/web/20160310011139/http://www.agenziaentrate.gov.it/wps/content/Nsilib/Nsi/Home/CosaDeviFare/Richiedere/Codice+fiscale+e+tessera+sanitaria//) quindi il codice rilasciato da questo sito non è da utilizzarsi ed il sito è a scopo didattico.
