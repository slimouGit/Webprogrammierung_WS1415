//in function start() werden alle window.onload zusammengefasst
function start() {
  init();
  sagHallo();
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

}//Ende init()
/*-----------------------------------------------------------------------------------------------------------------*/

//Funktion zum drucken
function callPrint(){
	window.print(); 
}//Ende callPrint()

//Funktion oeffnet sidemap.xml im seperaten Fenster	
function callSidemap(Adresse){
    MeineSidemap = window.open("http://slimou.de/WebSpace/Web-Programmierung/AbschlussPraese/xml/sidemap.xml", "Sidemap", "width=250px, height=750px, top=50px");
    MeineSidemap.focus();
}//Ende callSidemap()


/*--------------------------------------------------------------------------------------------------------------------*/

//Funktion zur Begruessung des Users mit Zeitangabe
function sagHallo(){

Datum = new Date();
Stunde = Datum.getHours();
if(Stunde <= 9) Stunde = "0" + Stunde; //falls Anzahl Stunden einstellig, wird eine 0 vorangesetzt
Minute  = Datum.getMinutes();
if(Minute <= 9) Minute = "0" + Minute; //falls Anzahl Minuten einstellig, wird eine 0 vorangesetzt

//Zeitanzeige
var uhrzeit = document.getElementById("uhrzeit");
    uhrzeit.innerHTML = (Stunde + ":" + Minute);
    
if(Stunde >= 23){
    var element = document.getElementById("begruessung");
    element.innerHTML = "Jetzt noch wach";}
    
else if(Stunde >= 21){
    var element = document.getElementById("begruessung");
    element.innerHTML = "Hallo zu so spaeter Stund";}

else if(Stunde >= 17){
    var element = document.getElementById("begruessung");
    element.innerHTML = "Guten Abend";}

else if(Stunde >= 14){
    var element = document.getElementById("begruessung");
    element.innerHTML = "Guten Nachmittag";}

else if(Stunde >= 12){
    var element = document.getElementById("begruessung");
    element.innerHTML = "Guten Mittag";}

else if(Stunde >= 5){
    var element = document.getElementById("begruessung");
    element.innerHTML = "Guten Morgen";}

else if(Stunde >= 2){
    var element = document.getElementById("begruessung");
    element.innerHTML = "Hallo zu so früher Stund";}
}//Ende sagHallo

