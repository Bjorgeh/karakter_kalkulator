
function regnUt(){

    //Lister med verdier for input og mulitiplisering
    var karakterVerdier = [1,2,3,4,5];
    var karakterBokstaver = ["E","D","C","B","A"];

    var multiplisertKarakterOgStudiePoeng = 0;
    var summerteStudiepoeng = 0;

    //Går fra 0-30 for å se gjennom alle inputs.
    for(let i = 0; i < 30;i++){
    
        //Lager variabl som brukes i forloop for å hente alle karakter inputs.
        var karakterer_i = "karakter_"+i;
        karakterer_i = karakterer_i.toString();

        //Henter verdi fra HTML select input
        var hentetKarakterBokstav = document.getElementById(karakterer_i).value;
        hentetKarakterBokstav = hentetKarakterBokstav.toString();

        //Lager variabel som brukes i forloop for å hente alle SP inputs
        var studiePoeng_i = "studiepoeng_"+i;
        studiePoeng_i = studiePoeng_i.toString();

        //Henter verdi fra HTML nummer input
        var hentetNummerVerdi = document.getElementById(studiePoeng_i).value;
        
        //Går fra 0-5 i possisjonen til liste for konvertere bokstav til tallverdi
        for(let j = 0; j < 5; j++){
            if(hentetKarakterBokstav === karakterBokstaver[j]){
                console.log("Bokstav "+hentetKarakterBokstav+" funnet i listen, med verdien "+karakterVerdier[j]);
                multiplisertKarakterOgStudiePoeng = multiplisertKarakterOgStudiePoeng + hentetNummerVerdi*karakterVerdier[j];
                //console.log("Sum multipliserte poeng: "+multiplisertKarakterOgStudiePoeng);

                //Legger karakterverdi til i variabel for summering.
                hentetNummerVerdi_nummer = parseInt(hentetNummerVerdi);
                summerteStudiepoeng = summerteStudiepoeng+hentetNummerVerdi_nummer;

            }

        }

    }

    //Utregner gjennomsnitt av multipliserte og summerte studiepoeng.
    var kalkulertGjennomsnitt = multiplisertKarakterOgStudiePoeng/summerteStudiepoeng;
    kalkulertGjennomsnitt = kalkulertGjennomsnitt.toFixed(2);

    //Viser resultater i console.
    console.log("Sum multipliserte poeng: "+multiplisertKarakterOgStudiePoeng+"\n"+"Summerte poeng: "+summerteStudiepoeng);
    console.log("Utregner gjennomsnitt: "+kalkulertGjennomsnitt);

    //Setter ny verdi til samlede studiepoeng i HTML
    var samledeStudiePoeng = document.getElementById("Samlede-studiepoeng");
    samledeStudiePoeng.innerHTML = summerteStudiepoeng;

    //Setter ny verdi til utregnet resultat i HTML
    var utregnetResultat = document.getElementById("Utregnet-resultat");
    utregnetResultat.innerHTML = kalkulertGjennomsnitt;
}