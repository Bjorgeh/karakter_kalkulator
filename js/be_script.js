function regnUt() {

    //Lister med verdier for input og mulitiplisering
    var karakterVerdier = [1, 2, 3, 4, 5];
    var karakterBokstaver = ["E", "D", "C", "B", "A"];

    var multiplisertKarakterOgStudiePoeng = 0;
    var summerteStudiepoeng = 0;

    //Går fra 0-30 for å se gjennom alle inputs.
    for (let i = 0; i < 30; i++) {

        //Lager variavler som brukes i forloop for å hente alle karakter inputs.
        var BokstavKarakter = "karakter_" + i;
        BokstavKarakter = BokstavKarakter.toString();
        var DesimalKarakter = "karakter_0_" + i;
        DesimalKarakter = DesimalKarakter.toString();
        var OldSchoolKarakter = "karakter_0_1_" + i;
        OldSchoolKarakter = OldSchoolKarakter.toString();
        var tallKarakter = "karakter_2_" + i;
        tallKarakter = tallKarakter.toString();

        //Henter verdi fra HTML select input
        var hentetBokstavKarakter = document.getElementById(BokstavKarakter).value;
        hentetBokstavKarakter = hentetBokstavKarakter.toString();

        var hentetDesimalKarakter = document.getElementById(DesimalKarakter).value;
        hentetDesimalKarakter = hentetDesimalKarakter.toString();

        var henterOldSchoolKarakter = document.getElementById(OldSchoolKarakter).value;
        henterOldSchoolKarakter = henterOldSchoolKarakter.toString();

        var hentetTallKarakter = document.getElementById(tallKarakter).value;
        hentetTallKarakter = hentetTallKarakter.toString();

        //Lager variabel som brukes i forloop for å hente alle SP inputs
        var studiePoeng_i = "studiepoeng_" + i;
        studiePoeng_i = studiePoeng_i.toString();

        //Henter verdi fra HTML nummer input
        var hentetNummerVerdi = document.getElementById(studiePoeng_i).value;

        //Går fra 0-5 i possisjonen til liste for konvertere bokstav til tallverdi
        for (let j = 0; j < 5; j++) {


            //Sjekker om hentet bokstavkarakter finnes i listen
            if (hentetBokstavKarakter === karakterBokstaver[j]) {

                console.log("Bokstav " + hentetBokstavKarakter + " funnet i listen, med verdien " + karakterVerdier[j]);
                multiplisertKarakterOgStudiePoeng = multiplisertKarakterOgStudiePoeng + hentetNummerVerdi * karakterVerdier[j];
                //console.log("Sum multipliserte poeng: "+multiplisertKarakterOgStudiePoeng);

                //Legger karakterverdi til i variabel for summering.
                hentetNummerVerdi_nummer = parseInt(hentetNummerVerdi);
                summerteStudiepoeng = summerteStudiepoeng + hentetNummerVerdi_nummer;

            }

            //Sjekker om hentet desiamlkarakter finnes i listen
            if (hentetDesimalKarakter === karakterBokstaver[j]) {
                console.log("Bokstav " + hentetDesimalKarakter + " funnet i listen, med verdien " + karakterVerdier[j]);
                multiplisertKarakterOgStudiePoeng = multiplisertKarakterOgStudiePoeng + hentetNummerVerdi * karakterVerdier[j];
                //console.log("Sum multipliserte poeng: "+multiplisertKarakterOgStudiePoeng);

                //Legger karakterverdi til i variabel for summering.
                hentetNummerVerdi_nummer = parseInt(hentetNummerVerdi);
                summerteStudiepoeng = summerteStudiepoeng + hentetNummerVerdi_nummer;

            }

            //Sjekker om hentet oldSchoolkarakter finnes i listen
            if (henterOldSchoolKarakter === karakterBokstaver[j]) {
                console.log("Bokstav " + henterOldSchoolKarakter + " funnet i listen, med verdien " + karakterVerdier[j]);
                multiplisertKarakterOgStudiePoeng = multiplisertKarakterOgStudiePoeng + hentetNummerVerdi * karakterVerdier[j];
                //console.log("Sum multipliserte poeng: "+multiplisertKarakterOgStudiePoeng);

                //Legger karakterverdi til i variabel for summering.
                hentetNummerVerdi_nummer = parseInt(hentetNummerVerdi);
                summerteStudiepoeng = summerteStudiepoeng + hentetNummerVerdi_nummer;

            }

            //Sjekker om hentet oldSchoolkarakter finnes i listen
            if (hentetTallKarakter === karakterBokstaver[j]) {
                console.log("Bokstav " + hentetTallKarakter + " funnet i listen, med verdien " + karakterVerdier[j]);

                multiplisertKarakterOgStudiePoeng = multiplisertKarakterOgStudiePoeng + hentetNummerVerdi * karakterVerdier[j];
                //console.log("Sum multipliserte poeng: "+multiplisertKarakterOgStudiePoeng);

                //Legger karakterverdi til i variabel for summering.
                hentetNummerVerdi_nummer = parseInt(hentetNummerVerdi);
                summerteStudiepoeng = summerteStudiepoeng + hentetNummerVerdi_nummer;
            }

        }

    }

    //Utregner gjennomsnitt av multipliserte og summerte studiepoeng.
    var kalkulertGjennomsnitt = multiplisertKarakterOgStudiePoeng / summerteStudiepoeng;
    kalkulertGjennomsnitt = kalkulertGjennomsnitt.toFixed(2);

    //Viser resultater i console.
    console.log("Sum multipliserte poeng: " + multiplisertKarakterOgStudiePoeng + "\n" + "Summerte poeng: " + summerteStudiepoeng);
    console.log("Utregner gjennomsnitt: " + kalkulertGjennomsnitt);

    //Setter ny verdi til samlede studiepoeng i HTML
    var samledeStudiePoeng = document.getElementById("Samlede-studiepoeng");
    samledeStudiePoeng.innerHTML = summerteStudiepoeng;

    //Setter ny verdi til utregnet resultat i HTML
    var utregnetResultat = document.getElementById("Utregnet-resultat");
    utregnetResultat.innerHTML = kalkulertGjennomsnitt;
}