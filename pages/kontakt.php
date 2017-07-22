<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>slimou</title>
	<meta name="author" content="Salim Oussayfi/797754" />
	<meta name="description" content="Kontakt" />
	<meta name="keywords" content="Kontaktformular" />
	<meta name="robots" content="index,follow" />
	<meta name="viewport" content="width=device-width" />
	<link rel="icon" href="../image/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../css/layout.css">
	<script src="../js/projekt.js" type="text/javascript"></script>
	<!-- Paytone One laesst sich nicht in CSS importieren -->
	<link href='http://fonts.googleapis.com/css?family=Paytone+One' rel='stylesheet' type='text/css'>
</head>

<!-- PHP Script zum Versenden der uebergebenen Formulardaten aus kontakt.html -->
<?php
        $ihre_emailadresse = 'salim@slimou.de';
        $email_absender = 'From: Kontaktformular <oussayfi@gmail.com>';
        $email_betreffzeile = 'Anfrage von slimou.de';
       
        //die 4 Variablen aus dem Formular werden uebergeben
        $name =   $_POST['name'];
	    $email =    $_POST['email'];
	    $betreff =   $_POST['betreff'];
	    $nachricht =  $_POST['nachricht'];
        //Ip und Host des Senders ermitteln
		$ip = $_SERVER['REMOTE_ADDR'];
		$host = gethostbyaddr($ip);
        //Zeit und Datum ermitteln
		$zeit = time();
		$datum = date ("d.m.Y", $zeit);
		$uhrzeit = date ("H:i:s", $zeit);
		
		//Ausgabe beim Empfaenger
        $email_nachricht  = "Von: $name\nBetreff: $betreff\n";
        $email_nachricht .= "E-Mailadresse: $email\n";
        $email_nachricht .= "Nachricht:\n$nachricht\n\n";
        $email_nachricht .= "Gesendet von:\nIP: $ip\nHost: $host\n\n";
        $email_nachricht .= "Gesendet am:\n$datum um $uhrzeit Uhr";
        
	    // Mail Methode zum versenden der Email senden
        mail($ihre_emailadresse, $email_betreffzeile, $email_nachricht, $email_absender);
?>

	<body>
	
        <!-- Header -->
	    <header>
		    <div class="logo">
		        <a href="../index.html"><img src="../image/slimouLogo.png" alt="slimou Logo" title="slimou" width="200" height="80" /></a>
		    </div>
		</header>

    	<!-- Navigation mit Verlinkungen zu den Unterseiten-->
    <nav>
        		<ol>
        			<li class = "link">
        				<a href="../index.html" title="Startseite">Start</a>
        				<ol>
        					<li><a href="aufgaben.html" title="Beschreibung der Einsendeaufgaben des Seminars Web-Programmierung" accesskey="a">Einsendeaufgaben</a></li>
        				</ol>
        			</li>
        			<li class = "link">
        				<a href="privat.html" title="ein paar Infos zu mir" accesskey="p">Privat</a>
        			</li>
        			<li class = "link">
        				<a href="projekte.html" title="ein paar meiner bisher umgesetzten Web-Projekte" accesskey="w">Projekte</a>
        				<ol>
        					<li><a href="projekte.html#mediendesign" title="Mediendesign 2">Mediendesign 2</a></li>
        					<li><a href="projekte.html#alibaba" title="Alibaba">Alibaba</a></li>
        					<li><a href="projekte.html#wp" title="Web-Programmierung">Web-Programmierung</a></li>
        					<li><a href="projekte.html#slimou" title="slimou">slimou</a></li>
        				</ol>
        			</li>
        			<li class = "link">
        				<a href="seminar.html" title="wissenswertes zu verschiedenen Web-Techniken" accesskey="s">Seminar</a>
        				<ol>
        					<li><a href="seminar.html#html" title="HTML">HTML</a></li>
			                <li><a href="seminar.html#css" title="CSS">CSS</a></li>
			                <li><a href="seminar.html#javascript" title="JavaScript">JavaScript</a></li>
			                <li><a href="seminar.html#validierung" title="Validierung">Validierung</a></li>
                            <li><a href="seminar.html#webstandards" title="Webstandards">Webstandards</a></li>
                            <li><a href="seminar.html#accessibility" title="Accessibility">Accessibility</a></li>
			                <li><a href="pages/seminar.html#usability" title="Usability">Usability</a></li>
                            <li><a href="seminar.html#xml" title="XML">XML</a></li>
        				</ol>
        			</li>
        			<li class = "link">
        				<a href="spiel.html" accesskey="g" title="Memory-Spiel">Spiel</a>
        			</li>
        			<li class = "link">
        				<a href="kontakt.html" accesskey="k" title="Kontakt">Kontakt</a>
        				<ol>
        					<li><a href="impressum.html" accesskey="i" title="Impressum">Impressum</a></li>
        				</ol>
        			</li>
        		</ol>
        	</nav>    
    
        <!-- Sidebar nur bei Screenlayout sichtbar -->
        <div id="sidebar"></div>
    
        <!-- JavaScript aufrufe fuer Drucken und Weiterleitung auf die Sidemap -->
        <div id="funktion"><p id="drucken" title="Seite drucken">Seite drucken</p><p id="sidemap" title="Sidemap anzeigen">Sidemap</p></div>
     
	    <!-- Hauptbestandteil der Seite-->
	    <main>
		    <!-- Einleitung-->
    	    <section>
			    <h1 class="shadow">Kontakt</h1>
		    </section>
	        <section>
			    <div class="right"><span class="einleitung">Vielen Dank.</span>
			            <p>Ich habe die Email erhalten.</p>
			            <p><a href="kontakt.html">zurueck</a></p>
			    </div>
            </section>
	    </main>
    

	    <!-- Footer mit Verlinkungen zum Impressum und einer Kontaktmoeglichkeit -->
	    <footer>
		    <p>Web-Programmierung WS 14/15 | Salim Oussayfi 797754 | <a href="impressum.html" accesskey="i" title="Impressum">Impressum</a> | <a href="kontakt.html" accesskey="k" title="Kontakt">Kontakt</a></p>
    	</footer>
	
    </body>
</html>
