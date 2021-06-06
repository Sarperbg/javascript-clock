let user = prompt("İsminizi Giriniz.");
let firstName = document.querySelector("#user").innerHTML = user;
let date = new Date();
let day = date.getDay();
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
var myVar=setInterval(function(){showTime()},1000);
                
function showTime() {
	var d = new Date();
	document.querySelector("#myClock").innerHTML = [ d.toLocaleTimeString() + " " + days[day]];
}