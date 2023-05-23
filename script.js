// your code here

const button = document.getElementById("button");
const url = document.getElementById("url");
const name = document.getElementById("name");
const year = document.getElementById("year");

button.addEventListener("click" , (event) => {
	event.preventDefault();
	url.append("name="+name.value +"&"+"year="+year.value);
	
	
})