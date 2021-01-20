var r=[];
var co=1;
const num =["uno", "dos", "tres", "cuatro", "cinco", "seis"];
const num1=["uno1", "dos1", "tres1", "cuatro1", "cinco1", "seis1",
"uno2", "dos2", "tres2", "cuatro2", "cinco2", "seis2"];
const nh=["nombreHex11", "nombreHex22"];
let cont=0;//indica el indice donde se guardara en el arreglo hex
let cont1=0;//contador que recorre el arreglo num
let casilla; //guarda algunos elementos de del DOM
let bandera=0; //bandera que dice si se calculo un hexagrama compuesto
let indice=[]; //arreglo que guarda los yin/yan mutantes
let nombres=[]//aqui guardo los numeros de los nombres
let hex=[];//Arreglo que contendra nuestro index;
let copiaHex=[];

let leftInicial=-150;
let botInicial=0;

const list=[[1,1,1,1,1,1,"Ch'ien", 1],[2,2,2,2,2,2,"k'un",2],
            [1,2,2,2,1,2,"Chun",3],[2,1,2,2,2,1,"Meng",4],[1,1,1,2,1,2,"Hsu",5],
            [2,1,2,1,1,1,"Sung",6],[2,1,2,2,2,2,"Shih",7],[2,2,2,2,1,2,"PI",8],[1,1,1,2,1,1,"Hsiao Chu",9],
            [1,1,2,1,1,1,"Lu",10],[1,1,1,2,2,2,"t'ai",11],[2,2,2,1,1,1,"P'i",12],[1,2,1,1,1,1,"T'ung Jen",13], 
            [1,1,1,1,2,1,"Ta yu",14], [2,2,1,2,2,2,"Ch'ien",15], [2,2,2,1,2,2,"Yü",16], [1,2,2,1,1,2,"Sui",17], 
            [2,1,1,2,2,1,"Ku",18], [2,2,1,1,1,1,"Lin",19], [1,1,1,1,2,2,"kuan",20], [1,2,2,1,2,1,"Shih Ho",21], 
            [1,2,1,2,2,1,"Pi",22], [2,2,2,2,2,1,"Po",23], 
            [1,2,2,2,2,2,"Fu",24], [1,2,2,1,1,1,"Wu Wang",25], [1,1,1,2,2,1,"Ta Ch'u",26], [1,2,2,2,2,1,"I",27], 
            [2,1,1,1,1,2,"Ta kuo",28], [2,1,2,2,1,2,"K'an",29], [1,2,1,1,2,1,"Li",30], [2,2,1,1,1,2,"Hsien",31], 
            [2,1,1,1,2,2,"Heng",32], [2,2,1,1,1,1,"Tun",33], 
            [1,1,1,1,2,2,"Ta Chuang",34], [2,2,2,1,2,1,"Chin",35], [1,2,1,2,2,2,"Ming I",36], [1,2,1,2,1,1,"Chia Jen",37], 
            [1,1,2,1,2,1,"K'uei",38], [2,2,1,2,1,2,"Chien",39], 
             [2,1,2,1,2,2,"Hsieh",40], [1,1,2,2,2,1,"Sun",41], [1,2,2,2,1,1,"I",42], [1,1,1,1,1,2,"Kuai",43], [2,1,1,1,1,1,"Kou",44], 
             [2,2,2,1,1,2,"Ts'ui",45], [2,1,1,2,2,2,"Sheng",46], 
            [2,1,2,1,1,2,"K'un",47], [2,1,1,2,1,2,"Ching",48], [1,2,1,1,1,2,"Ko",49], 
            [2,1,1,1,2,1,"Ting",50], [1,2,2,1,2,2,"Chen",51], [2,2,1,2,2,1,"Ken",52], [2,2,1,2,1,1,"Chien",53]
            , [1,1,2,1,2,2,"Kuei Mei", 54], [1,2,1,1,2,2,"Feng", 55], [2,2,1,1,2,1,"Lü",56], 
            [2,1,1,2,1,1,"Sun", 57], [1,1,2,1,1,2,"Tui", 58], 
            [2,1,2,2,1,1,"Huan", 59], [1,1,2,2,1,2,"Chieh", 60], [1,1,2,2,1,1,"Chung Fu", 61], 
            [2,2,1,1,2,2,"Hsiao Kuo", 62]
            , [1,2,1,2,1,2,"Chi Chi", 63], [2,1,2,1,2,1,"Wei Chi", 64]];



