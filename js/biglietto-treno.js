// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65. L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// VARIABILI GLOBALI 
const costoKm = 0.21 ;
const scontoUnder18 = 20;
const scontoOver65 = 40;


// L’output del prezzo finale tramite click 
function myFunction() {
    
    // chiedere all’utente il numero di chilometri che vuole percorrere
    const kmPercorso = document.getElementById("km").value;
    console.log(kmPercorso);

    // chiedere all’utente l’età del passeggero
    const ageUser = document.getElementById("eta").value;
    console.log(ageUser);

    // calcolare il prezzo totale del viaggio
    let costoViaggio = costoKm * kmPercorso;
    console.log(costoViaggio);

    // applicare uno sconto al biglietto del 40% per gli over 65 e del 20% per i minorenni
    let scontoViaggio; 

    if (ageUser > parseInt(65)) { // applicare uno sconto del 40% per gli over 65
    scontoViaggio = costoViaggio - (costoViaggio * scontoOver65/ 100);
    } else if (ageUser < parseInt(18)) { // applicare uno sconto del 20% per i minorenni
    scontoViaggio = costoViaggio - (costoViaggio * scontoUnder18/ 100);
    } else {
    scontoViaggio = costoViaggio 
    }
    console.log(scontoViaggio);

    let costoTotale = scontoViaggio.toFixed(2);

    // L’output del prezzo finale 
    const risultatoDiv = document.getElementById("risultato");
    risultatoDiv.style.display = "block"; // mostra il risultato
    document.getElementById("prezzo-biglietto").innerHTML = costoTotale;
}
    // reset dei dati inseriti 
function myFunction2() {
    document.getElementById("myForm").reset();
}

function resetResult() {
        document.getElementById("risultato").style.display = "none";
}



