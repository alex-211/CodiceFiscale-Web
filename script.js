function calcola() {
    // refer to wiki docs https://it.wikipedia.org/wiki/Codice_fiscale#Generazione_del_codice_fiscale
    let codice = [];

    let surname = document.datiAnagrafici.cognome.value;
    let name = document.datiAnagrafici.nome.value;
    /*let meseNascita = document.datiAnAgrafici.meseNascita.value;
    let annoNascita = document.datiAnAgrafici.annoNascita.value;
    let ggNascita = document.datiAnAgrafici.ggNascita.value;
    let sesso = document.datiAnagrafici.sesso;
    let comuneNascita = document.datiAnagrafici.comuneNascita.value;
    let controllo; COMMENTED OUT FOR TESTIG*/ 

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
        alert("Campo 'nome' vuoto");
        return;
    } 
    /*if (sesso == "") {
        alert("Campo 'sesso' vuoto");
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
    
    // pos 3-5 nome
    let consonantiNome = [];
    let z = 0;
    for (let i = 0; i < nome.length; i++)
    {
        //console.log(consonantiNome[z] + " " + nome[i]);

        if (nome[i] != "A" && nome[i] != "E" && nome[i] != "I" && nome[i] != "O" && nome[i] != "U")
        {
            consonantiNome[z] = nome[i];
            z++;
        }
    }

    if (consonantiNome.length == 3)
    {
        for (let i = 0; i < 4; i++)
        {
            codice[y] = consonantiNome[i];
            y++;
        }
    }

    if (consonantiNome.length > 3)
    {
        codice[3] = consonantiNome[0];
        codice[4] = consonantiNome[2];
        codice[5] = consonantiNome[3];
        y += 3;
    }

    if (consonantiNome.length < 3)
    {
        codice[3] = consonantiNome[0];
        codice[4] = consonantiNome[1];

        for (let i = 0; i < name.length; i++)
        {
            if (nome[i] == "A" || nome[i] == "E" || nome[i] == "I" || nome[i] == "O" || nome[i] == "U")
            {
                codice[5] = nome[i];
                break;
            }
        }
        y +=3;
    }


    // controllo
    alert(codice);
}