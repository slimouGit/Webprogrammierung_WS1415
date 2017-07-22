//in function start() werden alle window.onload zusammengefasst
function start() {
  init();
  neuesFeld();
  showSidemap();
  
}
window.onload = start;

/*--------------------------------------------------------------------------------------------------------------------*/

function init(){
    
	//Variable prnt fuer Druck-Funktion deklarieren
	var prnt=document.getElementById('drucken');
	prnt.onclick=callPrint;
	
	//Variable smap fuer Weiterleitung deklarieren
	var smap=document.getElementById('sidemap');
	smap.onclick=callSidemap;
	
	//Variablen fuer Schwierigkeitsgrad
	var levEasy=document.getElementById('8');
	levEasy.onclick=spielLeicht;
	var levHard=document.getElementById('12');
	levHard.onclick=spielMittel;
	var levHarder=document.getElementById('24');
	levHarder.onclick=spielSchwer;
	
	var neustart=document.getElementById('neustart');
	neustart.onclick=neuesSpiel;
	
	//wenn der Spieler nicht mehr spielen will
	var spielBeenden=document.getElementById('beenden');
	spielBeenden.onclick=unwilligerSpieler;
	
	//Variablen fuer das Memoryspiel initialisieren
    memory_werte = []; // leeres Array zum speichern
    memory_feld_id = []; //tile = Fliese // leeres Array zum speichern zum speichern der Feld-Ids
    memory_gefunden = 0; //Fliese umgekippt   //zaehlt die umgedrehten Felder
    memory_fehlversuche = 0;//Zaehlt die Fehlversuche
    memory_array = memory_array = ['1','2','3','4','5','6','7','8','9','10','11','12'];//Array mit allen 12 Bildern wird initialisiert
    
 
}//Ende init()
/*-----------------------------------------------------------------------------------------------------------------*/

//Funktion zum drucken
function callPrint(){
	window.print(); 
}//Ende callPrint

//Funktion oeffnet sidemap.xml im seperaten Fenster	
function callSidemap(Adresse){
    MeineSidemap = window.open("http://slimou.de/WebSpace/Web-Programmierung/AbschlussPraese/xml/sidemap.xml", "Sidemap", "width=250px, height=750px, top=50px");
    MeineSidemap.focus();
}//Ende callSidemap

/*--------------------------------------------------------------------------------------------------------------------*/

//Funktion neuesSpiel/Neustart
function neuesSpiel(){
    //window.alert("Neustart");
    window.location.href = "spiel.html" ;
   // window.open("spiel.html" );
}

//Funktion sortiert das memory_array in "zufaelliger" Reihenfolge
function randomSort(a, b) {
    return 0.5 - Math.random();
}
    
//Funktionen mit Spielfeldgroessen stehen zur Auswahl
function spielLeicht(){
    //memory_array wird mit ersten 4 Indizes initialisiert
    memory_array = memory_array.slice(1, 5);
    //memory_array wird mit sich selbst erweitert, Array hat jetzt 8 Indizes/4 Paare
    memory_array = memory_array.concat(memory_array);
    //memory_array wird "zufaellig" sortiert
    memory_array.sort(randomSort);
    //Titelbild wird ausgeblendet, sobald Spiel gestartet ist
    document.getElementById("titelbild_spiel").style.display = "none";
    document.getElementById("spielfeld").style.visibility = "visible";
    //Neustart-Link wird sichtbar, sobald Spiel gestartet ist
    document.getElementById("neustart").style.visibility = "visible";
    //waehrend des Spiels wird die Felder-Auswahl verborgen
    document.getElementById("level").style.display = "none";
    neuesFeld(); 
}//Ende spielLeicht() 

function spielMittel(){
    //memory_array wird mit ersten 6 Indizes initialisiert
    memory_array = memory_array.slice(1, 7);
    //memory_array wird mit sich selbst erweitert, Array hat jetzt 12 Indizes/6 Paare
    memory_array = memory_array.concat(memory_array);
    //memory_array wird "zufaellig" sortiert
    memory_array.sort(randomSort);
    //Titelbild wird ausgeblendet, sobald Spiel gestartet ist
    document.getElementById("titelbild_spiel").style.display = "none";
    document.getElementById("spielfeld").style.visibility = "visible";
    //Neustart-Link wird sichtbar, sobald Spiel gestartet ist
    document.getElementById("neustart").style.visibility = "visible";
    //waehrend des Spiels wird die Felder-Auswahl verborgen
    document.getElementById("level").style.display = "none";
    neuesFeld(); 
}//Ende spielMittel() 