/*Funcion que hace la suma de la caja*/
function calcula(){
    

    let campos; //campos a leer
    let suma=0;
    let busqueda;
    
    
    campos=document.getElementsByName("ingresa");

    for(x=0; x<campos.length;x++){
        suma=suma+parseInt(campos[x].value, 10);

    }
    if(cont<6){
        dibuja(suma);
        if(cont==6){

            
                if(indice[0]==null){
                    busqueda=nombre(hex);
                    casilla=document.getElementById("nombreHex");
                    casilla.style.bottom=0+"px";
                    casilla.style.left=80+"px";
                    
                    casilla.innerHTML=""+busqueda[7] +" "+busqueda[6];
                    r[0]=busqueda[7]
                    nombres.push(busqueda[7]);
                    bandera=0;
                    
                }
                else{
                    botInicial=0;
                    copiaHex=hex.slice();
                    corrige();
                    
                    document.getElementById("nombreHex").innerHTML="";
                    bandera=1;
                } 
        }
    }
    else{
        alert("Hexagrama lleno");
    }
    
}

function dibuja(suma){
    if(suma==6){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "_________ x ________";
        hex.push(3); 
        animacion(num[cont]);
        indice.push(cont);
        cont++;
    }
    else if(suma==7){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "___________________";
        animacion(num[cont]);
        hex.push(1);
        cont++;
    }
    else if(suma==8){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= `_________   _________`;
        animacion(num[cont]);
        hex.push(2);
        cont++;
    }
    else if(suma==9){
        casilla=document.getElementById(num[cont]);
        casilla.innerHTML= "_________ 0 ________";
        animacion(num[cont]);
        hex.push(4); 
        indice.push(cont);
        cont++;
    }
    else{
        alert(`Valores no definidos`);
        return 0;
    }
    
   
}

function borrarLine(){
	r[0]=0;
	co=1;
    botInicial-=30;
    cont1=0; 
    nombres=[];
   
    //hex=new Array();

    if(bandera==1){
        document.getElementById("hexagrama1").style.visibility="hidden"
        document.getElementById("hexagrama2").style.visibility="hidden"
    }
    
    cont--;

    console.log(`valor del cont ${cont}
                valor de hex ${hex[cont]}`);

    

    for(x=0;copiaHex[x]!=null;x++){
        console.log(`valor de hex ${copiaHex[x]}, x: ${x}`);
    }

    if(hex[cont]===4 || hex[cont]===3){
        indice.pop();
        console.log("entro al if")
        //if(indice[0]==null) bandera=0;
    }

    hex.pop(); 

    
    //borro el nombre
    document.getElementById("nombreHex").innerHTML=" ";
    //borro el elemento
    casilla=document.getElementById(num[cont])

    if(casilla!=null){
        casilla.innerHTML=" ";
    }
    if(cont==-1){
        bandera=0;
        cont=0;
        document.getElementById("nombreHex").innerHTML=" ";
        hex=[];
        indice=[];
        leftInicial=-150;
        botInicial=0;
    }
    //console.log(`Use: ${num[cont]}`);
}

function borrarHex(){
	r[0]=0;
	co=1;
     cont=0;
     cont1=0;
      bandera=0;
    indice=[];
    nombres=[];
    hex=[];
    leftInicial=-150;
    botInicial=0;    
        document.getElementById("hexagrama1").style.visibility="hidden"
        document.getElementById("hexagrama2").style.visibility="hidden"
    

    document.getElementById("hexagrama").innerHTML=` <div id="seis"></div>
    <div id="cinco"></div>
    <div id="cuatro"></div>
    <div id="tres"></div>
    <div id="dos"></div>
    <div id="uno"></div>
    <div id="nombreHex"></div>`;

    document.getElementById("hexagrama1").innerHTML=`<div id="seis1"></div>
    <div id="cinco1"></div>
    <div id="cuatro1"></div>
    <div id="tres1"></div>
    <div id="dos1"></div>
    <div id="uno1"></div>
    <div id="nombreHex11"></div>`
    document.getElementById("hexagrama2").innerHTML=`<div id="seis2"></div>
    <div id="cinco2"></div>
    <div id="cuatro2"></div>
    <div id="tres2"></div>
    <div id="dos2"></div>
    <div id="uno2"></div>
    <div id="nombreHex22"></div>`
}

