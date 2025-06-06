//import { Personaje } from "biblioteca.js";

function main(){
	const antMan = new Personaje("Ant-Man");

	const div2 = document.getElementsByClassName("detalle")[1];

	if (div2){
		div2.innerHTML = `Mi nombre es: ${antMan.name}`;
	}
}

main();