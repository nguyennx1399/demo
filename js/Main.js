// JavaScript Document
console.log("This is Working");
document.getElementById("menu").addEventListener("click",openMenu);

function openMenu(){
	
	document.getElementById("dropdown").classList.toggle("active");
}