function spielSchwer(){
    //memory_array wird mit sich selbst erweitert, Array hat jetzt 24 Indizes/12 Paare
    memory_array = memory_array.concat(memory_array);
    //memory_array wird "zufaellig" sortiert
    memory_array.sort(randomSort);
    //Titelbild wird ausgeblendet, sobald Spiel gestartet ist
    document.getElementById("titelbild_spiel").style.display = "none";
    document.getElementById("spielfeld").style.visibility = "visible";
    //Neustart-Link wird sichtbar, sobald Spiel gestartet ist
    document.getElementById("neustart").style.visibility = "visible";
    //waehrend des Spiels wird die Felder-Auswahl verborgen
    document.getElementById("level").style.display = "none";
    neuesFeld(); 
}//Ende spielSchwer() 

//wenn der Spieler nicht mehr spielen will
function unwilligerSpieler(){
    window.alert("Bis zum nächsten Mal.");
}//Ende unwilligerSpieler()

/*--------------------------------------------------------------------------------------------------------------------*/

//Spiel
function neuesFeld(){ //neues Feld wird erzeugt
    
//Methode belegt alle Felder "zufaellig"
Array.prototype.memory_feld_random = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}//Array.prototype.memory_feld_random

	memory_gefunden = 0; //Anzahl der umgedrehten Felder wird auf Null gesetzt
	var ausgabe = ''; // leere Variable wird generiert
    memory_array.memory_feld_random(); //auf das memory-Array mit den Bildern wird memory_feld_random angewandt
    /*in einer for-Schleife  wird das gesamte memory_array durchlaufen,
    die leere Variable "ausgabe" wird mit Containern gefuellt, die alle Felder enthalten
    div id=feld_ + "0, 1, .., memory_array.length"   */
	for(var i = 0; i < memory_array.length; i++){
		ausgabe += '<div id="feld_'+i+'" onclick="memoryFelderSpielen(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('spielfeld').innerHTML = ausgabe;
}//neuesFeld()

