
const num =["uno", "dos", "tres", "cuatro", "cinco", "seis"];
let cont=0;
let casilla;
/*Funcion que hace la suma de la caja*/
function calcula(){
    let campos; 
    let suma=0;
    campos=document.getElementsByName("ingresa");

    for(x=0; x<campos.length;x++){
        suma=suma+parseInt(campos[x].value, 10);
    }
    console.log(`La suma es: ${suma}`)
    if(cont<6){
        dibuja(suma);
    }
    else{
        alert("Hexagrama lleno");
    }
    
}

function dibuja(suma){
    if(suma==6){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "yin mutante";
        cont++;
    }
    else if(suma==7){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "yang";
        cont++;
    }
    else if(suma==8){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "yin";
        cont++;
    }
    else if(suma==9){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "yang mutante";
        cont++;
    }
    else{
        alert(`Valores no definidos`);
    }
}

function borrarLine(){
    casilla.innerHTML=" ";
    cont--;
    if(cont==-1){
        cont=0;
    }
    casilla=document.getElementById(num[cont]);
}

function borrarHex(){

}