function nombre(Hex){
let cuenta=0;
let averts;

    for(y=0;y<64;y++){

        averts=list[y];

        for(x=0; x<6;x++){
            if(Hex[x]==averts[x]){
                cuenta+=1;
            }
            else break;
        }

        if(cuenta==(6)){
            return averts;
        }
        else cuenta=0;     
    }
    
}


function corrige(){
    let x=0;
    
        for(x=0;indice[x]!=null; x++){
            if(copiaHex[indice[x]]===3){
                copiaHex[indice[x]]=1;
            }
            else{
                copiaHex[indice[x]]=2;
            }
        }
        console.log(`valores left ${leftInicial}  bot ${botInicial}` );
        defineCSS("hexagrama1");
        dibujaa(0);

        for(x=0;indice[x]!=null; x++){
            if(copiaHex[indice[x]]===1){
                copiaHex[indice[x]]=2;
            }
            else copiaHex[indice[x]]=1;
        }

        defineCSS("hexagrama2");
        botInicial=0;
        console.log(`valores left ${leftInicial}  bot ${botInicial}` );
        dibujaa(1);
}
    


function dibujaa(f){
    let busqueda;

        for(x=0;x<6;x++){
            if(indice[x]!=null && indice[x]==x){
                if(copiaHex[indice[x]]==1){
                
                    document.getElementById(num1[cont1]).innerHTML="___________________";
                    animacion(num1[cont1]);
                }
                else{
                    
                    document.getElementById(num1[cont1]).innerHTML=`_________   _________`;
                    animacion(num1[cont1]);
                }
            }
            else{
                if(copiaHex[x]==1){
                    document.getElementById(num1[cont1]).innerHTML="___________________";
                    animacion(num1[cont1]); 
                }
                else{
                    document.getElementById(num1[cont1]).innerHTML=`_________   _________`;
                    animacion(num1[cont1]);
                }
            }
            
        cont1++;         

        }
        busqueda=nombre(copiaHex);
        casilla=document.getElementById(nh[f]);
        casilla.style.bottom=0+"px";
        casilla.style.left=80+"px";
        casilla.innerHTML=""+busqueda[7] +" "+busqueda[6];
        nombres.push(busqueda[7]);
		r[co]=busqueda[7];
   		co++;
}


function defineCSS(nombre){
    //document.querySelector(nombre).setAttribute("style","visibility: visible");
    document.getElementById(nombre).style.visibility="visible"
}


function animacion(elem1){
    botInicial+=30;
    let id=setInterval(frame, 5);
    let elem=document.getElementById(elem1);
    
    elem.style.bottom=botInicial+"px";
    function frame(){
        if(leftInicial==25){
            clearInterval(id);
        }
        else{
            leftInicial++;
            elem.style.left=leftInicial+"px";

        }
    }
    leftInicial=-150;
}

