
const num =["uno", "dos", "tres", "cuatro", "cinco", "seis"];
let cont=0;
let casilla;
let indice=0;
const hex=new Array();//Arreglo que contendra nuestro index;

const list=[[1,1,1,1,1,1,"Chien", 1],[2,2,2,2,2,2,"kun"],
            [2,1,2,2,2,1,"Chun"],[1,2,2,2,1,2,"Meng"],[2,1,2,1,1,1,"Hsu"],
            [1,1,1,2,1,2,"Sung"],[2,2,2,2,1,2,"Shih"],[2,1,2,2,2,2,"PI"],[1,1,2,1,1,1,"Hsiao Chu"],
            [1,1,1,2,1,1,"Lu"]];



/*Funcion que hace la suma de la caja*/
function calcula(){
    

    let campos; //campos a leer
    let suma=0;
    
    
    campos=document.getElementsByName("ingresa");

    for(x=0; x<campos.length;x++){
        suma=suma+parseInt(campos[x].value, 10);

    }
    if(cont<6){
        dibuja(suma);
        if(cont==6){
            busqueda=nombre(hex);
            document.getElementById("nombreHex").innerHTML=" "+busqueda[6];
            //document.getElementById("nombreHex").innerHTML=" holi";
        }
    }
    else{
        alert("Hexagrama lleno");
    }
    
}

function dibuja(suma){
    if(suma==6){
        casilla=document.getElementById(num[cont]);
        console.log(`Use: ${num[cont]}`);
        casilla.innerHTML= "yin mutante";
        hex.push(3);
        cont++;
    }
    else if(suma==7){
        casilla=document.getElementById(num[cont]);
        console.log(`Use: ${num[cont]}`);
        casilla.innerHTML= "yang";
        hex.push(1);
        cont++;
    }
    else if(suma==8){
        casilla=document.getElementById(num[cont]);
        console.log(`Use: ${num[cont]}`);
        casilla.innerHTML= "yin";
        hex.push(2);
        cont++;
    }
    else if(suma==9){
        casilla=document.getElementById(num[cont]);
        console.log(`Use: ${num[cont]}`);
        casilla.innerHTML= "yang mutante";
        hex.push(4);
        cont++;
    }
    else{
        alert(`Valores no definidos`);
        return 0;
    }
    
   
}

function borrarLine(){
    indice=cont;
    cont--;
    casilla=document.getElementById(num[cont])
    if(casilla!=null){
        casilla.innerHTML=" ";
    }
    if(cont==-1){
        indice=0;
        cont=0;
    }
    console.log(`Use: ${num[cont]}`);
    //casilla=document.getElementById(num[cont]);
}

function borrarHex(){

}

function nombre(Hex){
let averts;
let bandera2=0;
    for(y=0;y<9;y++){
        averts=list[y];
        for(x=indice; x<6;x++){
            
            if(Hex[x]===averts[x]){
                bandera2=1;
            }
            else bandera=0;break;
        } 
        if(bandera2==1){
            return averts;
        }
    }
}