function calcola() {
    // refer to wiki docs https://it.wikipedia.org/wiki/Codice_fiscale#Generazione_del_codice_fiscale
    let codice = [];

    let surname = document.datiAnagrafici.cognome.value;
    let name = document.datiAnagrafici.name.value;

    let elementoSelezionatoMese = document.getElementById("elencoMesi");
    let meseNascita = elementoSelezionatoMese.options[elementoSelezionatoMese.selectedIndex].value;
    let elementoSelezionatoAnno = document.getElementById("elencoAnno");
    let annoNascita = elementoSelezionatoAnno.options[elementoSelezionatoAnno.selectedIndex].value;
    let elementoSelezionatoGiorno = document.getElementById("elencoGiorni");
    let giornoNascita = elementoSelezionatoGiorno.options[elementoSelezionatoGiorno.selectedIndex].value;

    let elementoSelezionatoStato = document.getElementById("elencoStati");
    let statoNascita = elementoSelezionatoStato.options[elementoSelezionatoStato.selectedIndex].value;
    let elementoSelezionatoComune = document.getElementById("elencoComuni");
    let comuneNascita = elementoSelezionatoComune.options[elementoSelezionatoComune.selectedIndex].value;

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

    // formattazione delle variabili stringhe
    name = name.toUpperCase();
    name = name.replaceAll(' ', '');
    surname = surname.toUpperCase();
    surname = surname.replaceAll(' ', '');

    // qua le verifiche della correttezza dei dati inviati

    if (surname == "") { // works
        alert("Campo 'cognome' vuoto");
        return;
    } 
    if (name == "") { // might have fixed it, check if it works
        alert("Campo 'name' vuoto");
        return;
    } 
    if (sessoMaschio == false && sessoFemmina == false)
    {
        alert("Selezionare un sesso");
        return;
    }
    // il resto dei campi hanno un'opzioni di default essendo elenchi COMMENTED OUT FOR TESTING*/

    // pos. 0-2 cognome
    let cognomeSize = surname.length;
    let y = 0;

    for (let i = 0; i < cognomeSize && y < 3; i++)
    {
        //console.log(surname[i] + " " + " " + codice + " " + y); // Perché non c'è un debugger per JS su VS Code???

        if (y == 2 && i == cognomeSize - 1)
        {
            codice[2] = "X";
        }

        if (surname[i] != "A" &&  surname[i] != "E" && surname[i] != "I" && surname[i] != "O" && surname[i] != "U")
        {
            codice[y] = surname[i];
            y++;
        }
    }
    
    // pos 3-5 name
    let consonantiName = [];
    let z = 0;
    for (let i = 0; i < name.length; i++)
    {
        //console.log(consonantiName[z] + " " + name[i]);

        if (name[i] != "A" && name[i] != "E" && name[i] != "I" && name[i] != "O" && name[i] != "U")
        {
            consonantiName[z] = name[i];
            z++;
        }
    }

    if (consonantiName.length == 3)
    {
        for (let i = 0; i < 4; i++)
        {
            codice[y] = consonantiName[i];
            y++;
        }
    }

    if (consonantiName.length > 3)
    {
        codice[3] = consonantiName[0];
        codice[4] = consonantiName[2];
        codice[5] = consonantiName[3];
        y += 3;
    }

    if (consonantiName.length < 3)
    {
        codice[3] = consonantiName[0];
        codice[4] = consonantiName[1];

        for (let i = 0; i < name.length; i++)
        {
            if (name[i] == "A" || name[i] == "E" || name[i] == "I" || name[i] == "O" || name[i] == "U")
            {
                codice[5] = name[i];
                break;
            }
        }
        y +=3;
    }

    // pos. 6-8 anno e mese di nascita
    codice[6] = annoNascita[2];
    codice[7] = annoNascita[3];
    codice[8] = meseNascita;
    y += 3;

    // pos. 9-10 giorno di nascita e sesso
    sezioneSesso = giornoNascita;
    if (sessoFemmina == true)
    {
        sezioneSesso += 40;
    }
    if (sezioneSesso.length == 1)
    {
        codice[9] = "0";
        codice[10] = sezioneSesso;
    }
    else
    {
        codice[9] = sezioneSesso[0];
        codice[10] = sezioneSesso[1];
    }
    y += 2;
    
    // pos. 11-14 luogo di nascita
    if (statoNascita == "Z000")
    {
        codice[11] = comuneNascita[0];
        codice[12] = comuneNascita[1];
        codice[13] = comuneNascita[2];
        codice[14] = comuneNascita[3];
    }
    else
    {
        codice[11] = statoNascita[0];
        codice[12] = statoNascita[1];
        codice[13] = statoNascita[2];
        codice[14] = statoNascita[3];
    }
    y += 4;

    // pos. 15-16 carattere di controllo
    alert(codice);



}