function mOver(obj, x) {
	obj.style.backgroundColor="Cyan";
	document.getElementById(x).style.backgroundColor="Cyan";
switch (x){
		
		case 1:{
		
		document.getElementById("nombre").innerHTML = "1.  Cielo. Lo creativo. El principio generador";
			onmouseout=mouseOut(obj);
	break;
	}
		case 2:{
		document.getElementById("nombre").innerHTML = "2.  Tierra. Lo receptivo. El principio pasivo";
	break;
	}
		case 3:{
		document.getElementById("nombre").innerHTML = "3.  Acumular. El obstáculo inicial. La dificultad del comienzo";
	break;
	}
		case 4:{
		document.getElementById("nombre").innerHTML = "4.  Juventud. El joven necio. La inmadurez.";
	break;
	}
		case 5:{
		document.getElementById("nombre").innerHTML = "5.  Esperar. La espera. La maduración.";
	break;
	}
		case 6:{
		document.getElementById("nombre").innerHTML = "6.  Disputar. El conflicto. El pleito.";
	break;
	}
		case 7:{
		document.getElementById("nombre").innerHTML = "7.  Ejército. La legión.";
	break;
	}
		case 8:{
		document.getElementById("nombre").innerHTML = "8.  Solidaridad. La unión";
	break;
	}
		case 9:{
		document.getElementById("nombre").innerHTML = "9.  Animalito doméstico. La pequeña fuerza";
	break;
	}
		case 10:{
		document.getElementById("nombre").innerHTML = "10.  Caminar. El porte. El paso cauteloso";
	break;
	}
		case 11:{
		document.getElementById("nombre").innerHTML = "11.  Prosperidad. La paz. La armonía.";
	break;
	}
		case 12:{
		document.getElementById("nombre").innerHTML = "12.  Cierre. El estancamiento. Lo inerte.";
	break;
	}
		case 13:{
		document.getElementById("nombre").innerHTML = "13. Hombres Reunidos. La unión comunitaria";
	break;
	}
		case 14:{
		document.getElementById("nombre").innerHTML = "14. Gran dominio. La gran posesión. Lo que se tiene de más.";
	break;
	}
		case 15:{
		document.getElementById("nombre").innerHTML = "15. Condescendencia. La modestia. La humildad ";
	break;
	}
		case 16:{
		document.getElementById("nombre").innerHTML = "16. Ocuparse. El entusiasmo. La algarabía.";
	break;
	}
		case 17:{
		document.getElementById("nombre").innerHTML = "17. Conformarse. La continuidad. El seguimiento. ";
	break;
	}
		case 18:{
		document.getElementById("nombre").innerHTML = "18. Destrucción. La reconstrucción. La labor en lo corrompido.";
	break;
	}
		case 19:{
		document.getElementById("nombre").innerHTML = "19. Acercarse. Lo que va llegando.";
	break;
	}
		case 20:{
		document.getElementById("nombre").innerHTML = "20. Observar. La contemplación. ";
	break;
	}
		case 21:{
		document.getElementById("nombre").innerHTML = "21. Quebrar mordiendo. La dentellada. La filosa mordedura";
	break;
	}
		case 22:{
		document.getElementById("nombre").innerHTML = "22. Adornar. La elegancia. La gracia.";
	break;
	}
		case 23:{
		document.getElementById("nombre").innerHTML = "23. Resquebrajar. La desintegración. El derrumbe";
	break;
	}
		case 24:{
		document.getElementById("nombre").innerHTML = "24. Regresar. El retorno. Lo que vuelve.";
	break;
	}
		case 25:{
		document.getElementById("nombre").innerHTML = "25. Sinceridad. La inocencia. La naturalidad.";
	break;
	}
		case 26:{
		document.getElementById("nombre").innerHTML = "26. Fuerza educadora. El poder de lo fuerte. La gran acumulación.";
	break;
	}
		case 27:{
		document.getElementById("nombre").innerHTML = "27. Nutrirse. La alimentación. Las fauces.";
	break;
	}
		case 28:{
		document.getElementById("nombre").innerHTML = "28. Excesos. La preponderancia de lo grande.";
	break;
	}
		case 29:{
		document.getElementById("nombre").innerHTML = "29. Peligro. Lo abismal. La caida.";
	break;
	}
		case 30:{
		document.getElementById("nombre").innerHTML = "30. Distinguir. El resplandor. Lo adherente.";
	break;
	}
		case 31:{
		document.getElementById("nombre").innerHTML = "31. Unir. La influencia.La atracción.";
	break;
	}
		case 32:{
		document.getElementById("nombre").innerHTML = "32. Luna Creciente. La duración. La permanencia.";
	break;
	}
		case 33:{
		document.getElementById("nombre").innerHTML = "33. Retirarse. EL repliegue.";
	break;
	}
		case 34:{
		document.getElementById("nombre").innerHTML = "34. Gran fuerza. El gran vigor.";
	break;
	}
		case 35:{
		document.getElementById("nombre").innerHTML = "35. Progresar. El avance.";
	break;
	}
		case 36:{
		document.getElementById("nombre").innerHTML = "36. Luz que se apaga. El oscurecimiento.";
	break;
	}
		case 37:{
		document.getElementById("nombre").innerHTML = "37. Gente de familia. El clan.";
	break;
	}
		case 38:{
		document.getElementById("nombre").innerHTML = "38. Contraste. La oposición. El antagonismo.";
	break;
	}
		case 39:{
		document.getElementById("nombre").innerHTML = "39. Dificultad. El obstáculo. El impedimento.";
	break;
	}
		case 40:{
		document.getElementById("nombre").innerHTML = "40. Explicar. La liberación. El alivio.";
	break;
	}
		case 41:{
		document.getElementById("nombre").innerHTML = "41. Perder. La disminución.";
	break;
	}
		case 42:{
		document.getElementById("nombre").innerHTML = "42. Evolución. El aumento. La ganancia.";
	break;
	}
		case 43:{
		document.getElementById("nombre").innerHTML = "43. Decidir. El desbordamiento. La resolución.";
	break;
	}
		case 44:{
		document.getElementById("nombre").innerHTML = "44. Encontrarse. El acoplamiento.";
	break;
	}
		case 45:{
		document.getElementById("nombre").innerHTML = "45. Cosechar. La reunión. La convergencia.";
	break;
	}
		case 46:{
		document.getElementById("nombre").innerHTML = "46. Subir. El ascenso. La escalada.";
	break;
	}
		case 47:{
		document.getElementById("nombre").innerHTML = "47. Angustia. La pesadumbre. El agotamiento.";
	break;
	}
		case 48:{
		document.getElementById("nombre").innerHTML = "48. El pozo de agua. La fuente.";
	break;
	}
		case 49:{
		document.getElementById("nombre").innerHTML = "49. Renovar. La revolución. El cambio";
	break;
	}
		case 50:{
		document.getElementById("nombre").innerHTML = "50. La caldera. Lo alquímico ";
	break;
	}
		case 51:{
		document.getElementById("nombre").innerHTML = "51. Trueno. La conmoción. Lo suscitativo.";
	break;
	}
		case 52:{
		document.getElementById("nombre").innerHTML = "52. Cimientos. La quietud. La detención.";
	break;
	}
		case 53:{
		document.getElementById("nombre").innerHTML = "53. Evolución. El progreso gradual.";
	break;
	}
		case 54:{
		document.getElementById("nombre").innerHTML = "54. Desposar a la hija menor. La doncella.";
	break;
	}
		case 55:{
		document.getElementById("nombre").innerHTML = "55. Abundancia. La plenitud.";
	break;
	}
		case 56:{
		document.getElementById("nombre").innerHTML = "56. Viajero. El andariego";
	break;
	}
		case 57:{
		document.getElementById("nombre").innerHTML = "57. Viento. Lo penetrante. Lo suave.";
	break;
	}
		case 58:{
		document.getElementById("nombre").innerHTML = "58. Recogerse. La serenidad. La satisfacción.";
	break;
	}
		case 59:{
		document.getElementById("nombre").innerHTML = "59. Confusión. La dispersión. La disolución.";
	break;
	}
		case 60:{
		document.getElementById("nombre").innerHTML = "60. Moderación. La restricción. La limitación";
	break;
	}
		case 61:{
		document.getElementById("nombre").innerHTML = "61. Fe Interior. La verdad interior. La sinceridad interna.";
	break;
	}
		case 62:{
		document.getElementById("nombre").innerHTML = "62. Pequeñas cosas importantes. La pequeña preponderancia.";
	break;
	}
		case 63:{
		document.getElementById("nombre").innerHTML = "63. Conclusiones. Después de la realización.";
	break;
	}
		case 64:{
		document.getElementById("nombre").innerHTML = "64. Inconcluso. Antes de la realización.";
	break;
	}

}
	
}
function mOut(obj, x) {
	obj.style.backgroundColor="GhostWhite";
	document.getElementById("nombre").innerHTML = "";
	document.getElementById(x).style.backgroundColor="GhostWhite";
}

function m1Over(obj, x) {
	var y=x;
	mOver(obj,r[y]);
	if(r[y]==0){
	obj.style.backgroundColor="GhostWhite";
	}
}

function m1Out(obj, x) {
	var y=x;
	mOut(obj,r[y]);
	obj.style.backgroundColor="GhostWhite";
}