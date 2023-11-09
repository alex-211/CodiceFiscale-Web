function calcola() {
    // ho deciso di usare un array per il codice fiscale
    let codice = [];
    let y = 0;
    // Popolazione variabili
    let surname = document.datiAnagrafici.cognome.value;
    let name = document.datiAnagrafici.name.value;
    let meseNascita = document.datiAnagrafici.elencoMesi.value;
    let annoNascita = document.datiAnagrafici.elencoAnno.value;
    let giornoNascita = document.datiAnagrafici.elencoGiorni.value;
    let statoNascita = document.datiAnagrafici.elencoStati.value;
    let comuneNascita = document.datiAnagrafici.elencoComune.value;

    // Popolazione delle variabili del sesso
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

    // VVerifica della presenza dei dati
    if (surname == "") { 
        alert("Campo 'cognome' vuoto");
        return;
    } 
    if (name == "") {
        alert("Campo 'name' vuoto");
        return;
    } 
    if (sessoMaschio == false && sessoFemmina == false)
    {
        alert("Selezionare un sesso");
        return;
    }
    if (meseNascita == "0")
    {
        alert("Selezionare un mese di nascita");
        return;
    }
    if (annoNascita == "0")
    {
        alert("Selezionare un anno di nascita");
        return;
    }
    if (giornoNascita == "0")
    {
        alert("Selezionare un giorno di nascita");
        return;
    }
    if (comuneNascita == "0")
    {
        alert("Selezionare un comune di nascita");
        return;
    }

    // pos. 0-2 cognome
    let cognomeSize = surname.length;

    for (let i = 0; i < cognomeSize && y < 3; i++)
    {
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

    // pos. 15 carattere di controllo
    let posizionePari = [];
    let posPP = 0;
    let posizioniDispari = [];
    let posPD = 0;

    for (let i = 0; i < y; i++)
    {
        if (i % 2 == 0)
        {
            posizionePari[posPP] = codice[i];
            posPP++;
        }
        else
        {
            posizioniDispari[posPD] = codice[i];
            posPD++;
        }
    }
    

    // FINE
    alert(codice);
}