function memoryFelderSpielen(feld,wert){ /*memoryFelderSpielen mit den beiden Parametern
    "this" und "memory_array[i]" aus der for-Schleife*/
	if(feld.innerHTML == "" && memory_werte.length < 2){//wenn der Parameter "feld" leer ist und "memory_werte" < 2, wird die Fuktion durchlaufen
		feld.innerHTML = '<img src="' + '../image/memory/' + wert + '.jpg"/>';//dem Feld wird ein Bild zugewiesen, das nach Klick angezeigt wird
		if(memory_werte.length == 0){//wenn noch kein Feld geklickt wurde
			//mit der push-Methode wird das Array mit am letzten Index mit "wert" und mit "feld.id" erweitert
			memory_werte.push(wert);
			memory_feld_id.push(feld.id);
		} else if(memory_werte.length == 1){//wenn bereits ein Feld geklickt wurde
			memory_werte.push(wert);
			memory_feld_id.push(feld.id);
			if(memory_werte[0] == memory_werte[1]){//wenn beide Felder gleich sind
				memory_gefunden += 2;//wird "memory_gefunden" mit zwei inkrementiert
				// beide Arrays werden wieder geleert
				memory_werte = [];
            	memory_feld_id = [];
				/*wenn "memory_gefunden" die Groesse von "memory_array" erreicht hat,
				ist das gesamte Feld aufgedeckt*/
				if(memory_gefunden == memory_array.length){
				
				//das Element "meldung" wird in der HTML angesprochen und es erscheint eine der folgenden Meldung
				document.getElementById('meldung').style.visibility = 'visible';
				    /*Abhaengig von der Anzahl der Fehlversuche im Verhaltnis zur gespielten Array-Groesse
				    werden individuelle Meldungen ausgegeben*/
				    if(memory_fehlversuche<(memory_array.length/4)) {
				       } else if(memory_fehlversuche<(memory_array.length*0.5)) {
				       var str1 = document.getElementById('gratulation').innerHTML;
				       var str2 = str1.replace("Super Leistung!", "Herzlichen Glückwunsch!!");
				       document.getElementById("gratulation").innerHTML = str2;
				    } else if(memory_fehlversuche<(memory_array.length*0.75)) {
				       var str1 = document.getElementById('gratulation').innerHTML;
				       var str2 = str1.replace("Super Leistung!", "Noch ganz ok!!");
				       document.getElementById("gratulation").innerHTML = str2;
				    } else if(memory_fehlversuche<(memory_array.length)) {
				       var str1 = document.getElementById('gratulation').innerHTML;
				       var str2 = str1.replace("Super Leistung!", "Das war knapp vor schlecht!!");
				       document.getElementById("gratulation").innerHTML = str2;
				    }else {
				       var str1 = document.getElementById('gratulation').innerHTML;
				       var str2 = str1.replace("Super Leistung!", "Na endlich!");
				       document.getElementById("gratulation").innerHTML = str2;
				    }
				    //Anzahl der Fehlversuche wird nach regulaeren Spielende mit ausgegeben
				    document.getElementById('fehlversuche').innerHTML = "Fehlversuche: " +  memory_fehlversuche;
				}
			} else {//falls die Felder nicht gleich sind ...
				function feld_start(){//... wird die Funktion feld_start() aufgerufen
				    // beide Felder werden neu initialisiert
				    var feld_1 = document.getElementById(memory_feld_id[0]);
				    var feld_2 = document.getElementById(memory_feld_id[1]);
				    // und mit jeweils mit einem neuen Bild belegt
				    feld_1.style.background = 'url(../image/memory/false.jpg) no-repeat';
            	    feld_1.innerHTML = "";
				    feld_2.style.background = 'url(../image/memory/false.jpg) no-repeat';
            	    feld_2.innerHTML = "";
				    // beide Arrays werden wieder geleert
				    memory_werte = [];
            	    memory_feld_id = [];
            	    
            	    memory_fehlversuche+=1;//memory_fehlversuche wird mit 1 inkrementiert
            	    
            	    //Ausgabe der Fehlveruche
            	    document.getElementById("counter").innerHTML = "Fehlversuche: " + memory_fehlversuche;
            	    
            	    //Ausgaben bei bestimmer Anzahl an Fehlversuchen
            	    if(memory_fehlversuche == memory_array.length/4){
            	        window.alert("Das wird leider kein Geniestreich mehr werden!!!");
            	    }else if(memory_fehlversuche == memory_array.length){
            	        window.alert("Bitte etwas mehr Konzentration!!!");
            	    
            	    //nach 150% der Anzahl an Feldern als Fehlversuch wird das Spiel abgebrochen
            	    }else if(memory_fehlversuche == (memory_array.length*1.5)){
            	        document.getElementById('meldung').style.visibility = 'visible';
            	        var str1 = document.getElementById('gratulation').innerHTML;
				        var str2 = str1.replace("Super Leistung!", "GAME OVER!!");
				        document.getElementById("gratulation").innerHTML = str2;
            	    }
   				}
				setTimeout(feld_start, 1000);//zuruecksetzen der Felder nach 1 Sekunden
        	}
		}
	}
}//Ende memoryFelderSpielen(feld,wert)

/*--------------------------------------------------------------------------------------------------------------------*/

//Pruefung der Emaileingabe

function pruefung() {
    // Initialisierung des Arrays
	var form = document.forms[0];
	
	// fehler wird die Namen der nicht ausgefuellten Felder beinhalten
	var fehler = "";
	// Überpruefung der Textfelder
	if(form.name.value == ""){
		fehler = fehler + "Bitte einen Namen angeben.\n";
	}
	// Ueberpruefung der Textarea
	if(form.nachricht.value == ""){
		fehler = fehler + "Bitte eine Nachricht eingeben.\n";
	}
	/*Email pruefen
	es wird erst geprueft, ob etwas eingegeben wurde und wenn ja,
	wird die Syntax geprueft*/
	if(form.email.value != ""){
	var x = document.forms["kontakt"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        fehler = fehler + "Bitte eine gueltige Email-Adresse eingeben.\n";
    }}
	// Fehlermeldung 
	if(fehler != ""){
		var fehlerText = "Folgende Felder wurden nicht ausgefüllt:\n\n";
		fehlerText = fehlerText + fehler;
		window.alert(fehlerText);
		return false;
	}
	return true;
}//Ende pruefung()
