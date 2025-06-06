var meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio" ,"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.log("Hola Mundo");
console.log(2 + 2);

function adios(){
    console.log("Adios");
}

adios();



function comillas(){

console.log("Qué facil es incluir \'comillas simples\' \n y \"Comillas Dobles\"" );

}

comillas();


alert(meses);


    var numfac = parseInt(prompt("Introduce un número"));

    var resul=1;

    for(i=1; i<=numfac;i++){

        resul=resul*i

    }
alert("El factrorial de " + numfac + "es " + resul);