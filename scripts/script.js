
setInterval(draaien, 1);
setInterval(verandering,1) //nog aanpassen


function draaien(){
	var vandaag = new Date();
	var uur = vandaag.getHours() %12 * 30;
	var minuut = vandaag.getMinutes() * 6;
	var seconde = vandaag.getSeconds() * 6;	

	document.getElementById("uren").style.transform="rotate("+ uur+ "deg)";
	document.getElementById("minuten").style.transform="rotate("+ minuut+ "deg)";
	document.getElementById("seconden").style.transform="rotate("+ seconde+ "deg)";
}

function verandering(){
	var vandaag = new Date();
	var uur = vandaag.getHours();
	var minuut = vandaag.getMinutes() ;
	var seconde = vandaag.getSeconds();	
	var body = document.body;

if ("0"<= seconde&&seconde < "15") {
	document.getElementById("p1").innerHTML = "Goede morgen!";
	body.classList.add("ochtend");
	body.classList.remove("nacht");
}

 else if ("15"<= seconde&&seconde < "30") {
 	document.getElementById("p1").innerHTML = "Goede middag!";
 	body.classList.add("middag");
 	body.classList.remove("ochtend");
} 

 else if ("30"<= seconde&&seconde < "45") {
 	document.getElementById("p1").innerHTML = "Goede avond!";
 	body.classList.add("avond");
 	body.classList.remove("middag");
} 

else {
    console.log("Have a good night!");
    document.getElementById("p1").innerHTML = "Goede nacht!";
    body.classList.add("nacht");
    body.classList.remove("avond");
}

//Toevoeging tekst 'wakker worden' of 'slaaplekker' bij de aangegeven tijd

if ("0"<= seconde&&seconde < "5") {
	document.getElementById("p2").innerHTML = "Wakker worden!";
}

 else if ("30"<= seconde&&seconde < "35") {
 	document.getElementById("p2").innerHTML = "Slaaplekker!";
} 
else{
	document.getElementById("p2").innerHTML = "";
}

}