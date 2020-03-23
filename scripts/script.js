

setInterval(draaien, 1);
setInterval(verandering,1);


//Door deze functie draaien de wijzers
function draaien(){
	var vandaag = new Date();
	var uur = vandaag.getHours() %12 * 30; // 12 uren op een ronde klok, 1 uur is 30 graden
	var minuut = vandaag.getMinutes() * 6; // 1 minuut is 6 graden 
	var seconde = vandaag.getSeconds() * 6;	// 1 seconde is 6 graden 

	//Hierdoor word het aantal uur/minuten/seconden is graden gekoppeld de rotatie van de wijzers. 
	document.getElementById("uren").style.transform="rotate("+ uur+ "deg)";
	document.getElementById("minuten").style.transform="rotate("+ minuut+ "deg)";
	document.getElementById("seconden").style.transform="rotate("+ seconde+ "deg)";
}

//Door deze functie veranderd de achtergrond voor de goede fase van de dag
function verandering(){
	var vandaag = new Date();
	var uur = vandaag.getHours();
	var minuut = vandaag.getMinutes() ;
	var seconde = vandaag.getSeconds();	
	var body = document.body;

	//Hier word afhankelijk van welk uur het is een achtergrond toegevoegd
	if ("6"<= uur&&uur < "12") {
		document.getElementById("p1").innerHTML = "Goede morgen";
		body.classList.add("ochtend");
		body.classList.remove("nacht");
	}

	 else if ("12"<= uur&&uur < "18") {
	 	document.getElementById("p1").innerHTML = "Goede middag";
	 	body.classList.add("middag");
	 	body.classList.remove("ochtend");
	} 

	 else if ("18"<= uur) {
	 	document.getElementById("p1").innerHTML = "Goede avond";
	 	body.classList.add("avond");
	 	body.classList.remove("middag");
	} 

	else if ("0"<= uur&&uur < "6"){
	    document.getElementById("p1").innerHTML = "Goede nacht";
	    body.classList.add("nacht");
	    body.classList.remove("avond");
	}

	//Toevoeging tekst 'wakker worden' of 'slaaplekker' bij de aangegeven uur

	if ("7"<= uur&&uur < "8") {
		document.getElementById("p2").innerHTML = "Wakker worden!";
	}

	 else if ("21"<= uur&&uur < "23") {
	 	document.getElementById("p2").innerHTML = "Slaaplekker!";
	} 
	else{
		document.getElementById("p2").innerHTML = "";
	}

}